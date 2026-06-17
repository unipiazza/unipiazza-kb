# Knowledge Base Unipiazza — Brief di progetto (KB)

> Progetto Unipiazza per gestire **in locale e in markdown** gli articoli della Knowledge Base
> di Customerly, con sincronizzazione locale → Customerly e creazione di nuovi articoli.
> Parte del contenitore `Unipiazza/` (vedi CLAUDE.md di progetto: [[CLAUDE]]).

**Owner:** Edoardo · **Stato:** setup iniziale · **Aggiornato:** 2026-06-10

---

## 1. Obiettivo

Avere una **fonte di verità locale in markdown** per tutti gli articoli della KB Customerly, così da:

1. **Scaricare** (import iniziale) tutti gli articoli IT della KB in file `.md` ordinati per collezione.
2. **Lavorare in locale** sugli articoli, comodamente, in markdown.
3. **Sincronizzare** le modifiche **locale → Customerly** quando un articolo cambia.
4. **Creare nuovi articoli** da qui, scrivendoli con la skill **unipiazza-copy** e pubblicandoli su Customerly.
5. **Gestire le immagini** (download accanto agli articoli; ri-upload automatico da verificare).

---

## 2. Decisioni prese (10 giu 2026)

| Tema | Scelta | Implicazione |
|------|--------|--------------|
| **Formato locale** | **Markdown è la fonte di verità** | Si edita il `.md`; la sync converte in HTML Customerly. La **prima importazione normalizza** l'HTML esistente (un diff iniziale "rumoroso", poi tutto pulito). |
| **Sync** | **Comando manuale via Claude** | Apri Claude da questa cartella e chiedi "sincronizza": rileva i file cambiati e fa `upsert`. Controllo totale, si vede il diff prima di pubblicare. |
| **Lingue** | **Solo italiano (`it`)** | Ci si concentra sulle 19 collezioni `it`. EN eventualmente in seguito. |
| **Immagini** | **Scarica ora, upload da verificare** | In download salvo le immagini in locale. Il ri-upload automatico su Customerly va verificato (vedi §6) prima di prometterlo. |

---

## 3. Cosa c'è su Customerly (rilevato via MCP)

- **19 collezioni** in locale `it` (Guida Introduttiva, Riepilogo, Clienti, Premi e Gettoni,
  Campagne e Autopromo, Modelli Campagne, Booster Vendite, Wallet e Gift Card, Vetrina,
  Pagamenti & Fatturazione, Integrazioni, Impostazioni, Unipiazza Lite, Tablet & Tessere,
  eShop, Poynt, App Partner, ecc.).
- Il **MCP Customerly espone già il CRUD completo** della KB:
  `list_kb_collections`, `list_kb_articles`, `get_kb_article`, `upsert_kb_article`,
  `delete_kb_article`, + equivalenti collezioni, `list_kb_writers`.
  → **Non serve toccare l'API REST a mano.**
- Il **body è HTML** da editor rich-text (TipTap): `<p>`, `<strong>`, `<a rel="...">`,
  `&nbsp;`, `<p></p>` come spaziatori, emoji inline.

**Campi di un articolo** (`get_kb_article`):
`article_id`, `title`, `body` (HTML), `slug`, `description`, `status` (draft/published),
`collection_id`, `written_by` (account autore), `keywords[]`, `sort`, `is_featured`,
`created_at`, `updated_at`, metriche (visite, reazioni).

**Per scrivere indietro** (`upsert_kb_article`) sono **obbligatori**:
`collection_id`, `title`, `body`, `slug`, `status`, `written_by`.
→ Questi campi vanno **sempre conservati nel frontmatter** del `.md`.

---

## 4. Struttura cartella

```
KB/
├── CLAUDE.md                 # istruzioni per Claude quando si apre da qui
├── BRIEF.md                  # questo file
├── articles/
│   └── <NN-collection-slug>/ # una cartella per collezione (NN = ordine)
│       ├── _collection.md    # metadati della collezione (id, titolo, descrizione, icona)
│       └── <article-slug>.md # un file per articolo (frontmatter + body markdown)
├── assets/
│   └── <collection-slug>/    # immagini scaricate, per collezione
└── scripts/                  # tooling di import/sync (HTML↔MD, upsert) — fase 2
```

### Frontmatter standard di ogni articolo `.md`

```yaml
---
article_id: 41648            # null se nuovo (assegnato da Customerly al primo upsert)
collection_id: 7178
collection: "❇️ Guida Introduttiva"
title: "Il mio Chiosco è bloccato, come lo resetto?"
slug: come-si-resetta-il-chiosco
description: "Il tuo Chiosco ti sta dando problemi?..."
status: published            # draft | published
written_by: 45263            # account autore (list_kb_writers)
keywords: []
sort: 4
is_featured: false
locale: it
updated_at: 2025-02-21       # ultimo update lato Customerly al momento del pull
last_synced: 2026-06-10      # ultima sync riuscita locale→Customerly
---

Il corpo dell'articolo in **markdown** qui sotto.
```

Il frontmatter è ciò che rende possibile la sync: lega il file all'`article_id` e conserva
tutti i campi obbligatori per l'`upsert`.

---

## 5. Flussi di lavoro

### A. Import iniziale (una tantum)
1. `list_kb_collections` (it) → crea le cartelle `articles/<collezione>/` + `_collection.md`.
2. Per ogni collezione: `list_kb_articles` → per ogni articolo `get_kb_article`.
3. Converti `body` HTML → markdown, salva `<slug>.md` con frontmatter completo.
4. Estrai gli `<img src>`, scarica le immagini in `assets/<collezione>/`, riscrivi i link nel md.

### B. Modifica + sync (ricorrente)
1. Editi un `.md` (a mano o con **unipiazza-copy**).
2. Apri Claude da qui → "sincronizza".
3. Claude rileva i file con `updated` > `last_synced`, converte MD → HTML Customerly,
   mostra il **diff/anteprima**, poi fa `upsert_kb_article` (usando `article_id` dal frontmatter).
4. Aggiorna `last_synced` nel frontmatter.

### C. Nuovo articolo
1. Si crea un `.md` nella cartella della collezione giusta, `article_id` vuoto.
2. Testo scritto con **unipiazza-copy** (tono/brand) + per assistenza eventualmente **unipiazza-assistenza**.
3. Sync → `upsert` senza `article_id` crea l'articolo; Customerly restituisce il nuovo id → scritto nel frontmatter.

### D. Pull / aggiornamento da Customerly
Prima di editare in blocco, conviene un **pull** per intercettare modifiche fatte sul web Customerly:
confronto `updated_at` remoto vs `last_synced` locale → se il remoto è più recente, avviso prima di sovrascrivere.

---

## 6. Rischi e punti aperti (onestà tecnica)

1. **Fedeltà round-trip HTML↔Markdown.**
   L'HTML di Customerly è quello di un editor TipTap (con `&nbsp;`, `<p></p>` vuoti, attributi `rel` sui link).
   Il markdown non li rappresenta 1:1 → serve un **converter deterministico** e una **validazione su un campione**
   prima del bulk. *Mitigazione:* fase pilota su 1 collezione, confronto visivo prima/dopo (§7).

2. **Upload automatico immagini — DA VERIFICARE.**
   Il MCP Customerly non espone (per quanto visto) un tool di upload immagini per la KB:
   c'è `upload_document` ma è per i documenti, non per il CDN degli articoli.
   *Azione:* verificare se l'upsert accetta immagini base64/URL esterni o se serve l'API/Make.com.
   Finché non è confermato: nuove immagini caricate a mano dall'editor, link CDN esistenti preservati.

3. **Conflitti di edit (locale vs web).**
   La sync è one-way (locale→Customerly). Se qualcuno edita sul web, va gestito col confronto `updated_at` (§5.D).

4. **Slug univoci per collezione.**
   Lo slug deve restare unico nella collezione: alla creazione di nuovi articoli va generato/validato.

---

## 7. Esito pilota — "❇️ Guida Introduttiva" (10 giu 2026)

**Tutti e 7 gli articoli superano il round-trip** (HTML→MD→HTML): testo normalizzato e
conteggio strutturale (immagini, iframe, tabelle, liste, heading) identici all'originale.
7 immagini scaricate correttamente in `assets/01-guida-introduttiva/`.

Tooling creato in `scripts/` (riutilizzabile per le altre collezioni):
- `lib/convert.mjs` — converter HTML↔MD (turndown + markdown-it).
- `import.mjs <collection_id>` — legge la cache, scarica immagini, scrive i `.md`.
- `roundtrip-check.mjs <collection_id>` — verifica la fedeltà.

**Scelte tecniche validate dal pilota:**
- Prosa in markdown pulito; **iframe (video YouTube) e tabelle-callout tenuti come HTML grezzo**
  dentro il `.md` (il markdown li lascia passare).
- **`<br>` reso come `<br>` letterale**, non come hard-break a due spazi: resta valido anche
  dentro `**grassetto**` e si ri-converte 1:1.
- **Niente `# Titolo` H1 nel body**: su Customerly il titolo è un campo separato; va solo nel frontmatter.
- Immagini salvate come `assets/<dir>/<article_id>_<nome>.png`, linkate con path relativo.

## 8. Prossimi passi

1. ✅ Brief + struttura + CLAUDE.md di progetto.
2. ✅ Pilota su "Guida Introduttiva" con round-trip validato.
3. ⏭️ **Conferma reale su Customerly**: push di 1 articolo (in `draft`) e verifica resa nell'editor.
4. ⏭️ Verifica tecnica **upload immagini** (§6.2) — punto ancora aperto.
5. ⏭️ Import completo delle restanti 18 collezioni `it`.
6. ⏭️ Definire il comando/skill di **sync** ricorrente (rilevamento file cambiati → `upsert` con anteprima).

---

## Skill da usare
- **unipiazza-copy** — scrittura/editing del testo degli articoli (tono e brand).
- **unipiazza-assistenza** — per articoli in stile risposta di assistenza (framework P.A.R.C.).
