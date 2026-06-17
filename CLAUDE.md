# Knowledge Base (KB) — istruzioni di progetto

Progetto Unipiazza per gestire **in locale e in markdown** gli articoli della Knowledge Base
di Customerly, con sync locale → Customerly. Specifica completa: vedi BRIEF.md [[BRIEF]].
Contesto contenitore: `Unipiazza/CLAUDE.md`.

## Come funziona qui
- I file `.md` in `articles/<collezione>/` sono la **fonte di verità**. Si edita il markdown;
  la sync converte in HTML e fa `upsert` su Customerly.
- Il **frontmatter** di ogni articolo lega il file all'`article_id` Customerly e conserva i campi
  obbligatori per l'upsert (`collection_id`, `title`, `slug`, `status`, `written_by`). Non rimuoverlo.
- Sync = **comando manuale**: l'utente chiede "sincronizza", tu rilevi i file cambiati,
  mostri il diff/anteprima e poi fai `upsert_kb_article`. Aggiorna `last_synced`.
- Lingua: **solo `it`** per ora.

## Customerly (via MCP `customerly`)
CRUD KB già disponibile: `list_kb_collections`, `list_kb_articles`, `get_kb_article`,
`upsert_kb_article`, `delete_kb_article`, `list_kb_writers` (+ collezioni). Non usare l'API REST a mano.
Il body degli articoli è **HTML** (editor TipTap): attenzione alla fedeltà nella conversione MD↔HTML.

## Skill da usare
- **unipiazza-copy** — qualsiasi testo degli articoli (tono e brand Unipiazza).
- **unipiazza-assistenza** — articoli in stile assistenza (framework P.A.R.C.).

## Regole
- Non pubblicare/`upsert` senza mostrare prima all'utente cosa cambia.
- Prima di un'edit massiva, fai un **pull** e confronta `updated_at` remoto vs `last_synced` locale
  per non sovrascrivere modifiche fatte sul web.
- Segreti/credenziali: non condividere né incollare in chat.
