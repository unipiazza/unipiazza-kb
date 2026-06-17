// Convertitori HTML <-> Markdown per la KB Unipiazza (Customerly / TipTap).
//
// Principio: la prosa diventa markdown pulito; i costrutti che il markdown non
// rappresenta nativamente (iframe YouTube, tabelle-callout) vengono MANTENUTI
// come HTML grezzo dentro il .md. Cosi' il round-trip verso Customerly resta fedele.

import TurndownService from "turndown";
import MarkdownIt from "markdown-it";

// --- HTML -> Markdown -------------------------------------------------------

export function makeTurndown({ imageMap = {} } = {}) {
  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
  });

  // <br> -> <br> letterale (non hard-break a due spazi): resta valido anche
  // dentro **grassetto**/_corsivo_ e si ri-converte 1:1 verso Customerly.
  td.addRule("hard-break", {
    filter: "br",
    replacement: () => "<br>",
  });

  // Mantieni intatti i blocchi complessi: video (wrapper iframe) e tabelle-callout.
  td.addRule("keep-iframe-wrapper", {
    filter: (node) =>
      node.nodeName === "DIV" && node.classList?.contains("iframe-wrapper"),
    replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
  });
  td.addRule("keep-bare-iframe", {
    filter: "iframe",
    replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
  });
  td.addRule("keep-table", {
    filter: "table",
    replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
  });

  // Immagini: riscrivi la src verso il path locale (se presente nella mappa).
  td.addRule("local-image", {
    filter: "img",
    replacement: (_content, node) => {
      const src = node.getAttribute("src") || "";
      const alt = node.getAttribute("alt") || "";
      const local = imageMap[src] || src;
      return `![${alt}](${local})`;
    },
  });

  return td;
}

export function htmlToMarkdown(html, { imageMap = {} } = {}) {
  const td = makeTurndown({ imageMap });
  let md = td.turndown(html);
  // Normalizza: max una riga vuota tra blocchi, niente spazi a fine riga (tranne hard-break).
  md = md.replace(/\n{3,}/g, "\n\n").trim() + "\n";
  return md;
}

// --- Markdown -> HTML (per round-trip / sync verso Customerly) ---------------

const mdIt = new MarkdownIt({
  html: true, // lascia passare l'HTML grezzo mantenuto (iframe, table)
  breaks: true, // newline singolo -> <br>, coerente con il br hard-break
  linkify: false,
});

export function markdownToHtml(md) {
  // Rimuovi il frontmatter se presente.
  const body = md.replace(/^---\n[\s\S]*?\n---\n?/, "");
  return mdIt.render(body).trim();
}

// --- Utility per estrarre gli <img src> da un body HTML ---------------------

export function extractImageSrcs(html) {
  const srcs = [];
  const re = /<img\b[^>]*\bsrc\s*=\s*"([^"]+)"/gi;
  let m;
  while ((m = re.exec(html)) !== null) srcs.push(m[1]);
  return srcs;
}
