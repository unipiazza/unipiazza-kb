// Import di una collezione KB (cache locale) -> file markdown + immagini.
//
// Uso:  node import.mjs <collection_id> [--all]
//
// Legge da scripts/cache/<id>/:
//   - collection.json  { collection_id, title, description, locale, slug, dir }
//   - list.json        l'output grezzo di list_kb_articles  { data: [...] }
//   - <article_id>.html  il body di ogni articolo (da get_kb_article)
//
// Di default importa solo gli articoli `published`. Con --all anche le bozze.
// I metadati vengono dal list.json; da get serve solo il body (gli .html).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { htmlToMarkdown, extractImageSrcs } from "./lib/convert.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const collectionId = process.argv[2];
const includeAll = process.argv.includes("--all");
if (!collectionId) {
  console.error("Uso: node import.mjs <collection_id> [--all]");
  process.exit(1);
}

const cacheDir = path.join(__dirname, "cache", collectionId);
const collection = JSON.parse(fs.readFileSync(path.join(cacheDir, "collection.json"), "utf8"));
const list = JSON.parse(fs.readFileSync(path.join(cacheDir, "list.json"), "utf8"));

const dir = collection.dir;
const articlesDir = path.join(ROOT, "articles", dir);
const assetsDir = path.join(ROOT, "assets", dir);
fs.mkdirSync(articlesDir, { recursive: true });

const isoDate = (ts) => new Date(ts * 1000).toISOString().slice(0, 10);

async function downloadImage(url, destPath) {
  if (fs.existsSync(destPath)) return;
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
}

// _collection.md con i metadati della collezione
fs.writeFileSync(
  path.join(articlesDir, "_collection.md"),
  `---\n${yaml.dump({
    collection_id: collection.collection_id,
    title: collection.title,
    slug: collection.slug,
    description: collection.description,
    locale: collection.locale,
  }, { lineWidth: -1 })}---\n`
);

const today = new Date().toISOString().slice(0, 10);
let imgCount = 0, done = 0, skipped = 0;

for (const a of list.data) {
  if (!includeAll && a.status !== "published") { skipped++; continue; }

  const htmlPath = path.join(cacheDir, `${a.article_id}.html`);
  if (!fs.existsSync(htmlPath)) {
    console.warn(`! manca il body ${a.article_id}.html — salto ${a.slug}`);
    continue;
  }
  const html = fs.readFileSync(htmlPath, "utf8");

  // Immagini: scarica e mappa url -> path relativo dall'articolo.
  const imageMap = {};
  for (const src of extractImageSrcs(html)) {
    if (!/^https?:\/\//i.test(src)) continue; // gia' locale
    const base = (src.split("/").pop() || "image").split("?")[0];
    const fileName = `${a.article_id}_${decodeURIComponent(base)}`;
    try {
      await downloadImage(src, path.join(assetsDir, fileName));
      imageMap[src] = `../../assets/${dir}/${fileName}`;
      imgCount++;
    } catch (e) {
      console.warn(`! immagine non scaricata (${e.message}) — mantengo URL remoto: ${src}`);
    }
  }

  const bodyMd = htmlToMarkdown(html, { imageMap });
  const fm = {
    article_id: a.article_id,
    collection_id: collection.collection_id,
    collection: collection.title,
    title: a.title,
    slug: a.slug,
    description: a.description,
    status: a.status,
    written_by: a.written_by,
    locale: collection.locale,
    updated_at: isoDate(a.updated_at),
    last_synced: today,
  };

  // slug puo' contenere "/" (alcuni vecchi): usa solo l'ultimo segmento per il file.
  const fileSlug = a.slug.split("/").pop();
  const out = `---\n${yaml.dump(fm, { lineWidth: -1 })}---\n\n${bodyMd}`;
  fs.writeFileSync(path.join(articlesDir, `${fileSlug}.md`), out);
  console.log(`✓ ${fileSlug}.md`);
  done++;
}

console.log(`\nFatto: ${done} articoli (${skipped} bozze saltate), ${imgCount} immagini -> articles/${dir}/`);
