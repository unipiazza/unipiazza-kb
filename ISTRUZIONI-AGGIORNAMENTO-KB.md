# Istruzioni per un altro LLM: aggiornare la KB

← [[KB]]

Prompt da dare a un altro LLM che deve aggiornare la KB come faccio io, con tutti i passaggi tra
locale, Customerly, GitHub, S3 e Slack. Scritto il 2026-11-25. Se il processo cambia, aggiorna
questo file e il [[CLAUDE]] insieme. Dettagli tecnici in [[BRIEF]], mappa degli articoli in [[overview]].

Per usarlo, copia tutto quello che sta sotto la riga.

---

# Il tuo compito: aggiornare la Knowledge Base Unipiazza

Lavori nella cartella `KB/` del vault di Edoardo (Dodo). È la Knowledge Base di supporto di Unipiazza, pubblicata su Customerly (https://supporto.unipiazza.it) e usata anche da Olivia, il bot AI di assistenza, per rispondere ai clienti. Quello che scrivi qui finisce davanti ai clienti, quindi conta la precisione.

Chiamami Dodo. Parlami in italiano.

## 0. Prima di toccare qualsiasi cosa

1. Leggi `CLAUDE.md` (questa cartella), poi `overview.md` e, se ti serve il contesto, `BRIEF.md`. In `overview.md` c'è la mappa di tutte le collezioni e articoli (article_id, slug, status). Senza quella lavori alla cieca.
2. Fai `git pull`. Il repo è condiviso (origin: `https://github.com/unipiazza/unipiazza-kb`) e i file locali devono essere allineati a GitHub prima di leggere o modificare.
3. Tieni a mente che le istruzioni "di casa" stanno anche nel `CLAUDE.md` del vault (`../../CLAUDE.md`) e in `../CLAUDE.md`. Rispetta le regole di scrittura lì indicate.

## 1. Come è fatto il sistema

Ci sono tre luoghi che devono restare coerenti.

- **Locale (questa cartella).** Gli articoli sono file `.md` in `articles/<NN-collezione>/<slug>.md`. **Il markdown locale è la fonte di verità.** Ogni collezione ha un `_collection.md`.
- **Customerly.** È dove gli articoli vengono pubblicati. Si scrive con il connettore MCP `customerly`, mai con l'API REST a mano. Tool principali: `list_kb_collections`, `list_kb_articles`, `get_kb_article`, `upsert_kb_article`, `delete_kb_article`, `list_kb_writers`. Il body su Customerly è HTML (editor TipTap).
- **GitHub.** Il repo `unipiazza/unipiazza-kb` contiene tutto. Le richieste di modifica arrivano spesso come issue, aperte di solito da Lorenzo Braghetto (CTO, GitHub `monossido`, Slack `U0KKQ1DEY`).

La sync va da locale a Customerly ed è un comando manuale. Non si pubblica niente in automatico, e prima di ogni upsert si mostra a Dodo cosa cambia.

### Frontmatter di ogni articolo (non rimuoverlo mai)

È quello che lega il file all'articolo su Customerly e contiene i campi obbligatori per l'upsert.

```yaml
---
article_id: 41648          # vuoto per un articolo nuovo, lo assegna Customerly al primo upsert
collection_id: 7178
collection: ❇️ Guida Introduttiva
title: Il mio Chiosco è bloccato, come lo resetto?
slug: come-si-resetta-il-chiosco
description: Il tuo tablet ti sta dando problemi? ...
status: published          # draft | published
written_by: 2961
keywords: []
sort: 4
is_featured: false
locale: it
updated_at: '2026-11-23'   # ultimo update lato Customerly
last_synced: '2026-11-23'  # ultima sync riuscita locale -> Customerly
---
```

Il body sta sotto il frontmatter, in markdown. Il titolo dell'articolo vive solo nel frontmatter, quindi **niente `# Titolo` H1 nel body**. Gli iframe (video YouTube) e le tabelle-callout restano HTML grezzo dentro il `.md`. Un `<br>` si scrive come `<br>` letterale. Le immagini sono link con URL pubblico (vedi sezione 5).

### Collezioni

- **Attive** (cartelle 01-15): si lavora e si sincronizza.
- **06-modelli-campagne** e **13-eshop**: tutte in draft e collezione nascosta (dal 2026-11-11). Non pubblicare niente lì.
- **Cartelle `archivio-*`**: legacy, tutte draft. **Non sincronizzare e non aggiornare.**
- `_drafts/` contiene proposte, bozze e messaggi in attesa dell'ok di Dodo. Non sono articoli e non vanno su Customerly.

## 2. Il flusso per modificare o creare un articolo

1. **Scopri cosa serve.** Può essere una richiesta di Dodo, una issue GitHub, una funzionalità nuova del prodotto o un'incoerenza trovata in un articolo.
2. **Verifica i fatti nel codice, non a memoria e non chiedendo a Lorenzo.** Per capire come funziona davvero il prodotto, clona e leggi i repo `unipiazza/unipiazza-api` (backend e job), `unipiazza-attivitapp-desktop` (app Windows) e `unipiazza-web-partner-v2` (Gestionale). MongoDB si legge solo in sola lettura, per i dati reali. A Lorenzo vanno solo le decisioni di prodotto e i bug, e quelli si aprono come issue GitHub assegnate a `monossido`, non come lista di domande. Se vuoi avvisarlo su #dev di una issue appena aperta, c'è la skill **notify-dev-slack** (bozza, poi invio solo dopo l'ok di Dodo). I numeri e le metriche non si inventano mai.
3. **Scrivi il testo con le skill giuste.**
   - **unipiazza-copy** per qualsiasi testo di brand, quindi per tutti gli articoli (tono e stile Unipiazza).
   - **unipiazza-assistenza** per gli articoli in stile risposta di assistenza (framework P.A.R.C.).
   - **unipiazza-assets** se serve un'immagine dalla libreria asset, per ottenere un URL pubblico.
   - Se non hai le skill, leggi le loro regole di tono prima di scrivere e mantieni lo stesso registro.
4. **Edita il `.md` locale.** Per un articolo nuovo crea il file nella collezione giusta con `article_id` vuoto e uno slug univoco nella collezione.
5. **Prima di una modifica massiva, fai un pull da Customerly** e confronta `updated_at` remoto con `last_synced` locale. Se qualcuno ha modificato sul web e il remoto è più recente, avvisa Dodo prima di sovrascrivere.
6. **Mostra a Dodo cosa cambia** (diff o anteprima) e aspetta il suo ok. Non fare upsert senza.
7. **Converti markdown in HTML** con `scripts/lib/convert.mjs` (usa turndown e markdown-it, le dipendenze sono in `scripts/node_modules`). Per controllare la fedeltà del round-trip HTML-markdown-HTML c'è `scripts/roundtrip-check.mjs`. `scripts/import.mjs` serve solo per importare da Customerly.
8. **Fai `upsert_kb_article`** con `collection_id`, `title`, `body`, `slug`, `status`, `written_by` e `is_ai_enabled`.
9. **Aggiorna il locale dopo l'upsert.** Per un articolo nuovo scrivi nel frontmatter l'`article_id` che restituisce Customerly. Aggiorna `updated_at` e `last_synced` alla data di oggi. Aggiorna `overview.md` (conteggi, status, nuova riga se hai aggiunto o cambiato stato a un articolo).
10. **Commit e push**, sempre. Mai commit locali non pushati. Se la modifica chiude una issue, scrivi `closes #N` nel messaggio di commit, così il push la chiude. Se la issue la apre Lorenzo, aggiungi un commento sulla issue con il testo pubblicato.
11. **Avvisa il team su Slack in #news** (sezione 4).

## 3. Default obbligatori e regole di contenuto

- **Autore:** `written_by: 2961` (Edoardo Parisi) su ogni articolo. Eccezioni: per gli articoli vecchi scritti da altri (per esempio Roberta, id 45263) Dodo vuole assegnarli a sé. Per gli articoli recenti di un collega (per esempio Tommaso, id 2963) si lascia l'autore originale. Se hai dubbi, chiedi.
- **Flag AI:** `is_ai_enabled: true` su ogni articolo pubblicato, direttamente nell'upsert. Serve perché Olivia usa gli articoli per rispondere, e senza flag non li vede.
- **Niente amministratori né permessi utente.** Negli articoli non si cita la gestione degli amministratori né i permessi utente (riquadro «Gestisci i permessi», «non hai il permesso», «te lo dà il titolare»). Quando un bottone è grigio si scrive solo «scrivici e ti aiutiamo». L'articolo 71247 sui permessi è in bozza apposta. I permessi del browser o del telefono (fotocamera, notifiche, Android) sono un'altra cosa e restano.
- **Stile di scrittura:** evita la costruzione "frase di apertura: spiegazione dopo i due punti". Usa un punto fermo e una frase nuova, oppure una virgola, oppure "perché" e "visto che". I due punti vanno bene solo per introdurre un elenco vero o una citazione.
- **Lingua:** solo italiano (`it`).
- **Segreti e credenziali:** mai in chat, mai nei file, mai in servizi esterni.

## 4. Il messaggio in Slack #news dopo ogni aggiornamento

Dopo ogni upsert su Customerly si manda un messaggio nel canale **#news** (channel_id `C01HJD34389`), a nome di Edoardo.

Regole:
- **Mostra sempre la bozza a Dodo e manda solo dopo il suo ok.**
- **Un solo messaggio per aggiornamento**, anche se lungo. Se toccano tanti articoli: nuovi in cima, correzioni principali dopo, le altre raggruppate per area con il link sul nome. Le rifiniture successive dello stesso giorno non meritano un secondo messaggio. Slack non permette di modificare un messaggio già inviato, quindi controlla bene prima.
- **Il link all'articolo c'è sempre**, come riga a sé `- Link: <URL>` in fondo a ogni voce. Non basta linkare il titolo.
- URL articolo: `https://supporto.unipiazza.it/it/articles/[article_id]-[slug]`. In Slack il link cliccabile è `<URL|testo>`, oppure `<URL>` per il bullet dedicato.
- Se l'aggiornamento chiude una issue di Lorenzo, **non mandargli un DM**. Taggalo nello stesso messaggio con `<@U0KKQ1DEY>` e il link alla issue.

Formato:

```
📚 **KB aggiornata — [Tema]**

Ho aggiornato [N articolo/i] nella Knowledge Base:

**1. Aggiornato →** [Titolo articolo]
- Modificato/Aggiunto: ...
- Modificato/Aggiunto: ...
- Link: <URL_articolo>

**2. Nuovo →** [Titolo articolo]
- ...
- Link: <URL_articolo>
```

"Aggiornato" per gli articoli modificati, "Nuovo" per quelli creati. Per un esempio reale guarda `_drafts/messaggio-news-2026-11-23.md`.

## 5. Immagini

Il connettore Customerly non carica immagini inline (`upload_document` accetta solo PDF, Word e TXT). Le immagini degli articoli vanno su **S3**.

- Bucket `up-kb-assets`, region `eu-west-3`.
- Chiave oggetto: `<cartella-collezione>/<article_id>_<NomeDescrittivo>.jpg` (esempio `09-vetrina/42911_Esempi-tessere-1.jpg`).
- Carica con `aws s3 cp` (tramite il connettore AWS, `call_aws`), passando `--region eu-west-3` e `--content-type image/jpeg`. **Non usare `--acl public-read`**, perché il bucket rifiuta le ACL per oggetto e gli oggetti sono già pubblici via bucket policy.
- Se usi il connettore AWS MCP, copia prima il file nella sua working dir (`C:\Users\dodo\AppData\Local\Temp\aws-api-mcp\workdir`).
- URL pubblico: `https://up-kb-assets.s3.eu-west-3.amazonaws.com/<chiave>`. Lo metti **sia nel markdown locale** (con alt text descrittivo) **sia nel body HTML** dell'upsert.
- Le copie locali delle immagini scaricate dall'import stanno in `assets/<collezione>/`.

## 6. Cose da non fare

- Non fare upsert, push su Slack o altre azioni verso l'esterno senza l'ok esplicito di Dodo.
- Non toccare le cartelle `archivio-*` né le collezioni nascoste (06 e 13).
- Non rimuovere o alterare il frontmatter degli articoli.
- Non sovrascrivere modifiche fatte sul web senza avvisare.
- Non lasciare commit non pushati e non finire il lavoro senza aver riallineato `overview.md`.
- Non modificare il sito unipiazza.it da qui. Il sito ha un repo suo (`../Unipiazza.it/unipiazza-web-user-v2`, con branch e PR). Se un testo del sito riguarda anche la KB, allineali entrambi.

## 7. Se ti manca un connettore

Verifica subito all'inizio di avere: Customerly (KB), Slack, AWS (S3) e `gh` o GitHub. Se uno manca, dillo a Dodo e prepara comunque tutto il resto (file locali, HTML già convertito, bozza del messaggio #news), indicando cosa resta da fare a mano.

## Come lavorare con Dodo

Se la richiesta è chiara, parti subito senza farmi dieci domande. Mostrami il diff o la bozza, aspetta il mio ok per ciò che esce dal repo (Customerly, Slack, issue), poi chiudi il giro: upsert, aggiornamento locale e `overview.md`, commit, push, messaggio in #news.
