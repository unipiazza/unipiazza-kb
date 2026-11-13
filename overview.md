# Overview — Knowledge Base Unipiazza

Mappa della KB locale. **Fonte di verità: i file `.md` in `articles/`.**
Aggiorna questo file ogni volta che aggiungi, rimuovi o cambi lo status di un articolo.

- **Collezioni attive:** 15
- **Collezioni archivio:** 5
- **Articoli totali:** 149 in locale, 148 su Customerly (103 published, 45 draft). Il 4364 è solo in locale: su Customerly non esiste più
- **Lingua:** `it` (solo italiano)
- **Sync target:** Customerly via MCP `customerly`

Per regole operative (sync, autore default, flag AI, pull prima dell'edit) → vedi [[CLAUDE]] (`CLAUDE.md`).
Per specifiche tecniche e workflow → vedi [[BRIEF]] (`BRIEF.md`).
Per audit e issues → vedi `AUDIT-KB.md`.

---

## Mappa collezioni

| Cartella | collection_id | Titolo | Art. | Stato |
|---|---|---|---|---|
| 01-guida-introduttiva | 7178 | Guida Introduttiva | 9 | ✅ |
| 02-riepilogo | 7179 | Riepilogo | 5 | ⚠️ manca 2 metriche nel dashboard |
| 03-clienti | 7180 | Clienti | 25 | ✅ |
| 04-premi-e-gettoni | 7181 | Premi e Gettoni | 9 | ✅ |
| 05-campagne-autopromo-whatsapp | 7182 | Campagne, Automazioni e WhatsApp | 27 | ✅ |
| 06-modelli-campagne | 3911 | Modelli Campagne | 8 | 🙈 tutti draft dal 2026-11-11, collezione nascosta |
| 07-booster-e-abbonamenti | 7236 | Booster Vendite e Abbonamenti | 4 | ✅ |
| 08-wallet-e-gift-card | 7199 | Wallet e Gift Card | 4 | ❌ specifiche errate (slot, limiti) |
| 09-vetrina | 7200 | Vetrina | 7 | ✅ |
| 10-pagamenti-e-fatturazione | 676 | Pagamenti & Fatturazione | 5 | ⚠️ 1 articolo in draft |
| 11-integrazioni | 8104 | Integrazioni | 4 | ⚠️ articolo Android con errori copia-incolla |
| 12-impostazioni | 7257 | Impostazioni | 3 | ✅ |
| 13-eshop | 3416 | eShop | 9 | 🙈 tutti draft dal 2026-11-11, modulo non in vendita |
| 14-tablet-e-tessere | 171 | Tablet Unipiazza & Tessere | 7 | ⚠️ 5 draft legacy, 2 published |
| 15-olivia-ai | 12061 | Olivia - Consulente Fedeltà AI | 2 | ✅ |

**Archivi** (tutti draft, contenuto legacy — non sincronizzare):

| Cartella | collection_id | Titolo | Art. |
|---|---|---|---|
| archivio-app-partner | 677 | App Unipiazza - Partner & Web App | 4 |
| archivio-clienti | 540 | Clienti (legacy) | 6 |
| archivio-poynt | 678 | Dispositivo Poynt | 3 |
| archivio-primi-passi | 1830 | Primi passi con Unipiazza | 6 |
| archivio-unipiazza-lite | 4495 | Unipiazza Lite | 3 |

---

## Dettaglio collezioni attive

### 01 — Guida Introduttiva · `collection_id: 7178`

Articoli di benvenuto e troubleshooting hardware/app. Pilotati e validati (round-trip HTML↔MD ok).

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27438 | È arrivato il Kit Unipiazza, cosa devo fare? | e-arrivato-il-kit-unipiazza-cosa-devo-fare | published |
| 28335 | Tutto quello che devi sapere per iniziare | tutto-quello-che-devi-sapere-per-iniziare | published |
| 4366 | Ho finito le tessere, come posso richiederne delle altre? | ho-finito-le-tessere-come-posso-richiederne-delle-altre | published |
| 41599 | Il mio registratore di cassa è compatibile con Unipiazza? | la-mia-cassa-e-compatibile-con-unipiazza | published |
| 41648 | Il mio Chiosco è bloccato, come lo resetto? | come-si-resetta-il-chiosco | published |
| 40682 | L'app Unipiazza è sparita, cosa faccio? | l-app-unipiazza-e-sparita-cosa-faccio | published |
| 48419 | Tablet compatibili con l'App Chiosco | tablet-compatibili-con-app-chiosco | published |
| 48446 | Dispositivi compatibili con l'App Operatore | dispositivi-compatibili-con-l-app-operatore | published |
| 61989 | Smartphone o tablet gonfio? Ecco cosa fare | smartphone-o-tablet-gonfio-ecco-cosa-fare | published |

---

### 02 — Riepilogo · `collection_id: 7179`

Accesso al gestionale e panoramica della sezione Riepilogo. ⚠️ Articolo 27442 mancante di 2 metriche: "Premi & Promo ritirate" e "Ricavi Autopromo".

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27442 | Cosa vedo nella sezione Riepilogo? | cosa-vedo-nella-sezione-riepilogo | published |
| 36905 | Come accedere al Gestionale e reimpostare la password | come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password | published |
| 37647 | Il gestionale sulla Home del telefono | come-accedere-velocemente-al-gestionale-partner-da-smartphone | published |
| 61924 | Come disabilitare lo spegnimento automatico del Chiosco | come-disabilitare-lo-spegnimento-automatico-del-chiosco | published |
| 63781 | L'app Partner non funziona più? Ecco cosa fare! | l-app-partner-non-funziona-piu-ecco-cosa-fare | published |

---

### 03 — Clienti · `collection_id: 7180`

Gestione clienti: iscrizione, profili, segmentazione, privacy, filtri, liste, importazione, visite da verificare. Il 2026-11-09 è stato creato 70111 (Visite da verificare) e sono stati aggiornati 41052, 27445, 61967 (Contattabile e Consenso marketing), 41054, 28262, 41598, 28260, 27446, 33516 e 65570. Il 2026-11-11 sono stati rifatti gli screenshot di 41054, 41052, 40695, 27444 e 27445, perché quelli del 2025 mostravano nomi e contatti veri dei clienti. I nuovi sono fatti con il Privacy Mode del gestionale (Ctrl+Shift+B) e stanno su `up-kb-assets`. Il 2026-11-14 è stato creato e pubblicato 70972 «Come eliminare un cliente dal tuo programma fedeltà» [[come-eliminare-un-cliente-dal-programma-fedelta]], su segnalazione di Lorenzo. Spiega Azioni → Elimina cliente, cosa si cancella (compresi Wallet, Gift Card e abbonamenti del locale) e le alternative, come gli Archiviati per chi non viene più. È verificato sul codice del gestionale e dell'API, ed è senza screenshot. Nello stesso giorno è stato aggiunto il link al 70972 in 28262, 33516 e 41598.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27444 | Cosa sono le etichette clienti "Nuovi", "Vip", "Ti seguono" e "Inattivi"? | cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi | published |
| 27445 | Cosa vedo nella sezione Storico Azioni? | cosa-vedo-nella-sezione-storico-azioni | published |
| 27446 | Quali consensi Privacy danno i clienti all'iscrizione? | quali-consensi-privacy-danno-i-clienti-all-iscrizione | published |
| 28260 | Come si possono iscrivere i miei clienti? | come-si-possono-iscrivere-i-miei-clienti | published |
| 28262 | Cosa posso fare dal profilo cliente? | cosa-posso-fare-dal-profilo-cliente | published |
| 28263 | Cosa vedo nella sezione Analisi Clienti? | cosa-vedo-nella-sezione-analisi-clienti | published |
| 30003 | Quali sono le 3 frasi perfette per invitare un cliente a iscriversi? | quali-sono-le-3-frasi-perfette-per-invitare-un-cliente-a-iscriversi | published |
| 30012 | Incoraggia l'Iscrizione tramite Social con Unipiazza | incoraggia-l-iscrizione-tramite-social-con-unipiazza | published |
| 30276 | Incentiva i Download dell'App tramite QR Code | incentiva-i-download-dell-app-tramite-qr-code | draft |
| 30305 | Invita i tuoi clienti ad iscriversi via Whatsapp o Email | invita-i-tuoi-clienti-ad-iscriversi-via-whatsapp-o-email | published |
| 30306 | Come posso aggiungere o importare clienti? | aggiungere-importare-contatti-clienti | published |
| 33516 | I clienti possono modificare i propri dati personali? | i-clienti-possono-modificare-i-propri-dati-personali | published |
| 35025 | Posso aggiungere delle note ai clienti? | posso-aggiungere-delle-note-ai-clienti | published |
| 41052 | Come correggere un importo, dei gettoni o una visita caricati per errore | come-correggere-un-importo-errato-nel-gestionale-unipiazza | published |
| 41054 | Come scalare un premio manualmente nel gestionale Unipiazza | come-scalare-un-premio-manualmente-nel-gestionale-unipiazza | published |
| 41598 | Un mio cliente ha due profili, come posso fare per unirli? | un-mio-cliente-ha-due-profili-come-posso-fare-per-accorparli | published |
| 70972 | Come eliminare un cliente dal tuo programma fedeltà | come-eliminare-un-cliente-dal-programma-fedelta | published |
| 44201 | Invita i clienti ad inserire il numero di Telefono | invita-i-clienti-ad-inserire-il-numero-di-telefono | published |
| 61967 | Filtra Clienti: come segmentare e analizzare i tuoi clienti | filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti | published |
| 61968 | Come creare e gestire le Liste Clienti | come-creare-e-gestire-le-liste-clienti | published |
| 61969 | 15 idee per segmentare i tuoi clienti con i Filtri | 15-idee-per-segmentare-i-clienti-con-i-filtri | published |
| 40695 | Come posso esportare i dati dei miei clienti? | come-posso-esportare-i-dati-dei-miei-clienti | published |
| 63765 | Il cliente ha una nuova Tessera Fedeltà: come collegare il profilo esistente? | il-cliente-ha-una-nuova-tessera-fedelta-come-collegare-il-profilo-esistente | published |
| 65570 | Come attivare il Compleanno all'iscrizione | come-attivare-compleanno-all-iscrizione | published |
| 70111 | Visite da verificare: come scoprire gli errori alla cassa | visite-da-verificare | published |

---

### 04 — Premi e Gettoni · `collection_id: 7181`

Meccaniche di fedeltà: gettoni, lista premi, creazione premi, limiti ritiro, gestione fiscale. Tutti pubblicati. Il 2026-11-11 sono stati aggiunti o rifatti gli screenshot di 27448, 28264, 41456, 27449 e 41597 (Rainbow Birreria con Privacy Mode). Nel 28264 ora si spiega che prima va premuto «Modifica premi».

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27447 | Cosa sono i Gettoni Unipiazza? | cosa-sono-i-gettoni-unipiazza | published |
| 27448 | Cos'è la Lista Premi? | cos-e-la-lista-premi | published |
| 27449 | Dove vedo i premi ritirati dai clienti? | dove-vedo-i-premi-ritirati-dai-clienti | published |
| 28264 | Come creo un premio? | come-creo-un-premio | published |
| 30684 | Come creare una Lista Premi perfetta | come-creare-una-lista-premi-perfetta | published |
| 41456 | Come impostare limiti per il ritiro dei premi | come-impostare-limiti-per-il-ritiro-dei-premi | published |
| 41597 | Come resetto i gettoni dei miei clienti? | come-resettare-i-gettoni-dei-miei-clienti | published |
| 61921 | Come gestisco fiscalmente i premi di Unipiazza? | come-faccio-fiscalmente-a-dare-un-premio-con-unipiazza | published |

---

### 05 — Campagne, Automazioni e WhatsApp · `collection_id: 7182`

Invio campagne email/SMS/WhatsApp, Automazioni, RCS, calendario eventi, statistiche. Tutti pubblicati. Il 2026-11-06 la sezione Autopromo è diventata Automazioni (issue kb#3): riscritti 27453, 61973 e 63782, creati 70104 e 70105, pubblicati i due articoli del 16/10 (70106, 70107) e tutte le correzioni rimaste in locale. Slug e cartella restano con "autopromo" per non rompere i link. Il 2026-10-15 aggiunto 67839 (variabili) e ritoccati 27450, 27452, 37262. Il 2026-10-16, in locale e non ancora sincronizzati, corretti 27453, 27452, 61640, 61919, 61971, 61972, 61973 e scritti due articoli nuovi senza article_id (regalo di compleanno alla cassa, WhatsApp bloccato), per i buchi trovati nelle conversazioni di Olivia. Il 2026-11-11 aggiunto 70276 (idee di campagna per le feste, al posto dei vecchi Modelli Campagne) e spostato qui da Modelli Campagne il 25651 (GiftCard), riscritto ([[proposta-modelli-eshop]]). Lo strumento tessera.unipiazza.it per ora resta fuori dalla KB (Edoardo, 16/10) ([[analisi-conversazioni-olivia-2026-10-15]]). 27450: il web era stato modificato il 2026-07-03 (step 4 diverso); il 15/10 è stato allineato al file locale, mantenendo la frase finale "Inviata in verde". Il 2026-11-13 è stato creato e pubblicato 70971 "Dove si trova la tua campagna e come riportarla in bozza" (pagina di stato della campagna e bottone «Riporta in bozza», PR #140 di unipiazza-web-partner-v2 dell'11/11, verificata sul codice del gestionale e dell'API). Gli screenshot vengono dalla campagna di Baby Time, ritagliati sulla timeline e sulla finestra di conferma, dove non ci sono dati del cliente. Lo stesso giorno sono stati sincronizzati i ritocchi a 27450 (tolta la frase "Inviata in verde"), 61971 (si può riportare in bozza una campagna programmata) e 70106 (nuove etichette degli stati WhatsApp), tutti con il link al 70971.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27450 | Cosa sono le Campagne Marketing e come si creano? | cosa-sono-le-campagne-marketing-e-come-si-creano | published |
| 70971 | Dove si trova la tua campagna e come riportarla in bozza | dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza | published |
| 27452 | Suggerimenti per scrivere una Campagna Marketing perfetta | suggerimenti-per-scrivere-una-campagna-marketing-perfetta | published |
| 27453 | Cosa sono e come funzionano le Automazioni? | cosa-sono-le-autopromo | published |
| 30013 | Dove si possono scaricare immagini gratuite per le Campagne? | dove-si-possono-scaricare-immagini-gratuite-per-le-campagne | published |
| 30681 | Posso inviare una campagna solo ad alcuni clienti? | posso-inviare-una-campagna-solo-ad-alcuni-clienti | published |
| 31070 | Posso escludere dei gruppi di Utenti dall'invio una campagna? | posso-escludere-dei-gruppi-di-utenti-dall-invio-una-campagna | published |
| 37235 | Personalizza il Mittente delle Tue Campagne Email | personalizza-il-mittente-delle-campagne-email | published |
| 37253 | Come inserire Whatsapp nelle Campagne | come-inserire-whatsapp-nelle-campagne | published |
| 37262 | Come posso evitare che le mie Email finiscano in Spam? | come-posso-evitare-che-le-mie-email-finiscano-in-spam | published |
| 43309 | Cosa sono gli RCS e come funzionano con Unipiazza? | cosa-sono-gli-rcs | published |
| 61640 | Come verificare il tuo account WhatsApp Business | come-verificare-il-tuo-account-whatsapp-business | published |
| 61919 | Come collegare WhatsApp Business a Unipiazza | come-collegare-whatsapp-business-a-unipiazza | published |
| 61970 | Il dettaglio della campagna inviata: statistiche e analisi | dettaglio-campagna-inviata-statistiche-e-analisi | published |
| 61971 | Inviare una campagna senza approvazione | inviare-una-campagna-senza-approvazione | published |
| 61972 | Campagne WhatsApp: come funzionano, quanto costano e come iniziare | campagne-whatsapp-come-funzionano-costi-e-come-iniziare | published |
| 61973 | Come attivare WhatsApp sulle tue Automazioni | come-attivare-whatsapp-sulle-autopromo | published |
| 61974 | Il Calendario Eventi: trova l'occasione giusta per la tua prossima campagna | calendario-marketing-unipiazza | published |
| 63782 | Le comunicazioni automatiche: come appaiono ai tuoi clienti | anteprime-comunicazioni-automatiche | published |
| 65381 | Perché la campagna è arrivata a meno clienti di quelli selezionati? | perche-la-campagna-e-arrivata-a-meno-clienti-di-quelli-selezionati | published |
| 67839 | Personalizza le tue Campagne con le Variabili | personalizza-le-campagne-con-le-variabili | published |
| 70107 | Il cliente viene a ritirare il regalo di compleanno: cosa deve fare il personale? | il-cliente-ritira-il-regalo-di-compleanno-cosa-fa-il-personale | published |
| 70106 | WhatsApp non funziona o risulta bloccato: cosa controllare? | whatsapp-non-funziona-o-risulta-bloccato | published |
| 70104 | Come leggere i risultati delle Automazioni | come-leggere-i-risultati-delle-automazioni | published |
| 70105 | Il Messaggio di benvenuto personalizzato | messaggio-di-benvenuto-personalizzato | published |
| 70276 | Idee di campagna per le feste dell'anno | idee-di-campagna-per-le-feste | published |
| 25651 | Promuovi le tue GiftCard! | promuovi-le-tue-giftcard | published |

---

### 06 — Modelli Campagne · `collection_id: 3911`

Template stagionali per festività e occasioni, scritti nel 2021-22. Il 2026-11-11, con l'ok di Edoardo, tutti gli 8 articoli sono passati in **draft**. La collezione non si vede più nel centro assistenza (404) ma non è stata cancellata, per tenere le bozze. Al loro posto c'è il 70276 nella collezione 05, dove è stato spostato anche il 25651 (GiftCard). Dettagli in `_drafts/proposta-modelli-eshop.md` [[proposta-modelli-eshop]]. Problemi noti se si volessero riprendere: codici sconto datati ("DONNA21"), articolo takeout con linguaggio COVID-era, immagini rotte (googleusercontent.com), "Siti immagini" duplicato di 30013.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 8883 | Campagna di San Valentino | campagna-di-san-valentino | draft |
| 8931 | Campagna di Carnevale | campagna-di-carnevale | draft |
| 8932 | Campagna Festa della Donna | campagna-festa-della-donna | draft |
| 8933 | Campagna di Pasqua | campagna-di-pasqua | draft |
| 8968 | Campagna Festa del Papà | campagna-festa-del-pap | draft |
| 8969 | Siti per scaricare immagini gratuiti | siti-per-scaricare-immagini-gratuiti | draft |
| 9156 | Campagna per comunicare che effettui servizio da asporto | campagna-per-comunicare-che-effettui-servizio-da-asporto | draft |
| 9571 | Campagna Festa della Mamma | campagna-festa-della-mamma | draft |

---

### 07 — Booster Vendite e Abbonamenti · `collection_id: 7236`

Strumenti per accelerare le vendite: booster e abbonamenti. Tutti pubblicati. Il 2026-11-11 sono stati aggiunti gli screenshot del gestionale a tutti e 4 (booster di Rainbow, abbonamenti di GIULY in wonderBAR) e il 27455 spiega il riquadro Dettagli.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27454 | Cosa sono i Booster Vendite? | cosa-sono-i-booster-vendite | published |
| 27455 | Come creo e attivo un Booster? | come-creo-e-attivo-un-booster | published |
| 27456 | Cosa sono gli Abbonamenti? | cosa-sono-gli-abbonamenti | published |
| 28249 | Come si crea un Abbonamento? | come-si-crea-un-abbonamento | published |

---

### 08 — Wallet e Gift Card · `collection_id: 7199`

Pagamenti prepagati e gift card digitali. ❌ Specifiche errate: articoli indicano "6 slot" ma UI mostra 5; limiti credito incoerenti (200€ vs 250€). Funzionalità "importo personalizzato" non documentata.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 28250 | Cosa sono e come si attivano i Wallet? | cosa-sono-e-come-si-attivano-i-wallet | published |
| 28251 | Cosa sono e come si attivano le GiftCard? | cosa-sono-e-come-si-attivano-le-giftcard | published |
| 28252 | Impostazioni Wallet & Gift Card | impostazioni-wallet-gift-card | published |
| 28253 | Qual'è la differenza fra Wallet e GiftCard? | qual-e-la-differenza-fra-wallet-e-giftcard | published |

---

### 09 — Vetrina · `collection_id: 7200`

Vetrina, QR Code e volantini, vetrina sulla Home del telefono, regolamento del locale, cover chiosco, pacchetto custom. Il 2026-11-09 è stato creato 70112 (regolamento) e aggiornati 28255 (nuova grafica, con screenshot di Panificio Demo) e 66239. Il vecchio articolo sui flyer (42912) è in bozza dal 06/10/2026, sostituito dal 66239.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 28255 | Cos'è e a cosa serve la Vetrina? | cos-e-e-a-cosa-serve-la-vetrina | published |
| 28259 | Come cambio le immagini Cover che compaiono sul Chiosco? | come-cambio-le-immagini-cover-che-compaiono-sul-chiosco | published |
| 42911 | Come personalizzare graficamente le tue Tessere Fedeltà fisiche | pacchetto-custom-personalizza-il-tuo-kit-fedelta | published |
| 42912 | Come creare Flyer personalizzati per il tuo locale | come-creare-flyer-personalizzati-per-il-tuo-locale | draft |
| 66239 | Porta i clienti nella tua Vetrina con QR Code, link e volantini | porta-i-clienti-nella-tua-vetrina-con-qr-code-link-e-volantini | published |
| 70109 | I tuoi clienti possono tenere la tua Vetrina sulla Home del telefono | la-tua-vetrina-sulla-home-del-telefono | published |
| 70112 | Il regolamento del tuo programma fedeltà | il-regolamento-del-tuo-programma-fedelta | published |

---

### 10 — Pagamenti & Fatturazione · `collection_id: 676`

Abbonamento, fatture, contatto assistenza, referral, cancellazione. 1 articolo ancora in draft.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 1262 | Hai bisogno di assistenza o informazioni commerciali? | hai-bisogno-di-assistenza-o-informazioni-commerciali | **draft** |
| 16629 | Suggerisci una nuova attività e ottieni mesi gratis | suggerisci-attivita | published |
| 41683 | Voglio disdire Unipiazza, cosa devo fare? | voglio-disdire-unipiazza-cosa-devo-fare | published |
| 63774 | Cosa vedo nella sezione "Piano & Consumi"? | cosa-vedo-nella-sezione-piano-e-consumi | published |
| 67830 | Unipiazza è deducibile fiscalmente? | unipiazza-e-deducibile-fiscalmente | published |

---

### 11 — Integrazioni · `collection_id: 8104`

Installazione app su Android/Windows e connessione a Zapier/Make. Il link dell'articolo Android (61666) è stato corretto su `unpz.it/android` e sincronizzato il 2026-10-14, insieme a 48423 (zip Windows), 48446 (casse Android) e 48419 (Kit Lite).

| article_id | Titolo | slug | status |
|---|---|---|---|
| 36692 | Connettere Unipiazza a Zapier e Make (ex Integromat) | connettere-unipiazza-a-zapier-e-make-ex-integromat | published |
| 48423 | Come installare l'App Operatore Unipiazza sul tuo PC Windows | come-installare-l-app-unipiazza-sul-tuo-pc-windows | published |
| 61666 | Come installare l'App Operatore Unipiazza sul tuo dispositivo Android | come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android | published |
| 65542 | "App Operatore assente" sul tuo Chiosco Unipiazza | app-operatore-assente-sul-tuo-chiosco-unipiazza | published (creato dal web, file locale dal 2026-11-09) |

---

### 12 — Impostazioni · `collection_id: 7257`

Panoramica impostazioni (con Visite da verificare dal 2026-11-09), modalità vacanza, specifiche immagini. Tutti pubblicati.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 30018 | Cosa vedo nella sezione Impostazioni? | cosa-vedo-nella-sezione-impostazioni | published |
| 34556 | Come attivare la Modalità Vacanza | come-attivare-la-modalita-vacanza | published |
| 38701 | Guida alle Risoluzioni delle Immagini su Unipiazza | guida-alle-risoluzioni-delle-immagini | published |

---

### 13 — eShop · `collection_id: 3416`

Vendita online: Stripe, prodotti, foto, codici sconto, spedizioni. Il 2026-11-11, per decisione di Edoardo, tutti i 9 articoli sono passati in **draft**, perché il modulo eShop non si vende più (non è stato eliminato). La collezione dà 404 nel centro assistenza e resta su Customerly ([[proposta-modelli-eshop]]). Problemi noti se si volesse riprenderla: 2 articoli duplicati (6994 e 7855 testo identico), 2 quasi vuoti (6978, 6977), tono "voi"/formale off-brand, immagini rotte su googleusercontent.com.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 6866 | Come scattare una foto perfetta! | come-scattare-una-foto-perfetta | draft |
| 6975 | Imballo e Spedizione | imballo-e-spedizione | draft |
| 6977 | Crea codici sconto | crea-codici-sconto | draft |
| 6978 | Carica i tuoi prodotti | carica-i-tuoi-prodotti | draft |
| 6994 | Come comunicare ai tuoi clienti che hai un eShop! | come-comunicare-ai-tuoi-clienti-che-hai-un-eshop | draft |
| 7003 | Come collegare Stripe | come-collegare-stripe | draft |
| 7026 | Come organizzare le informazioni dei prodotti | come-organizzare-le-informazioni-dei-prodotti | draft |
| 7855 | Come comunicare ai tuoi clienti che hai un eShop | come-promuovere-il-proprio-eshop | draft |
| 11870 | Esempi vetrina eShop | esempi-vetrina-eshop | draft |

---

### 14 — Tablet Unipiazza & Tessere · `collection_id: 171`

Guide tablet e tessere fedeltà. ⚠️ 5 articoli in draft (contenuto legacy da valutare); 2 pubblicati (avviso tessere KC-KH e KR-KZ, personalizzazione tessera nel Wallet). Nota: 9 articoli legacy cancellati manualmente da Customerly il 2026-07-01, rimossi anche dal locale.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 1249 | Ho cambiato la password del wifi, come la cambio nel tablet? | ho-cambiato-la-password-del-wifi-come-la-cambio-nel-tablet | published |
| 1250 | E' comparsa la scritta blu "dispositivo non trovato" cosa posso fare? | e-comparsa-la-scritta-blu-dispositivo-non-trovato-cosa-posso-fare | **draft** |
| 1251 | Visualizzo una schermata rossa con scritto "Wifi assente" cosa posso fare? | visualizzo-una-schermata-rossa-con-scritto-wifi-assente-cosa-posso-fare | **draft** |
| 4364 | Come accreditare gettoni tramite App Partner | come-accreditare-gettoni-tramite-app-partner | **draft**, non esiste più su Customerly |
| 15851 | Il Tablet è acceso ma bloccato | il-tablet-e-acceso-ma-bloccato | **draft** |
| 61811 | Tessere arancioni e blu con codice KC-KH e KR-KZ | tessere-arancioni-e-blu-con-codice-kc-kh-e-kr-kz | published |
| 65545 | Come personalizzare la tua Tessera Fedeltà su Apple Wallet & Google Wallet | come-personalizzare-la-tessera-fedelta-su-apple-wallet-e-google-wallet | published |

---

### 15 — Olivia - Consulente Fedeltà AI · `collection_id: 12061`

Articoli sulla funzionalità AI di Unipiazza. Entrambi pubblicati. Gap: manca articolo sui crediti AI (100/mese, ricarica il 1°, costo per interazione).

| article_id | Titolo | slug | status |
|---|---|---|---|
| 61975 | Olivia, la tua Consulente Fedeltà AI | olivia-la-tua-consulente-fedelta-ai | published |
| 61976 | Come usare Olivia per creare e migliorare le campagne | come-usare-olivia-per-creare-e-migliorare-le-campagne | published |

---

## Legenda

| Simbolo | Significato |
|---|---|
| ✅ | Collezione ok, nessun problema noto |
| ⚠️ | Uno o più articoli necessitano attenzione |
| ❌ | Problemi critici (contenuto errato, broken, off-brand) |
| **draft** | Articolo non pubblicato su Customerly |
| published | Articolo live su Customerly |

Per il dettaglio dei problemi e il piano di fix → vedi `AUDIT-KB.md`.
