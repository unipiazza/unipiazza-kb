// Verifica fedelta' del round-trip: HTML originale -> MD (file) -> HTML rigenerato.
// Confronta testo normalizzato e conteggio degli elementi strutturali.
//
// Uso:  node roundtrip-check.mjs <collection_id>

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { markdownToHtml } from "./lib/convert.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const collectionId = process.argv[2] || "7178";
const cacheDir = path.join(__dirname, "cache", collectionId);
const manifest = JSON.parse(fs.readFileSync(path.join(cacheDir, "manifest.json"), "utf8"));
const dir = manifest.collection.dir;

// Testo "puro": niente tag, niente entita', whitespace collassato. Per confronto semantico.
function plainText(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function counts(html) {
  const c = (re) => (html.match(re) || []).length;
  return {
    img: c(/<img\b/gi),
    iframe: c(/<iframe\b/gi),
    table: c(/<table\b/gi),
    link: c(/<a\b/gi),
    li: c(/<li\b/gi),
    h: c(/<h[1-6]\b/gi),
  };
}

// Per il confronto "link" l'originale usa <img src> locali diversi; ignoriamo le differenze
// dovute solo al rewrite delle immagini guardando i conteggi, non gli attributi.

let allOk = true;
console.log(`\n=== Round-trip check — collezione ${manifest.collection.title} ===\n`);

for (const a of manifest.articles) {
  const original = fs.readFileSync(path.join(cacheDir, a.body_file), "utf8");
  const md = fs.readFileSync(path.join(ROOT, "articles", dir, `${a.slug}.md`), "utf8");
  const regenerated = markdownToHtml(md);

  const tO = plainText(original);
  const tR = plainText(regenerated);
  const textOk = tO === tR;

  const cO = counts(original);
  const cR = counts(regenerated);
  // L'immagine nel rigenerato punta al path locale ma resta un <img>, quindi i conteggi combaciano.
  const structKeys = ["img", "iframe", "table", "li", "h"];
  const structOk = structKeys.every((k) => cO[k] === cR[k]);

  const ok = textOk && structOk;
  allOk = allOk && ok;

  console.log(`${ok ? "✓" : "✗"} ${a.slug}`);
  if (!textOk) {
    // Mostra il primo punto di divergenza testuale.
    let i = 0;
    while (i < tO.length && i < tR.length && tO[i] === tR[i]) i++;
    console.log(`    TESTO diverge a ~char ${i}:`);
    console.log(`      orig: …${tO.slice(Math.max(0, i - 30), i + 40)}…`);
    console.log(`      new : …${tR.slice(Math.max(0, i - 30), i + 40)}…`);
  }
  if (!structOk) {
    for (const k of structKeys) {
      if (cO[k] !== cR[k]) console.log(`    STRUTT ${k}: orig=${cO[k]} new=${cR[k]}`);
    }
  }
}

console.log(`\n${allOk ? "✅ Tutti gli articoli superano il round-trip." : "⚠️  Alcuni articoli divergono (vedi sopra)."}\n`);
process.exit(allOk ? 0 : 1);
