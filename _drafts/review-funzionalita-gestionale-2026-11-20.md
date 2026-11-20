# Review funzionalità del Gestionale non coperte dalla KB (20/11/2026)

← [[KB]]

Confronto fra il codice del Gestionale Partner (repo `unipiazza-web-partner-v2`, branch `master`
del 20/11/2026) e gli articoli **pubblicati** della KB. Il modulo eShop è escluso, perché non si
vende più. Le righe segnate ✔️ le ho ricontrollate a mano sul codice, le altre vengono dalla
lettura di JSX e articoli fatta dai sotto-agenti e vanno verificate quando si scrive l'articolo.

Riferimenti al codice relativi alla radice del repo del gestionale. Mappa degli articoli in
[[overview]].

Fatto in questa sessione: nuovo articolo sugli orari di apertura
`articles/09-vetrina/come-modificare-gli-orari-di-apertura.md` [[come-modificare-gli-orari-di-apertura]].

---

## 1. Articoli pubblicati che oggi dicono cose sbagliate

Sono i più urgenti, perché Olivia li ripete ai clienti.

| # | Articolo | Cosa dice | Cosa fa il gestionale |
|---|---|---|---|
| 1 ✔️ | 36905 Accedere al Gestionale e reimpostare la password [[come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password]] | Non c'è un tasto per reimpostarla, la password temporanea la dà l'assistenza | Al login c'è **Recupera password** → link via email → nuova password (`app/components/PasswordForm/index.tsx:138`, `app/containers/PasswordRecoveryPage/`). Si entra anche con il numero di telefono |
| 2 ✔️ | 61971 Inviare una campagna senza approvazione [[inviare-una-campagna-senza-approvazione]], 27450 passo 6, 70971, 61976 | L'invio diretto senza revisione è attivo | **Invia subito** e **Invia come programmato** sono disattivati con «Presto in arrivo» per Marketing e WhatsApp (`app/components/CampaignSubmitModals/index.tsx:465-471`). Resta solo «Fai controllare la campagna». **Da chiedere a Lorenzo** se è uno stop temporaneo |
| 3 ✔️ | 70972 Eliminare un cliente [[come-eliminare-un-cliente-dal-programma-fedelta]] | «La finestra di conferma non ti ricorda» il credito | Ora avvisa «Questo cliente ha credito che andrà perso» e mostra «Cosa si perde» (`app/containers/CustomerPage/CustomerPage.tsx:1366-1384`) |
| 4 ✔️ | 28262 Profilo cliente [[cosa-posso-fare-dal-profilo-cliente]] | Il compleanno lo inserisce solo il cliente | C'è **🎂 Inserisci Compleanno** nel profilo (`app/containers/CustomerPage/MyUserGenericInfo.tsx:298`), serve il permesso di modifica clienti |
| 5 | 61967 e 61969 Filtri clienti [[filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti]] | Pannello vecchio («Euro totali spesi» a cursore, «Interazioni») | Pannello nuovo a schede (Visite e fedeltà, Contatti e consensi, Profilo, Campagne), Spesa Min–Max. I filtri valgono tutti insieme, quindi la ricetta «Profili da completare» con «oppure» non si può fare |
| 6 | 61968 Liste Clienti [[come-creare-e-gestire-le-liste-clienti]] | Bottone «Aggiorna lista», lista «Con App» | Non esistono. C'è «Salva lista» → «Sovrascrivi lista esistente» / «Nuova lista». Non dice che le liste servono anche per Premi e Booster |
| 7 | 61970 Dettaglio campagna [[dettaglio-campagna-inviata-statistiche-e-analisi]] | 4 riquadri sempre presenti, vista «solo Aperture» | «Visite generate» e «Incassi» solo per Promo ed Evento, la vista «solo Aperture» non c'è |
| 8 | 28259 Cover Chiosco [[come-cambio-le-immagini-cover-che-compaiono-sul-chiosco]] | «Attivale o disattivale quando vuoi», la spunta Chiosco nelle campagne | Nessun interruttore, lo stato dipende dalle date. Nell'editor campagne la spunta Chiosco non c'è |
| 9 | 28250 / 28252 Wallet | Esempio «1,5 gettoni per euro» | Il moltiplicatore x1,5 dà 15 gettoni per euro. Mancano anche scadenza (12 mesi dall'ultima ricarica) e tabella Wallet attivati |
| 10 | 37235 e 30018 Dominio email | «Solo Elite» / «solo app col proprio marchio», «fino a 24 ore» | La card è visibile a tutti, la propagazione indicata è 24-48 ore. Da verificare se il backend la blocca per pacchetto |
| 11 | 38701 Risoluzioni immagini [[guida-alle-risoluzioni-delle-immagini]] | Cover 480×300 / 1920×1200, 16:10 per campagne e Automazioni | Cover minimo 320×200, ridotta a 1280×800. Automazioni 600×300 a 1,91:1 |
| 12 | 63774 Piano & Consumi [[cosa-vedo-nella-sezione-piano-e-consumi]] | «Premi Modifica e correggi» anche ragione sociale e P.IVA | Si cambiano solo Codice destinatario e PEC. Mancano le campagne incluse (X / 48) e il passaggio a Chiosco Plus |
| 13 | 27444 Etichette clienti [[cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi]] | VIP con 5 visite | Il tooltip del gestionale dice almeno 4 visite negli ultimi 5 mesi, al massimo il 20% dei clienti. Da allineare con Lorenzo |
| 14 | 61975 Olivia [[olivia-la-tua-consulente-fedelta-ai]] | UI vecchia («Conversazioni recenti», pulsante in basso a destra) | Pannello «Conversazioni» separato per locale, la bolla della chat in /assistente non c'è |
| 15 ✔️ | 28255 Vetrina [[cos-e-e-a-cosa-serve-la-vetrina]] | 25 icone, mancano diversi campi | 62 icone. Mancano Logo, WhatsApp, TikTok, Nome Chiosco, Colore Vetrina & Chiosco, il limite di 3 copertine e l'avviso che **cambiare nome cambia l'indirizzo della Vetrina** (QR stampati da rifare, `app/containers/ShopPage/ShopPage.tsx:302-323`) |

Minori, da sistemare quando si tocca l'articolo: Booster solo x2/x3 (ci sono anche x1,5, minimo 10
gettoni bonus) in 27455; reset gettoni senza regole dei promemoria e link al vecchio slug in 41597;
Modalità Vacanza senza banner e spegnimento automatico in 34556; «Autopromo» rimasto nei permessi.

## 2. Funzionalità senza articolo, in ordine di impatto

| # | Funzionalità | Dove | Proposta |
|---|---|---|---|
| 1 ✔️ | **Dispositivi**: «Collega un dispositivo», «Genera codice» (6 cifre + QR, scade), elenco con stato, versione app, batteria, Wi-Fi | Menu utente › Dispositivi, `app/containers/DevicesPage/DevicesPage.tsx:311-691` | Nuovo articolo «Come collegare un Chiosco o l'App Operatore» + rimandi da 65542, 1249, 61666, 48423 |
| 2 | **Campagna WhatsApp passo passo**: editor, regole Meta del corpo (niente variabili a inizio o fine, max 10 emoji), promozione riscattabile, intestazione con immagine, pulsante, costo stimato | Campagne › Crea campagna › WhatsApp, `app/containers/CreateWhatsappCampaignPage/` | Nuovo articolo. 61972 dice solo «inizia a creare» |
| 3 | **Azioni manuali dal profilo cliente**: Accredita gettoni (si scrivono euro, «🎁 Regala questi gettoni»), Aggiungi numero (con consenso), Inserisci compleanno, Gestisci abbonamenti › Scala 1 / Aggiungi abbonamento, Modifica Wallet (si scrive il saldo finale) | /clienti/:id | Un articolo per «il Chiosco non funziona, come carico a mano» + aggiornare 28262 |
| 4 | **Attivare una GiftCard dal gestionale** e correggere o cancellare GiftCard non usate | Wallet › Attivi, `app/containers/Wallets/WalletsPage.tsx:502-599` | Nuovo articolo in 08 |
| 5 | **Disattivare o eliminare Booster e Abbonamenti**, cosa resta modificabile dopo il salvataggio (prezzo e quantità bloccati) | /boosters/:id, /premi/abbonamenti/:id | Aggiungere una sezione a 27455 e 28249 |
| 6 | **Premi e Booster riservati a una lista clienti** (colonna «Clienti», «Clienti a cui è rivolto il Booster», niente cover Chiosco con le liste) | Premi › Modifica premi, Crea booster | Nuovo articolo «Premi e Booster solo per i VIP» |
| 7 | **Inquadra QrCode** dal telefono per trovare o iscrivere un cliente | Clienti › Lista clienti | Nuovo articolo, è l'unico modo per iscrivere dal telefono |
| 8 | **Campagna Marketing**: «Invia test», perché «Programma invio» è grigio («Dati mancanti»), validità di Promo ed Evento, interruttore «Mappa», oggetto vuoto = nome campagna | /crea_marketing/:id | Rifare 27450 sul flusso a 5 step + articolo «Non riesco a programmare la campagna» |
| 9 | **Stima costi WhatsApp nelle Automazioni** («Stima i costi», «circa X€ al mese») | Automazioni › Modifica | Aggiungere a 61973 |
| 10 | **Pagina Compleanni clienti** (calendario, «Può ricevere promo?») | Clienti › Compleanni | Nuovo articolo breve o sezione in 65570 |
| 11 | **Scarica storico azioni** (Excel/CSV via email, storico completo) | Clienti › Storico azioni | Aggiungere a 27445 e 40695 |
| 12 | **Logo della Vetrina** (anche icona sulla Home del cliente) e avviso cambio nome | Vetrina › Web & App | Dentro l'aggiornamento di 28255 |
| 13 | **Sezioni con il lucchetto** (Abbonamenti, Automazioni, Booster non inclusi nel pacchetto) e **catene** («un punto vendita alla volta», Impostazioni vuote con «Tutti») | Menu laterale, selettore punto vendita | Un articolo «Perché vedo un lucchetto o una pagina vuota?» |
| 14 | **Permessi degli amministratori** («Gestisci i permessi», bottoni grigi «Non hai i permessi per questa funzionalità») | Impostazioni | Nuovo articolo, oggi è solo nominato in 30018 |
| 15 | **Notifiche** (campanella con badge) e **notifiche push** del browser | Barra in alto | Articolo breve |
| 16 | **Azioni di Olivia**: Booster e Abbonamenti creati subito (non bozze), bozza campagna WhatsApp, proposte che scadono, feedback «Risposta non utile» | /assistente | Aggiornare 61975 |
| 17 | **Offerte Partner** | /offerte_partner | Articolo breve, se la pagina resta |
| 18 | Altre piccole: «Condividi» campagna (link pubblico), etichette «Promo già finita il…», bozze create in automatico, Recensioni con link Google obbligatorio, Ripristina liste preimpostate, reset gettoni per tutta la catena, mittente unico nelle campagne di catena, cover programmate a fasce orarie, eliminare un premio («almeno un premio visibile») | varie | Da infilare negli articoli esistenti quando si aggiornano |

Non serve documentare: /mcp-auth (ci si arriva solo da un client MCP), Privacy Mode
(Ctrl+Shift+B, basta che Olivia sappia che «nomi sfocati» si risolve ricaricando), codice morto
(/automazioni/follow, drag&drop delle cover).

## 3. Per Lorenzo

**Risposte di Edoardo del 21/11/2026**

1. «Invia subito» spento è voluto. Oggi ogni campagna passa da «Fai controllare la campagna», quindi vanno corretti 61971, 27450, 70971 e 61976.
2. VIP. Nessun numero fisso è giusto. Il default del backend è 5 visite in 150 giorni, ma ogni categoria ha i suoi criteri in `categories.user_list_defaults.vip` (23 su 58 hanno 5 in 150 giorni, le altre vanno da 3 in 90 a 44 in 180) e il locale li cambia da Liste clienti. Tooltip segnalato nell'issue [unipiazza-web-partner-v2#157](https://github.com/unipiazza/unipiazza-web-partner-v2/issues/157).
3. Il dominio email personalizzato è aperto a tutti i pacchetti.
4. Le campagne incluse sono giuste così (48, 150 con Chiosco Plus). Raggiunto il limite non se ne possono inviare altre.
5. Durata del link di recupero password e condizione di «Aggiungi numero» (`can_insert_phone`). Edoardo non lo sa, resta per Lorenzo.

Domande originali:

1. «Invia subito» è spento per tutte le campagne. È voluto? Se sì, va corretto 61971 e gli altri.
2. VIP con 4 o 5 visite? Tooltip e articolo non coincidono.
3. Dominio email personalizzato per tutti i pacchetti o solo Elite?
4. Piano & Consumi mostra «X / 48 campagne» ma l'upgrade promette «illimitate».

Possibili bug:

- Il pulsante «WhatsApp» nella campagna WhatsApp si salva come Chiamata (`CreateWhatsappCampaignPage.tsx:1185-1199`).
- Dopo una ricerca, «Seleziona tutti» + «Aggiungi ad una lista» forse salva solo i 20 clienti della pagina (`CustomersPage.tsx:1132-1180`).
- «Scarica premio» si disattiva per prizes.write ma il tooltip controlla wallets.write (`MyUserGenericInfo.tsx:152`).
- «Invia test» ignora l'interruttore Mappa.
- Vetrina: dopo mezzanotte un locale con orario 18:00-2:00 risulta «Chiuso, apre alle 18:00», perché lo stato guarda solo le fasce del giorno in corso (`unipiazza-web-user-v2`, `app/components/ShopFinder/places.ts`, `openingStatus`).
- Refusi: «Rinonima», «modalita/verra» senza accento, «Autopromo» rimasto in più punti.

## 4. Da sistemare in overview.md

Le righe «27442 manca 2 metriche» e «Wallet importo personalizzato non documentato» sono
vecchie: il file locale le copre già.
