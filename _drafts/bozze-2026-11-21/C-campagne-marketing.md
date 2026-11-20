# Gruppo C — Campagne Marketing, invio e Piano & Consumi (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Verificate sul codice del
gestionale (`unipiazza-web-partner-v2`, `master` al commit `2146b46` del 20/11/2026) e, dove
indicato, di `unipiazza-api`. Decisioni di Dodo del 21/11: «Invia subito» e «Invia come
programmato» spenti sono voluti; il limite di 48 campagne (150 con Chiosco Plus) è giusto e
raggiunto il limite non se ne inviano altre.

Righe della review coperte: sezione 1 #2, #7, #12; sezione 2 #8 e le voci campagne della #18.

---

## 1. 61971 Inviare una campagna senza approvazione [[inviare-una-campagna-senza-approvazione]]

Verificato su: `app/components/CampaignSubmitModals/index.tsx:440-560` (opzione diretta con
«Presto in arrivo», «Fai controllare la campagna», note per il team, bottone «Richiedi revisione»),
`app/components/CampaignSummary/summaryModel.ts:86-93, 248-300` (parte appena approvata, Scaduta,
Non è partita), `CreateMarketingCampaignPage.tsx:1890-1925` (Invia subito / Programma l'invio).

Riscritto da capo. Lo slug resta uguale per non rompere i link. Cambio il titolo perché oggi la
risposta è «no» e le persone lo cercano così.

**Titolo:** Si può inviare una campagna senza approvazione?

**Description:** Oggi ogni campagna passa dal controllo del team Unipiazza. Ti spieghiamo come funziona e come farla partire quando vuoi tu.

**Keywords (aggiunte):** invia subito, invia come programmato, presto in arrivo, revisione campagna, richiedi revisione

**Testo:**

Hai finito la tua campagna e vuoi mandarla subito, senza aspettare nessuno? Per ora non si può. Ogni campagna, Marketing o WhatsApp, passa dal controllo di un consulente Unipiazza prima di arrivare ai tuoi clienti. È un passaggio in più, ma ti evita refusi, destinatari sbagliati e orari poco felici. 😉

## Cosa vedi all'ultimo passo

Quando premi **Programma invio** si apre la finestra **Vuoi inviare la campagna?** (oppure **Vuoi programmare la campagna?**, se hai scelto un giorno e un'ora).

![Finestra "Vuoi inviare la campagna?" con le due opzioni di invio](https://up-kb-assets.s3.eu-west-3.amazonaws.com/05-campagne-autopromo-whatsapp/61971_InvioConSenzaRevisione-Modal.jpg)

⏳ **Invia subito** (o **Invia come programmato**)<br>È grigia, con l'etichetta **Presto in arrivo**. Per ora non si può scegliere.

✅ **Fai controllare la campagna**<br>È l'unica strada, ed è già selezionata. Se vuoi, scrivi una nota per il team (per esempio *"Vorrei mandarla all'orario migliore"*), poi premi **Richiedi revisione**.

## Cosa succede dopo

**1. Il team la controlla**<br>Un consulente Unipiazza guarda testi, immagine, destinatari e orario. Il team lavora dal lunedì al venerdì, dalle 9:00 alle 18:00, e finché non ha finito la campagna non parte.

**2. Parte quando hai deciso tu**<br>Se nell'**Orario di invio** avevi scelto **Invia subito**, la campagna parte appena il team la approva. Se l'avevi programmata, parte da sola il giorno e all'ora che hai scelto.

**3. Segui a che punto è**<br>Apri la campagna da **Le tue campagne** e trovi la linea **Dove si trova la tua campagna**, con tutti i passaggi. Ti spieghiamo come leggerla, e come riportarla in bozza se ti accorgi di un errore, in [Dove si trova la tua campagna e come riportarla in bozza](https://supporto.unipiazza.it/it/articles/70971-dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza) [[dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza]].

💡 **Hai una data precisa in mente?**<br>Programmala con un po' di anticipo, soprattutto se deve partire nel fine settimana o la mattina presto, così il team ha il tempo di controllarla prima.

🛑 **E se il team non la manda?**<br>Può capitare che il team chiuda una campagna senza inviarla, per esempio perché la promo è già scaduta. In quel caso la trovi come **Scaduta**, con il motivo scritto nella sua pagina.

📲 **E le campagne WhatsApp?**<br>Funzionano allo stesso modo, con un passaggio in più. Dopo il nostro controllo il messaggio va a Meta, che deve approvarlo prima dell'invio. Ti spieghiamo tutto in [Campagne WhatsApp: come funzionano, quanto costano e come iniziare](https://supporto.unipiazza.it/it/articles/61972-campagne-whatsapp-come-funzionano-costi-e-come-iniziare) [[campagne-whatsapp-come-funzionano-costi-e-come-iniziare]].

---

Vuoi che la tua campagna passi il controllo al primo colpo? Leggi [Suggerimenti per scrivere una Campagna Marketing perfetta](https://supporto.unipiazza.it/it/articles/27452-suggerimenti-per-scrivere-una-campagna-marketing-perfetta) [[suggerimenti-per-scrivere-una-campagna-marketing-perfetta]]. 💡

---

## 2. 27450 Cosa sono le Campagne Marketing e come si creano? [[cosa-sono-le-campagne-marketing-e-come-si-creano]]

Verificato su: `app/containers/CreateCampaignPage/components.tsx:80-110` (le quattro schede),
`CreateCampaignPage.tsx:310-330` (nome proposto), `CreateMarketingCampaignPage/components.tsx:255-290`
(finestra del nome, «potrai vederlo solo tu»), `CreateMarketingCampaignPage.tsx:366-442`
(campi obbligatori e «Dati mancanti»), `:649` (Mittente solo con più punti vendita), `:1144-1160`
(Invia test), `:1286-1289` (oggetto vuoto = nome della campagna), `:1407-1408` (limiti oggetto
100 e anteprima 150), `:1531-1560` (un solo messaggio per cliente, dal punto vendita più visitato),
`:1890-1960` (Invia subito / Programma l'invio, minuti a passi di 5), `:2058-2163` (i 5 passaggi e
`canSubmit`), `MarketingContentEditor.tsx:58-62, 1032-1600` (limiti, date, pulsante, Mappa),
`components/CampaignPageShell/ContentSetupModal.tsx:405-450` («Da dove vuoi partire?»).

L'introduzione e la parte **Su quali canali arriva la tua campagna** restano uguali. Cambia tutto
da «Ecco come creare una campagna passo passo» fino alla fine.

**Prima (dal passo 1 alla fine):**
> **1. Vai nella sezione Campagne** e premi "Crea nuova campagna". **2. Scegli il tipo** … **4. Imposta i dettagli**: nome della campagna, oggetto email e il testo di anteprima … **6. Scegli come inviare**: con la revisione del team Unipiazza … oppure senza revisione, direttamente tu …

**Dopo:**

Ecco come creare una campagna passo passo.

**1. Scegli il tipo di campagna**<br>Vai in [Campagne](https://partner.unipiazza.it/campagne), premi **Crea nuova campagna** e scegli tra **Annuncio**, **Evento** e **Promo**. La quarta scheda è **WhatsApp**, che ha un suo percorso e ti spieghiamo in [Campagne WhatsApp: come funzionano, quanto costano e come iniziare](https://supporto.unipiazza.it/it/articles/61972-campagne-whatsapp-come-funzionano-costi-e-come-iniziare) [[campagne-whatsapp-come-funzionano-costi-e-come-iniziare]].

**2. Dai un nome alla campagna**<br>Ti proponiamo un nome come *Campagna Promo - 21/11/2026, 10:30*, che puoi cambiare. Il nome serve a te per ritrovarla, i clienti non lo vedono. Premi **Inizia** e la campagna è già salvata tra le bozze. Da qui in poi ogni modifica si salva da sola.

**3. Compila i passaggi**<br>La pagina della campagna è una lista di passaggi. Apri ognuno, compilalo e premi **Salva**.

1. 🏪 **Mittente**. Compare solo se hai più punti vendita. Scegli quali inviano la campagna. Ogni cliente riceve un solo messaggio, a nome del punto vendita che ha visitato di più tra quelli scelti.
2. 👥 **Destinatari**. Scegli **Tutti i clienti** oppure una lista, come le liste preimpostate (Nuovi, VIP, Ti seguono, Inattivi) o una lista fatta da te. Accanto vedi quanti clienti la riceveranno. Per scrivere solo ad alcuni clienti scelti da te, prima li metti in una lista, come spieghiamo in [Posso inviare una campagna solo ad alcuni clienti?](https://supporto.unipiazza.it/it/articles/30681-posso-inviare-una-campagna-solo-ad-alcuni-clienti) [[posso-inviare-una-campagna-solo-ad-alcuni-clienti]].
3. ✉️ **Oggetto e notifica**. L'**oggetto** (fino a 100 caratteri) è quello che il cliente legge nella posta, nella notifica dell'app e come titolo dell'RCS. Il **testo di anteprima** (fino a 150 caratteri) compare solo nell'email, sotto l'oggetto. Se lasci vuoto l'oggetto usiamo il nome della campagna, quindi conviene sempre scriverlo.
4. 🎨 **Contenuto & Design**. Premi **Inizia a creare** e scegli **Crea da zero** oppure **Crea con Olivia (AI)**, che ti prepara una bozza da sistemare. Nell'editor a tutto schermo trovi l'immagine, il messaggio principale, il testo, un pulsante per farti chiamare, scrivere su WhatsApp o aprire il tuo sito, e la **Mappa** con i contatti della tua attività in fondo all'email (è accesa di partenza, e se non la vuoi la spegni). L'anteprima ti mostra come arriva via email e via RCS. Con **Inserisci variabile** aggiungi nome, saldo Gettoni e altri dati del cliente, come spieghiamo in [Personalizza le tue Campagne con le Variabili](https://supporto.unipiazza.it/it/articles/67839-personalizza-le-campagne-con-le-variabili) [[personalizza-le-campagne-con-le-variabili]].
5. 🕐 **Orario di invio**. Scegli **Invia subito** oppure **Programma l'invio**, con giorno e ora.

📅 **Evento e Promo hanno le date**<br>In una campagna **Evento** scrivi il giorno di inizio e di fine dell'evento. In una **Promo** scrivi la promozione nel dettaglio (per esempio *"20% di sconto sul pranzo"*) e i giorni in cui è valida, dal primo all'ultimo incluso. Con il link **Ecco come vedranno la Promo sul Chiosco i tuoi clienti** vedi come appare sul Chiosco Unipiazza. Nella Promo il testo sotto il messaggio principale è facoltativo.

🧪 **Prova prima di inviare**<br>Quando il contenuto è completo compare **Invia test**. Scrivi un indirizzo email (ti proponiamo il tuo) e ti arriva un'anteprima dell'email. Per mandare il test servono anche l'oggetto e il messaggio principale.

**4. Premi Programma invio**<br>Il bottone si accende quando tutti i passaggi sono completi. Se resta grigio, ti spieghiamo cosa controllare in [Perché non riesco a programmare la campagna?](#) [[non-riesco-a-programmare-la-campagna]].

**5. Mandala al team**<br>Nella finestra che si apre scegli **Fai controllare la campagna**, aggiungi una nota se vuoi e premi **Richiedi revisione**. Un consulente Unipiazza la controlla dal lunedì al venerdì, dalle 9:00 alle 18:00, e poi parte all'orario che hai scelto. L'invio diretto, senza controllo, per ora non è disponibile, come spieghiamo in [Si può inviare una campagna senza approvazione?](https://supporto.unipiazza.it/it/articles/61971-inviare-una-campagna-senza-approvazione) [[inviare-una-campagna-senza-approvazione]].

Da quel momento, aprendo la campagna da **Le tue campagne**, vedi a che punto è (mandata al team, in revisione, programmata o inviata). Ti sei accorto di un errore? Finché non parte puoi riportarla in bozza e sistemarla, come spieghiamo in [Dove si trova la tua campagna e come riportarla in bozza](https://supporto.unipiazza.it/it/articles/70971-dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza) [[dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza]].

🗓️ **Quante campagne puoi inviare?**<br>Ogni piano ne include un certo numero all'anno, e quante ne hai già usate lo vedi in **Piano & Consumi**, come spieghiamo in [Cosa vedo nella sezione "Piano & Consumi"?](https://supporto.unipiazza.it/it/articles/63774-cosa-vedo-nella-sezione-piano-e-consumi) [[cosa-vedo-nella-sezione-piano-e-consumi]].

Prima di creare la tua prima campagna ti consigliamo di leggere [Suggerimenti per scrivere una Campagna Marketing perfetta](https://supporto.unipiazza.it/it/articles/27452-suggerimenti-per-scrivere-una-campagna-marketing-perfetta) [[suggerimenti-per-scrivere-una-campagna-marketing-perfetta]]. Una volta inviata, trovi tutte le statistiche in [Il dettaglio della campagna inviata: statistiche e analisi](https://supporto.unipiazza.it/it/articles/61970-dettaglio-campagna-inviata-statistiche-e-analisi) [[dettaglio-campagna-inviata-statistiche-e-analisi]].

> Nota per la pubblicazione: il link al nuovo articolo «Non riesco a programmare» va messo dopo averlo pubblicato, con il suo `article_id`. Il video YouTube con l'avviso «interfaccia precedente» resta dov'è.

---

## 3. NUOVO — Perché non riesco a programmare la campagna?

Verificato su: `CreateMarketingCampaignPage.tsx:366-442` (campi obbligatori per tipo e testo
«Dati mancanti»), `:2101-2110` (il passaggio mostra «Dati mancanti» nella descrizione), `:2157-2162`
(`canSubmit`: Mittente, Destinatari, Contenuto e Orario completi e nessun passaggio aperto; l'Oggetto
non è obbligatorio), `:1438-1443` (Orario salvabile solo con giorno e ora), `:1617-1700` (Destinatari
salvabili solo con una scelta), `:1940-1960` (niente orari passati), `:1017-1025` (errore orario nel
passato), `components/CampaignPageShell/CampaignPageShell.tsx:711-722` (nessun tooltip sul bottone
per le campagne Marketing).

**Frontmatter proposto:**
```yaml
collection_id: 7182
collection: "📢 Campagne, Automazioni e Whatsapp"
title: "Perché non riesco a programmare la campagna?"
slug: non-riesco-a-programmare-la-campagna
description: "Il bottone Programma invio è grigio? Di solito manca un pezzo. Ecco dove guardare."
status: published
written_by: 2961
is_ai_enabled: true
keywords:
  - programma invio grigio
  - non riesco a inviare la campagna
  - dati mancanti
  - bottone disattivato campagna
  - campagna non si invia
  - orario nel passato
```

**Testo:**

Hai preparato la tua campagna ma il bottone **Programma invio** resta grigio? Niente panico, vuol dire solo che manca ancora qualcosa. Il bottone si accende quando tutti i passaggi sono completi, e in genere basta un minuto per trovare quello che manca. 😊

**1. Guarda i pallini dei passaggi**<br>Ogni passaggio della campagna (Mittente, Destinatari, Contenuto & Design, Orario di invio) diventa completo solo dopo che l'hai compilato e hai premuto **Salva**. Se uno non risulta completo, aprilo e salvalo.

**2. Chiudi il passaggio che hai lasciato aperto**<br>Finché un passaggio è aperto il bottone resta grigio, anche se hai già scritto tutto. Premi **Salva** (o **Annulla**, se non vuoi cambiare niente) e il bottone si accende.

**3. Leggi «Dati mancanti» sotto Contenuto & Design**<br>Se il contenuto non è completo, sotto il titolo del passaggio leggi **Dati mancanti**, con l'elenco di cosa aggiungere. Servono sempre l'immagine e il messaggio principale. Per **Annuncio** ed **Evento** serve anche il testo della campagna. Per l'**Evento** servono le date di inizio e fine evento, per la **Promo** le date di inizio e fine promozione.

**4. Controlla l'Orario di invio**<br>Scegli **Invia subito** oppure **Programma l'invio**. Se programmi, servono sia il giorno sia l'ora, altrimenti **Salva** resta grigio. Non si possono scegliere giorni o orari già passati.

**5. Controlla i Destinatari**<br>Scegli **Tutti i clienti** oppure una lista e premi **Salva**. Se hai più punti vendita, nel passaggio **Mittente** deve esserci almeno un punto vendita.

⏰ **Ti dice che l'orario è nel passato?**<br>Succede se la campagna è rimasta aperta a lungo e l'ora che avevi scelto è passata nel frattempo. Apri **Orario di invio**, scegli un nuovo orario e riprova.

✉️ **E l'oggetto?**<br>Non blocca il bottone, perché se lo lasci vuoto usiamo il nome della campagna. Però il nome della campagna di solito non è pensato per i clienti, quindi scrivi sempre un oggetto tuo in **Oggetto e notifica**.

🧪 **Non riesci a mandare il test?**<br>**Invia test** compare solo quando il contenuto è completo, e per il test servono anche l'oggetto e il messaggio principale. Il Gestionale ti dice quali campi mancano.

Tutto completo e il bottone resta grigio lo stesso? Scrivici o chiamaci su WhatsApp al **388 8665987**, siamo qui per aiutarti!

---

## 4. 70971 Dove si trova la tua campagna e come riportarla in bozza [[dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza]]

Verificato su: `CampaignSubmitModals/index.tsx:465-471` (invio diretto spento),
`components/CampaignSummary/summaryModel.ts:86-93` (con «Invia subito» parte appena approvata),
`:266-270` (stato Scaduta con motivo).

Tre modifiche, il resto resta uguale.

**Sotto i 4 passaggi, prima:**
> Se hai scelto di inviarla senza la revisione del team, i primi due passaggi non ci sono e la campagna è subito **Programmata**.

**Dopo:** frase tolta (oggi ogni campagna passa dal team).

**Passo 5 «Rimandala», prima:**
> Quando hai finito premi **Programma invio** e scegli di nuovo se farla controllare dal team o inviarla senza revisione. Al team non devi scrivere niente, perché riceve un avviso in automatico quando riporti in bozza una campagna.

**Dopo:**
> Quando hai finito premi **Programma invio**, poi **Richiedi revisione**, e la campagna torna al team. Non devi scrivere niente, perché il team riceve un avviso in automatico quando riporti in bozza una campagna.

**«Fino a quando puoi farlo», punto 🚀, prima:**
> 🚀 **Se hai scelto «Invia subito»**: la campagna parte all'istante, quindi non c'è tempo per riportarla in bozza.

**Dopo:**
> 🚀 **Se nell'Orario di invio hai scelto «Invia subito»**: la campagna parte appena il team la approva, quindi puoi riportarla in bozza solo mentre è in revisione.

**Nuovo punto, in fondo a «Fino a quando puoi farlo»:**
> 🛑 **Se la trovi Scaduta**: il team ha chiuso la campagna senza inviarla, e nella sua pagina trovi il motivo. Puoi duplicarla, sistemarla e rimandarla.

---

## 5. 61976 Come usare Olivia per creare e migliorare le campagne [[come-usare-olivia-per-creare-e-migliorare-le-campagne]]

Verificato su: `CampaignSubmitModals/index.tsx:465-471`.

**Riga 67, prima:**
> Pronto a inviare la tua campagna? Una volta completato il testo, leggi [Inviare una campagna senza approvazione](…61971…) se vuoi capire come spedirla subito, oppure procedi con il flow standard e lascia che il team Unipiazza la ottimizzi per te.

**Dopo:**
> Pronto a inviare la tua campagna? Premi **Programma invio** e poi **Richiedi revisione**. Un consulente Unipiazza la controlla e la fa partire all'orario che hai scelto, come spieghiamo in [Si può inviare una campagna senza approvazione?](https://supporto.unipiazza.it/it/articles/61971-inviare-una-campagna-senza-approvazione) [[inviare-una-campagna-senza-approvazione]].

> Fuori dal mio gruppo, da passare a chi rifà 61972 (campagna WhatsApp): la riga 84 dice «All'ultimo passo l'opzione Invia subito è **ancora** disattivata». Va bene così, ma conviene togliere «ancora» e aggiungere che vale per tutte le campagne, con il link a 61971.

---

## 6. 61970 Il dettaglio della campagna inviata: statistiche e analisi [[dettaglio-campagna-inviata-statistiche-e-analisi]]

Verificato su: `app/containers/AllCampaignsPage/CampaignReportPage.tsx:337` (tooltip aperture),
`:858-863` (Condividi), `:920-960` (colonne Promo riscattata il, Visite Generate, € Spesi), `:1196-1260`
(Inviata il, tag del periodo, Duplica, Condividi solo per campagne non WhatsApp mandate a Tutti i
clienti), `:1264-1460` (riquadri: Visite generate e Incassi solo per Promo ed Evento, Incassi per
cliente e per visita), `:1471-1487` (ricerca e menu Mostra), `components/ResultsSelectionBar`
(Seleziona tutti, Aggiungi ad una lista), `app/utils/campaignPeriod.ts:104-170` (testi del periodo).

**Riquadri, prima:**
> In alto trovi 4 riquadri con i numeri principali: … **Visite generate** … (solo per campagne promo) … **Incassi**: l'incasso totale generato e l'incasso medio per visita

**Dopo:**
> In alto trovi i numeri principali.
>
> - **Destinatari**: il totale, più il dettaglio per canale (quanti via email, quanti via notifica app, quanti via messaggi RCS).
> - **Aperture**: totale e percentuale, più il dettaglio per canale.
> - **Visite generate**: quanti clienti sono passati da te dopo la campagna e, nelle Promo, quante promo sono state riscattate.
> - **Incassi**: quanto hanno speso i clienti che hanno ricevuto la campagna, in totale, per cliente e per visita. Nelle Promo contano le visite nei giorni di validità della promozione (anche se il cliente non l'ha riscattata), negli Eventi quelle nei giorni dell'evento.
>
> **Visite generate** e **Incassi** ci sono solo nelle campagne **Promo** ed **Evento**, perché hanno delle date su cui misurarli. In un **Annuncio** trovi Destinatari e Aperture.

**Nota aperture, prima:**
> ⚠️ **Nota sulle aperture WhatsApp e RCS:** il tasso di apertura mostrato potrebbe essere più basso rispetto al reale. I dati di lettura vengono restituiti solo dai clienti che hanno salvato il tuo numero in rubrica …

**Dopo:**
> ⚠️ **Le aperture possono essere meno di quelle vere**<br>Su email, WhatsApp e RCS alcune aperture non vengono rilevate, per esempio per le impostazioni privacy del cliente o perché non ha il tuo numero in rubrica. Chi ha letto senza essere rilevato risulta "non aperto".

**Nuovo paragrafo, prima di «Lista clienti coinvolti»:**
> 🏷️ **Sotto il nome della campagna** vedi quando è stata inviata e, per Promo ed Evento, a che punto è il periodo (per esempio *"Promo valida dal 3 al 5 novembre, attiva ora"* oppure *"…, finita"*). Accanto trovi **Duplica**, per creare una copia in bozza, e **Condividi**, che copia il link pubblico della campagna da mandare a chi vuoi o pubblicare sui social. **Condividi** c'è solo per le campagne inviate a **Tutti i clienti**, non per le WhatsApp.

**Lista clienti, prima:**
> Dal menù **"Mostra"** puoi cambiare la vista (es. solo Destinatari, solo Aperture) per analizzare un gruppo specifico. Puoi **selezionarli tutti in un colpo solo** e aggiungerli a una Lista Clienti o creare una campagna mirata di follow-up. Hai anche un campo di **ricerca** per trovare un cliente specifico per nome, email o numero di telefono …

**Dopo:**
> Dal menu **Mostra** scegli chi vedere: **Destinatari** (tutti), **Chi ha aperto**, **Chi non ha aperto** e, nelle Promo, **Chi ha riscattato**. Con **Seleziona tutti** e **Aggiungi ad una lista** li metti in una Lista Clienti, pronta per una campagna di follow-up. Il campo di **ricerca** trova un cliente per nome, email, telefono o nota, e per ognuno vedi apertura, promo riscattata, visite generate ed euro spesi.

**Chiusura, prima:** «…per il nuovo flow passo dopo passo. 🚀» **Dopo:** «…per tutti i passaggi. 🚀» (togliere l'inglesismo «flow»).

---

## 7. 63774 Cosa vedo nella sezione "Piano & Consumi"? [[cosa-vedo-nella-sezione-piano-e-consumi]]

Verificato su: `app/containers/Invoices/PlanSection.tsx:20-28` (48 campagne, 150 con Chiosco Plus),
`:66-71` («si rinnovano ogni anno, il …»), `:430-545` (le tre barre, colori dall'80%), `:560-650`
(funzionalità e dati di fatturazione), `BillingInfoDialog.tsx:96-140` (Intestazione, Partita IVA e
Sede legale bloccate; si cambiano Codice destinatario, 7 caratteri, e PEC),
`RequestCardsDialog.tsx:404-720` e `pricing.constants.ts` (ricarica tessere e passaggio a Chiosco
Plus, non proposto a Plus ed Elite); backend `unipiazza-api` `app/api_partner/v1/controllers/shop.js:129-137, 646-665`
(contano le campagne Marketing **inviate** dall'ultimo anniversario del contratto, le WhatsApp no).

**Consumi, punto Campagne, prima:**
> 📣 **Campagne marketing:** le campagne che hai già inviato rispetto a quelle incluse nell'anno

**Dopo:**
> 📣 **Campagne marketing:** le campagne che hai già inviato rispetto a quelle incluse nel tuo anno di contratto (48, oppure 150 con Chiosco Plus), con la data in cui il conto riparte. Contano solo le campagne email, notifica e RCS già inviate, non le bozze e non le campagne WhatsApp, che si pagano a messaggio. Quando arrivi al limite non puoi inviarne altre fino al rinnovo, quindi tieni d'occhio la barra, che diventa arancione all'80% e rossa quando sei al massimo.

**Consumi, frase sulle tessere, prima:**
> Hai finito le Tessere Fedeltà? Premi su **"Richiedi un nuovo pacco"** sotto la barra. È proprio da qui che si richiedono le Tessere Fedeltà standard. …

**Dopo:**
> Hai finito le Tessere Fedeltà? Premi **Richiedi un nuovo pacco** sotto la barra. Puoi ricaricare solo le tessere, con un pacco una tantum a 0,40€ + IVA a tessera, che arriva entro 48 ore con una fattura a parte. Se hai un piano più piccolo di Chiosco Plus ti proponiamo anche di passare a **Chiosco Plus**, che include 600 Tessere Fedeltà all'anno e 150 campagne. Prima di confermare vedi il nuovo canone e da quando parte. Sotto la barra trovi anche il link **Ti servono tessere personalizzate col tuo logo?**. Tutti i dettagli sono in [Ho finito le tessere, come posso richiederne delle altre?](https://supporto.unipiazza.it/it/articles/4366-ho-finito-le-tessere-come-posso-richiederne-delle-altre) [[ho-finito-le-tessere-come-posso-richiederne-delle-altre]]

> Prezzi presi da `pricing.constants.ts` (scritti fissi nel gestionale, «not driven by the backend yet»). Se Dodo preferisce non mettere cifre nella KB, si toglie «a 0,40€ + IVA a tessera». Il canone di Chiosco Plus (69€ + IVA per 12 mesi, poi 79€) l'ho lasciato fuori di proposito.

**Funzionalità, prima:**
> Un elenco chiaro di tutto quello che è incluso nel tuo piano: Autopromo, Booster Vendite, Abbonamenti Prepagati, Wallet & GiftCard, eShop, Olivia AI, Campagne WhatsApp... e molto altro a seconda del piano sottoscritto.

**Dopo:**
> L'elenco di quello che è incluso nel tuo piano, per esempio Booster Vendite, Abbonamenti Prepagati, Wallet & GiftCard, Olivia AI e Campagne WhatsApp. Cosa vedi dipende dal piano che hai sottoscritto.
>
> Nota interna, da non pubblicare. Il gestionale mostra ancora la voce «Autopromo», che oggi si chiama Automazioni, ed è il refuso già segnalato nella review (sezione 3). Per questo nell'elenco d'esempio non la cito.

**Dati di fatturazione, prima:**
> … intestazione, partita IVA, sede legale, codice destinatario e PEC. Se qualcosa non è giusto, o manca il codice destinatario, premi su **Modifica** e correggilo.

**Dopo:**
> … intestazione, partita IVA, sede legale, codice destinatario e PEC. Con **Modifica** cambi il **Codice destinatario** (7 caratteri) e la **PEC**, cioè dove ti arrivano le fatture elettroniche. Puoi inserirne uno, l'altro o tutti e due. Intestazione, partita IVA e sede legale invece non si cambiano da qui. Se sono sbagliate scrivici e le correggiamo noi.

---

## 8. Voci della sezione 2 #18 sulle campagne

Dove sono finite, tutte verificate sopra:

- 🔗 **«Condividi» campagna (link pubblico)**: in 61970 (paragrafo «Sotto il nome della campagna»). Il link è `unipiazza.it/campagne/<id>/<vetrina>` (`AllCampaignsPage.tsx:473-488`). Nel menu ⋮ di **Le tue campagne** c'è anche lì, per le campagne inviate a Tutti i clienti (`AllCampaignsPage.tsx:575-595`). Se si vuole, una riga anche in 70971, sezione «Duplicare o eliminare una campagna»:
  > 🔗 **Condividi**: copia il link pubblico di una campagna inviata, da mandare o pubblicare sui social. C'è solo per le campagne mandate a **Tutti i clienti** e non per le WhatsApp.
- 🏷️ **Etichette «Promo già finita il…»**: in 70971, nuovo punto in «Dove si trova la tua campagna», dopo il box 💡 (`utils/campaignPeriod.ts:116-133`):
  > ⚠️ Sotto le campagne Promo ed Evento vedi anche le loro date. Se la campagna non è ancora partita e i giorni della promo o dell'evento sono già passati, l'etichetta diventa arancione, per esempio *"Promo già finita il 12 nov"*. A quel punto nessuno può più usarla, quindi riportala in bozza e cambia le date.
- 💾 **Bozze create in automatico**: in 27450 passo 2 («Premi **Inizia** e la campagna è già salvata tra le bozze. Da qui in poi ogni modifica si salva da sola»), `CreateCampaignPage.tsx:320-330` e `syncDraft*` in `CreateMarketingCampaignPage.tsx`.
- 🏪 **Mittente unico nelle campagne di catena**: in 27450 passo 3, punto Mittente (`CreateMarketingCampaignPage.tsx:1552-1556`).

---

## Domande per Lorenzo (gruppo C)

1. **Limite campagne raggiunto.** Nel gestionale non c'è nessun blocco né avviso quando si arriva a 48 (o 150): `PlanSection.tsx` mostra solo la barra rossa e il flusso di invio non controlla il numero. Chi lo fa rispettare, il team in revisione o il backend? E cosa vede il cliente quando prova a mandarne un'altra?
2. **«Campagne illimitate» nel passaggio a Chiosco Plus.** `RequestCardsDialog.tsx:512` e `:596` promettono «Campagne marketing illimitate» e «Campagne illimitate», ma `PlanSection.tsx:20` dà 150 a Chiosco Plus. Va corretto il testo della finestra?
3. **Campagna programmata e revisione in ritardo.** Se una campagna Marketing è programmata per un orario in cui il team non lavora (per esempio sabato mattina) e nessuno l'ha ancora approvata, cosa succede? Parte dopo l'approvazione, passa a «Scaduta» o resta ferma? Nel riepilogo (`summaryModel.ts`) il caso «Non è partita» vale solo per le campagne già approvate.
4. **Invia test.** Oltre a ignorare l'interruttore Mappa (bug già in review), il test chiede l'oggetto anche se l'invio vero non lo chiede (`CreateMarketingCampaignPage.tsx:1145-1147`), e manda solo l'email. Voluto?
