// Rende l'HTML (pipeline MD->HTML) di un singolo articolo, per push/anteprima.
// Uso:  node render.mjs <collection_dir> <slug> [outfile]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { markdownToHtml } from "./lib/convert.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const [dir, slug, outfile] = process.argv.slice(2);

const md = fs.readFileSync(path.join(ROOT, "articles", dir, `${slug}.md`), "utf8");
const html = markdownToHtml(md);
if (outfile) fs.writeFileSync(path.join(__dirname, outfile), html);
else process.stdout.write(html);
