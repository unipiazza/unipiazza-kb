# Overview — Knowledge Base Unipiazza

Mappa della KB locale. **Fonte di verità: i file `.md` in `articles/`.**
Aggiorna questo file ogni volta che aggiungi, rimuovi o cambi lo status di un articolo.

- **Collezioni attive:** 15
- **Collezioni archivio:** 5
- **Articoli totali:** 133 (103 published, 30 draft)
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
| 03-clienti | 7180 | Clienti | 22 | ✅ |
| 04-premi-e-gettoni | 7181 | Premi e Gettoni | 9 | ✅ |
| 05-campagne-autopromo-whatsapp | 7182 | Campagne, Autopromo e WhatsApp | 18 | ✅ |
| 06-modelli-campagne | 3911 | Modelli Campagne | 9 | ⚠️ contenuti 2021-22 datati, immagini rotte |
| 07-booster-e-abbonamenti | 7236 | Booster Vendite e Abbonamenti | 4 | ✅ |
| 08-wallet-e-gift-card | 7199 | Wallet e Gift Card | 4 | ❌ specifiche errate (slot, limiti) |
| 09-vetrina | 7200 | Vetrina | 4 | ✅ |
| 10-pagamenti-e-fatturazione | 676 | Pagamenti & Fatturazione | 4 | ⚠️ 1 articolo in draft |
| 11-integrazioni | 8104 | Integrazioni | 3 | ⚠️ articolo Android con errori copia-incolla |
| 12-impostazioni | 7257 | Impostazioni | 3 | ✅ |
| 13-eshop | 3416 | eShop | 10 | ❌ duplicati, articoli vuoti, copy off-brand |
| 14-tablet-e-tessere | 171 | Tablet Unipiazza & Tessere | 6 | ⚠️ 5 draft legacy, 1 published |
| 15-olivia-ai | 12061 | Olivia - Consulente Fedeltà AI | 2 | ✅ |

**Archivi** (tutti draft, contenuto legacy — non sincronizzare):

| Cartella | collection_id | Titolo | Art. |
|---|---|---|---|
| archivio-app-partner | 677 | App Unipiazza - Partner & Web App | 5 |
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
| 61989 | Smartphone o tablet gonfio? Ecco cosa fare | smartphone-o-tablet-gonfio-ecco-cosa-fare | **draft** |

---

### 02 — Riepilogo · `collection_id: 7179`

Accesso al gestionale e panoramica della sezione Riepilogo. ⚠️ Articolo 27442 mancante di 2 metriche: "Premi & Promo ritirate" e "Ricavi Autopromo".

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27442 | Cosa vedo nella sezione Riepilogo? | cosa-vedo-nella-sezione-riepilogo | published |
| 36905 | Come accedere al Gestionale e reimpostare la password | come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password | published |
| 37647 | Come accedere velocemente al gestionale Partner da Smartphone | come-accedere-velocemente-al-gestionale-partner-da-smartphone | published |
| 61924 | Come disabilitare lo spegnimento automatico del Chiosco | come-disabilitare-lo-spegnimento-automatico-del-chiosco | published |
| 63781 | L'app Partner non funziona più? Ecco cosa fare! | l-app-partner-non-funziona-piu-ecco-cosa-fare | published |

---

### 03 — Clienti · `collection_id: 7180`

Gestione clienti: iscrizione, profili, segmentazione, privacy, filtri, liste, importazione. Tutti pubblicati.

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
| 30276 | Incentiva i Download dell'App tramite QR Code | incentiva-i-download-dell-app-tramite-qr-code | published |
| 30305 | Invita i tuoi clienti ad iscriversi via Whatsapp o Email | invita-i-tuoi-clienti-ad-iscriversi-via-whatsapp-o-email | published |
| 30306 | Come posso aggiungere o importare clienti? | aggiungere-importare-contatti-clienti | published |
| 33516 | I clienti possono modificare i propri dati personali? | i-clienti-possono-modificare-i-propri-dati-personali | published |
| 35025 | Posso aggiungere delle note ai clienti? | posso-aggiungere-delle-note-ai-clienti | published |
| 41052 | Come correggere un importo errato nel gestionale Unipiazza | come-correggere-un-importo-errato-nel-gestionale-unipiazza | published |
| 41054 | Come scalare un premio manualmente nel gestionale Unipiazza | come-scalare-un-premio-manualmente-nel-gestionale-unipiazza | published |
| 41598 | Un mio cliente ha due profili, come posso fare per unirli? | un-mio-cliente-ha-due-profili-come-posso-fare-per-accorparli | published |
| 44201 | Invita i clienti ad inserire il numero di Telefono | invita-i-clienti-ad-inserire-il-numero-di-telefono | published |
| 61967 | Filtra Clienti: come segmentare e analizzare i tuoi clienti | filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti | published |
| 61968 | Come creare e gestire le Liste Clienti | come-creare-e-gestire-le-liste-clienti | published |
| 61969 | 15 idee per segmentare i tuoi clienti con i Filtri | 15-idee-per-segmentare-i-clienti-con-i-filtri | published |
| 40695 | Come posso esportare i dati dei miei clienti? | come-posso-esportare-i-dati-dei-miei-clienti | published |
| 63765 | Il cliente ha una nuova Tessera Fedeltà: come collegare il profilo esistente? | il-cliente-ha-una-nuova-tessera-fedelta-come-collegare-il-profilo-esistente | published |

---

### 04 — Premi e Gettoni · `collection_id: 7181`

Meccaniche di fedeltà: gettoni, lista premi, creazione premi, limiti ritiro, gestione fiscale. Tutti pubblicati.

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

### 05 — Campagne, Autopromo e WhatsApp · `collection_id: 7182`

Invio campagne email/SMS/WhatsApp, autopromo, RCS, calendario eventi, statistiche. Tutti pubblicati.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 27450 | Cosa sono le Campagne Marketing e come si creano? | cosa-sono-le-campagne-marketing-e-come-si-creano | published |
| 27452 | Suggerimenti per scrivere una Campagna Marketing perfetta | suggerimenti-per-scrivere-una-campagna-marketing-perfetta | published |
| 27453 | Cosa sono e come funzionano le Autopromo? | cosa-sono-le-autopromo | published |
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
| 61973 | Come attivare WhatsApp sulle tue Autopromo | come-attivare-whatsapp-sulle-autopromo | published |
| 61974 | Il Calendario Eventi: trova l'occasione giusta per la tua prossima campagna | calendario-marketing-unipiazza | published |
| 63782 | Le comunicazioni automatiche: come appaiono ai tuoi clienti | anteprime-comunicazioni-automatiche | published |

---

### 06 — Modelli Campagne · `collection_id: 3911`

Template stagionali per festività e occasioni. ⚠️ Contenuti 2021-22 con codici sconto datati ("DONNA21"); articolo takeout con linguaggio COVID-era. Immagini rotte (googleusercontent.com). Articolo "Siti immagini" duplicato di 30013.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 8883 | Campagna di San Valentino | campagna-di-san-valentino | published |
| 8931 | Campagna di Carnevale | campagna-di-carnevale | published |
| 8932 | Campagna Festa della Donna | campagna-festa-della-donna | published |
| 8933 | Campagna di Pasqua | campagna-di-pasqua | published |
| 8968 | Campagna Festa del Papà | campagna-festa-del-pap | published |
| 8969 | Siti per scaricare immagini gratuiti | siti-per-scaricare-immagini-gratuiti | published |
| 9156 | Campagna per comunicare che effettui servizio da asporto | campagna-per-comunicare-che-effettui-servizio-da-asporto | published |
| 9571 | Campagna Festa della Mamma | campagna-festa-della-mamma | published |
| 25651 | Promuovi le tue GiftCard! | promuovi-le-tue-giftcard | published |

---

### 07 — Booster Vendite e Abbonamenti · `collection_id: 7236`

Strumenti per accelerare le vendite: booster e abbonamenti. Tutti pubblicati. Mancano screenshot UI.

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

Personalizzazione estetica: cover chiosco, flyer, pacchetto custom. Tutti pubblicati.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 28255 | Cos'è e a cosa serve la Vetrina? | cos-e-e-a-cosa-serve-la-vetrina | published |
| 28259 | Come cambio le immagini Cover che compaiono sul Chiosco? | come-cambio-le-immagini-cover-che-compaiono-sul-chiosco | published |
| 42911 | Pacchetto Custom: Personalizza il tuo Kit Fedeltà! | pacchetto-custom-personalizza-il-tuo-kit-fedelta | published |
| 42912 | Come creare Flyer personalizzati per il tuo locale | come-creare-flyer-personalizzati-per-il-tuo-locale | published |

---

### 10 — Pagamenti & Fatturazione · `collection_id: 676`

Abbonamento, fatture, contatto assistenza, referral, cancellazione. 2 articoli ancora in draft.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 1262 | Hai bisogno di assistenza o informazioni commerciali? | hai-bisogno-di-assistenza-o-informazioni-commerciali | **draft** |
| 2852 | Referente Unipiazza – Orari & Informazioni | referente-unipiazza-orari-informazioni | **draft** |
| 16629 | Suggerisci una nuova attività e ottieni mesi gratis | suggerisci-attivita | published |
| 41683 | Voglio disdire Unipiazza, cosa devo fare? | voglio-disdire-unipiazza-cosa-devo-fare | published |
| 63774 | Cosa vedo nella sezione "Abbonamento & Fatture"? | cosa-vedo-nella-sezione-abbonamento-e-fatture | published |

---

### 11 — Integrazioni · `collection_id: 8104`

Installazione app su Android/Windows e connessione a Zapier/Make. ⚠️ Articolo Android (61666) ha link copiato da articolo Windows (`unpz.it/desktop` invece di endpoint Android).

| article_id | Titolo | slug | status |
|---|---|---|---|
| 36692 | Connettere Unipiazza a Zapier e Make (ex Integromat) | connettere-unipiazza-a-zapier-e-make-ex-integromat | published |
| 48423 | Come installare l'App Operatore Unipiazza sul tuo PC Windows | come-installare-l-app-unipiazza-sul-tuo-pc-windows | published |
| 61666 | Come installare l'App Operatore Unipiazza sul tuo dispositivo Android | come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android | published |

---

### 12 — Impostazioni · `collection_id: 7257`

Panoramica impostazioni, modalità vacanza, specifiche immagini. Tutti pubblicati.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 30018 | Cosa vedo nella sezione Impostazioni? | cosa-vedo-nella-sezione-impostazioni | published |
| 34556 | Come attivare la Modalità Vacanza | come-attivare-la-modalita-vacanza | published |
| 38701 | Guida alle Risoluzioni delle Immagini su Unipiazza | guida-alle-risoluzioni-delle-immagini | published |

---

### 13 — eShop · `collection_id: 3416`

Vendita online: Stripe, prodotti, foto, codici sconto, spedizioni. ❌ 2 articoli duplicati (6994 e 7855 testo identico); 2 articoli quasi vuoti (6978, 6977); intera collezione usa tono "voi"/formale (off-brand, da riscrivere con unipiazza-copy). Immagini rotte su googleusercontent.com.

| article_id | Titolo | slug | status |
|---|---|---|---|
| 6866 | Come scattare una foto perfetta! | come-scattare-una-foto-perfetta | published |
| 6975 | Imballo e Spedizione | imballo-e-spedizione | published |
| 6977 | Crea codici sconto | crea-codici-sconto | published |
| 6978 | Carica i tuoi prodotti | carica-i-tuoi-prodotti | published |
| 6994 | Come comunicare ai tuoi clienti che hai un eShop! | come-comunicare-ai-tuoi-clienti-che-hai-un-eshop | published |
| 7003 | Come collegare Stripe | come-collegare-stripe | published |
| 7026 | Come organizzare le informazioni dei prodotti | come-organizzare-le-informazioni-dei-prodotti | published |
| 7855 | Come comunicare ai tuoi clienti che hai un eShop | come-promuovere-il-proprio-eshop | published |
| 11870 | Esempi vetrina eShop | esempi-vetrina-eshop | published |

---

### 14 — Tablet Unipiazza & Tessere · `collection_id: 171`

Guide tablet e tessere fedeltà. ⚠️ 15 articoli in draft (contenuto legacy da valutare); solo 1 pubblicato (avviso tessere arancioni KC-KH).

| article_id | Titolo | slug | status |
|---|---|---|---|
| 1249 | Ho cambiato la password del wifi, come la cambio nel tablet? | ho-cambiato-la-password-del-wifi-come-la-cambio-nel-tablet | **draft** |
| 1250 | E' comparsa la scritta blu "dispositivo non trovato" cosa posso fare? | e-comparsa-la-scritta-blu-dispositivo-non-trovato-cosa-posso-fare | **draft** |
| 1251 | Visualizzo una schermata rossa con scritto "Wifi assente" cosa posso fare? | visualizzo-una-schermata-rossa-con-scritto-wifi-assente-cosa-posso-fare | **draft** |
| 1252 | Come modifico le immagini visualizzate nel Tablet? | come-modifico-le-immagini-visualizzate-nel-tablet | **draft** |
| 1253 | Il Tablet non si accende cosa posso fare? | il-tablet-non-si-accende-cosa-posso-fare | **draft** |
| 1254 | Ho accreditato un importo sbagliato posso modificarlo? | ho-accreditato-un-importo-sbagliato-posso-modificarlo | **draft** |
| 1256 | Come creare una campagna email | come-creare-una-campagna-email | **draft** |
| 1257 | Come collego la mia pagina Facebook al Tablet Unipiazza? | come-collego-la-mia-pagina-facebook-al-tablet-unipiazza | **draft** |
| 3316 | Come collego la mia pagina Facebook al tablet? | come-collego-la-mia-pagina-facebook-al-tablet | **draft** |
| 4364 | Come accreditare gettoni tramite App Partner | come-accreditare-gettoni-tramite-app-partner | **draft** |
| 4365 | Un cliente perde la Tessera, cosa può fare? | un-cliente-perde-la-tessera-cosa-puo-fare | **draft** |
| 4406 | Le migliori frasi per far aderire i tuoi clienti | le-migliori-frasi-per-far-aderire-i-tuoi-clienti | **draft** |
| 15851 | Il Tablet è acceso ma bloccato | il-tablet-e-acceso-ma-bloccato | **draft** |
| 15852 | Visualizzo un lucchetto nello smartphone | visualizzo-un-lucchetto-nello-smartphone | **draft** |
| 61811 | Tessere arancioni con codice KC, KD, KE, KF, KG, KH | tessere-arancioni-con-codice-kc-kd-ke-kf-kg-kh | published |

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
