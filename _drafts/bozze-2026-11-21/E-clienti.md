# Lotto Clienti: filtri, liste, etichette, QrCode, compleanni, storico (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Verificate sul codice del
gestionale (`unipiazza-web-partner-v2`, `master` al commit `2146b46` del 20/11/2026), sul backend
`unipiazza-api` (letto con `gh api`) e su MongoDB in sola lettura (collezione `categories`).
Righe della review coperte: sezione 1 #5, #6, #13 e sezione 2 #7, #10, #11, #18 (Ripristina liste
preimpostate).

---

## 1. 61967 Filtra Clienti: come segmentare e analizzare i tuoi clienti [[filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti]]

Verificato su: `app/containers/CustomersPage/CustomerFiltersModal.tsx:451-470` (azioni campagna e
canali), `:1066-1094` (titolo, sottotitolo «tutte le condizioni», bottone «Mostra N clienti»),
`:1096-1116` («Cancella filtri»), `:1121-1150` («Hai scelto», avviso liste preimpostate),
`:1160-1530` (sezioni e campi); `app/containers/CustomersPage/CustomersPage.tsx:1405-1424` (bottone
«Filtra clienti» solo da computer, `!isMobile`).

Si rifanno «Come si usa» e «Tutti i filtri disponibili». Il pannello vecchio (cursore «Euro totali
spesi», gruppo «Interazioni», «Dati personali») non c'è più. Il blocco «Contattabile e Consenso
marketing» e la chiusura restano, con i nomi nuovi.

**Come si usa, dopo:**

> ## Come si usa
>
> **1. Apri Lista clienti**<br>Dal computer, entra nel Gestionale e vai in **Clienti** › **Lista clienti**. Dal telefono il bottone dei filtri non c'è.
>
> **2. Premi Filtra clienti**<br>Lo trovi in alto, accanto a **Inquadra QrCode**. Si apre il pannello **Filtra clienti**, diviso in quattro sezioni.
>
> **3. Scegli i filtri**<br>I filtri valgono tutti insieme, quindi più ne aggiungi e più il gruppo si stringe. Quelli che hai scelto compaiono in alto sotto **Hai scelto**. Premi su uno per tornare al campo, oppure sulla x per toglierlo.
>
> **4. Premi Mostra clienti**<br>Il bottone in basso ti dice già quanti sono, per esempio **Mostra 128 clienti**. Se scrive **Nessun cliente con questi filtri**, togline qualcuno. Con **Cancella filtri** riparti da zero.
>
> Nella lista compare il bottone **Salva lista**, per tenere il gruppo a portata di mano e usarlo nelle campagne, come spieghiamo in [Come creare e gestire le Liste Clienti](https://supporto.unipiazza.it/it/articles/61968-come-creare-e-gestire-le-liste-clienti) [[come-creare-e-gestire-le-liste-clienti]].
>
> 💡 **Hai selezionato una lista preimpostata?**<br>Se apri i filtri con Nuovi, Vip, Inattivi o un'altra lista preimpostata, vedi i criteri della lista ma non li puoi togliere. Per cambiarli si passa dalle Impostazioni, come spieghiamo in [Cosa sono le etichette clienti "Nuovi", "Vip", "Ti seguono" e "Inattivi"?](https://supporto.unipiazza.it/it/articles/27444-cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi) [[cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi]].

**Tutti i filtri disponibili, dopo** (lo screenshot `61967_FiltraClienti-Pannello.jpg` mostra il
pannello vecchio, va rifatto o tolto):

> ## Tutti i filtri disponibili
>
> **🔁 Visite e fedeltà**
> - **Ultima visita**: più di o meno di un certo numero di giorni, settimane o mesi fa
> - **Visite effettuate**: minimo e massimo
> - **Spesa totale**: minimo e massimo in euro
> - **Gettoni disponibili**: minimo e massimo
> - **Premi ritirati**: minimo e massimo
> - **Wallet attivo**: Sì / No
> - **Ha ritirato il premio**: scegli un premio della tua lista
>
> **📱 Contatti e consensi**
> - **Consenso marketing**: Sì / No
> - **Telefono inserito**: Sì / No
> - **Email inserita**: Sì / No
> - **Ha l'App**: Sì / No
> - **Canale di contatto**: Contattabili o Non contattabili tramite Email o RCS, Email, RCS o WhatsApp. Con **Non contattabili** la prima voce diventa **Email e RCS**, e trova i clienti che non puoi raggiungere su nessuno dei due
>
> **👤 Profilo**
> - **Genere**: Uomo / Donna / Altro
> - **Compleanno**: Inserito, Nei prossimi 7 giorni oppure Scegli le date (dal giorno al giorno)
> - **Età**: minimo e massimo
> - **Data di iscrizione**: dal giorno al giorno, con il calendario
> - **Nota del cliente**: cerca una parola nelle note
>
> **📣 Campagne**
> - **Campagna**: ha ricevuto, non ha ricevuto, ha letto o non ha letto una campagna che hai inviato
> - **Promozione**: le stesse scelte, per le campagne inviate con una promozione

**Contattabile e Consenso marketing, prima:**
> I due filtri non si influenzano a vicenda. **Contattabile** ti dice se abbiamo un canale per raggiungere il cliente [...] Seleziona **Non Contattabile** tramite **Email e RCS**, **Telefono inserito** su Sì e, se serve, **Consenso marketing**.

**Dopo** (cambiano solo i nomi):
> I due filtri non si influenzano a vicenda. **Canale di contatto** ti dice se abbiamo un modo per raggiungere il cliente, per esempio un'email valida, e non guarda i consensi. Per quelli c'è **Consenso marketing**. Se ti servono i clienti a cui puoi mandare una promozione, usali insieme.
>
> 💬 **Vuoi scrivere su WhatsApp a chi non è raggiungibile in altro modo?**<br>In **Canale di contatto** scegli **Non contattabili** tramite **Email e RCS**, poi metti **Telefono inserito** su Sì e, se serve, **Consenso marketing**.

Il riquadro «I destinatari sono meno dei clienti filtrati?» e la chiusura restano uguali.

---

## 2. 61969 15 idee per segmentare i tuoi clienti con i Filtri [[15-idee-per-segmentare-i-clienti-con-i-filtri]]

Verificato su: stessi file del 61967. Il sottotitolo del pannello dice «Vedi solo i clienti che
rispettano tutte le condizioni scelte» (`CustomerFiltersModal.tsx:1091`), quindi una ricetta con
«oppure» non si può fare.

**Introduzione, aggiunta in fondo al secondo paragrafo:**
> I filtri che scegli valgono tutti insieme. Quando in una ricetta trovi «in alternativa», vuol dire che puoi scegliere l'uno o l'altro, non metterli tutti e due.

**Nomi dei filtri da aggiornare in tutte le ricette:**
- «Euro totali spesi» → **Spesa totale** (ricette 🏆, 🚨, 📈, 💎)
- «Ultima visita > 60/90 giorni» → **Ultima visita più di 60 o 90 giorni fa** (🔄), «Ultima visita > 90 giorni» → **Ultima visita più di 90 giorni fa** (🚨)
- «Data iscrizione ultimi 30 giorni» → **Data di iscrizione dal giorno di un mese fa a oggi** (🌱)
- «Compleanno = prossima settimana» → **Compleanno nei prossimi 7 giorni** (🎂)

**🏆 Trovare i clienti più fedeli, Cosa fare, prima:**
> crea una lista VIP e riservale comunicazioni dedicate, premi esclusivi o un semplice ringraziamento

**Dopo:**
> salva il gruppo come lista e riservagli comunicazioni dedicate, premi esclusivi o un semplice ringraziamento. Se ti basta la lista **Vip** preimpostata, la trovi già pronta nel menu a tendina.

**📱 Clienti attivi senza app, Filtri, prima:**
> Ha l'app = No + Visite effettuate > X (oppure Gettoni disponibili > X)

**Dopo:**
> Ha l'App = No + Visite effettuate almeno X (in alternativa Gettoni disponibili almeno X)

**📣 Quanti clienti puoi davvero raggiungere?, Filtri, prima:**
> Consenso marketing = Sì + Telefono inserito = Sì (oppure Email inserita = Sì)

**Dopo:**
> Consenso marketing = Sì + Canale di contatto = Contattabili tramite Email o RCS

**📝 Profili da completare, prima:**
> **Filtri**: Email inserita = No oppure Telefono inserito = No oppure Consenso marketing = No

**Dopo:**
> **Filtri**: Canale di contatto = Non contattabili tramite Email e RCS<br>
> **Cosa scopri**: i clienti che oggi non puoi raggiungere né per email né con un messaggio RCS<br>
> **Cosa fare**: forma il team a chiedere email o numero alla prossima visita. Vuoi chi ha i contatti ma non il consenso? Fai una seconda ricerca con Consenso marketing = No.

**👥 Clienti per genere o fascia d'età, Filtri, prima:**
> Genere = Uomo / Donna / Altro oppure Età min/max

**Dopo:**
> Genere = Uomo / Donna / Altro (in alternativa, o insieme, Età minima e massima)

**📬 Chi ha ricevuto una campagna specifica?, prima:**
> **Filtri**: Interazioni → Ha ricevuto → [Nome campagna]<br>... **Cosa fare**: analizza la copertura oppure crea un follow-up per chi non ha risposto

**Dopo:**
> **Filtri**: Campagna = Ha ricevuto + [Nome campagna]<br>
> **Cosa scopri**: chi è stato raggiunto da una campagna in particolare<br>
> **Cosa fare**: analizza la copertura. Per ricontattare chi non l'ha aperta, scegli **Non ha letto** al posto di **Ha ricevuto**.

**💳 Clienti con Wallet da attivare, Cosa fare:** correggere il refuso «proponimi» → **proponigli**.

---

## 3. 61968 Come creare e gestire le Liste Clienti [[come-creare-e-gestire-le-liste-clienti]]

Verificato su: backend `app/utils/user_lists/default_lists.ts:55-130` (liste preimpostate Ti
seguono, Inattivi, Nuovi, Vip, Importati senza visite, Archiviati, niente «Con App»);
`CustomersPage.tsx:1338-1404` («Salva lista», «Elimina lista» solo per le liste non preimpostate);
`app/components/SaveListModal/SaveListModal.tsx:137-332` (titoli «Salva Lista» / «Aggiorna lista» /
«Aggiungi selezionati ad una lista», «Sovrascrivi lista esistente», «Nuova lista», bottoni
«Sovrascrivi lista» / «Crea nuova lista» / «Aggiungi alla lista» / «Crea lista»);
`app/components/ResultsSelectionBar/ResultsSelectionBar.tsx:20-60`; liste usate in
`CampaignReportPage.tsx:1496`, `AutomationHistoryPage.tsx:756`, `PrizesPage/PrizesPage.tsx:91-100`
(colonna «Clienti»), `Boosters/BoosterForm.tsx:580` («Clienti a cui è rivolto il Booster»).

**Primo paragrafo, prima:**
> Fino a oggi potevi contare solo sulle liste preimpostate (Nuovi, Vip, Ti seguono, Inattivi, Con App, Importati senza visite...).

**Dopo:**
> Fino a oggi potevi contare solo sulle liste preimpostate (Nuovi, Vip, Ti seguono, Inattivi, Importati senza visite e Archiviati).

**Secondo paragrafo, prima:**
> ...direttamente dalle Impostazioni del gestionale: scopri come nell'articolo [...]

**Dopo:**
> E puoi anche **modificare i criteri delle liste preimpostate** Nuovi, Vip, Inattivi e Archiviati dalle Impostazioni del Gestionale, nella card **Liste preimpostate**. Ti spieghiamo come in [Cosa sono le etichette clienti "Nuovi", "Vip", "Ti seguono" e "Inattivi"?](https://supporto.unipiazza.it/it/articles/27444-cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi) [[cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi]].

**Dove si usano, prima:**
> Le liste si usano in due posti: nel menù a tendina della sezione **Lista Clienti** (per analizzare il gruppo) e nello step **Destinatari** quando crei una campagna (per mandare messaggi solo a quel gruppo). Puoi anche aggiungere o rimuovere un cliente da una lista direttamente dal suo profilo.

**Dopo:**
> Le liste le ritrovi in quattro posti.
>
> 📋 **In Lista clienti**<br>Dal menu a tendina accanto alla ricerca, per guardare solo quel gruppo.
>
> 📣 **Nelle campagne**<br>Nel passaggio **Destinatari**, per mandare una campagna solo a quel gruppo.
>
> 🎁 **Nei Premi**<br>Nella colonna **Clienti** della Lista Premi, per riservare un premio a una o più liste.
>
> 🚀 **Nei Booster**<br>Nel riquadro **Clienti a cui è rivolto il Booster**, per proporre il Booster solo a una lista.
>
> Puoi anche aggiungere o togliere un cliente da una lista direttamente dal suo profilo, da **Modifica** nel riquadro **Liste**.

**Come creare una lista automatica, passi 3 e 4, prima:**
> **3. Premi "Mostra Clienti"** Chiude il pannello e mostra i risultati filtrati nella lista.
> **4. Premi "Salva Lista"** Il bottone compare a sinistra di "Filtra clienti". Dai un nome alla lista e premi **Salva Lista**.

**Dopo:**
> **3. Premi Mostra clienti**<br>Il bottone ti dice già quanti clienti hai trovato. Il pannello si chiude e vedi i risultati nella lista.
>
> **4. Premi Salva lista**<br>Il bottone compare accanto alla barra di ricerca. Nella finestra **Salva Lista** scrivi il nome e premi di nuovo **Salva Lista**.

La frase dopo lo screenshot resta uguale.

**Vuoi aggiornare i filtri di una lista già esistente?, prima:**
> 1. Seleziona la lista [...] 5. Premi **"Aggiorna lista"** (compare a sinistra, al posto di "Salva Lista")

**Dopo:**
> **1. Seleziona la lista**<br>Sceglila dal menu a tendina in Lista clienti.
>
> **2. Cambia i filtri**<br>Premi **Filtra clienti**, imposta i nuovi valori e premi **Mostra clienti**.
>
> **3. Premi Salva lista**<br>Si apre la finestra **Aggiorna lista**, con la tua lista già scelta sotto **Sovrascrivi lista esistente**. Premi **Sovrascrivi lista** e la lista prende i filtri nuovi. Se preferisci tenere anche quella vecchia, scrivi un nome sotto **Nuova lista** e premi **Crea nuova lista**.

**Come creare una lista manuale, passi 1-4, dopo:**
> **1. Parti da dove si trovano i tuoi clienti**<br>Da **Lista clienti**, dal dettaglio di una campagna inviata oppure dai risultati di un'Automazione.
>
> **2. Spunta i clienti**<br>Metti la spunta nella casella accanto a ogni cliente che vuoi nella lista.
>
> **3. Premi Aggiungi ad una lista**<br>Il bottone blu compare sopra la tabella, accanto a **Deseleziona**, appena selezioni almeno un cliente.
>
> **4. Scegli la lista e salva**<br>Nella finestra **Aggiungi selezionati ad una lista** scegli una lista che hai già e premi **Aggiungi alla lista**, oppure scrivi un nome sotto **Nuova lista** e premi **Crea lista**.
>
> Le liste manuali non si aggiornano da sole. Per aggiungere altri clienti ripeti gli stessi passaggi e scegli la lista che hai già.

**Nuova sezione, prima di «Qualche idea su come usarle»:**
> ## Come eliminare una lista
>
> Seleziona la lista dal menu a tendina in Lista clienti e premi il bottone rosso **Elimina lista**, poi conferma con **Elimina**. I clienti restano nel Gestionale, sparisce solo il gruppo. Le liste preimpostate non si eliminano, al massimo le riporti ai valori di partenza dalle Impostazioni.

**Qualche idea, Follow-up da campagna, prima:**
> dopo aver inviato una campagna, seleziona chi non ha aperto il messaggio e crea una lista per ricontattarli

Resta uguale (si fa dal dettaglio campagna).

---

## 4. 27444 Cosa sono le Etichette Clienti: Nuovi, Vip, Ti seguono e Inattivi [[cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi]]

Verificato su: backend `app/utils/user_lists/constants.ts:20-27` (default generali Nuovi 30,
Inattivi 90, Vip 5 visite in 150 giorni o 300€, Archiviati 730) e `default_lists.ts:24-130`; backend
`app/models/category.ts:51-90` (valori per categoria); MongoDB `categories.user_list_defaults` al
21/11/2026 (Nuovi da 10 a 40 giorni, Inattivi da 45 a 225, Vip da 3 visite in 90 giorni a 44 in 180,
23 categorie su 58 con 30/90/5 in 150; nessuna categoria cambia gli Archiviati); docs backend
`docs/user_lists_settings_api_contract.md:15-16` («Ripristina» torna ai valori di categoria);
gestionale `app/containers/SettingsPage/PresetListsBox.tsx:500-800` (card «Liste preimpostate»,
«Modifica liste», frasi per ogni lista, «Ripristina», «Ripristina tutti», «Confermi le modifiche?»,
vincolo Inattivi e A rischio); `CustomersPage.tsx:1385` (ricerca per nome, email, telefono o nota).

**Elenco, prima (Nuovi, Vip, Inattivi, Archiviati):**
> - **Nuovi**: [...] La soglia di default è di 30 giorni, ma è tarata sul tuo settore e la puoi personalizzare.
> - **Vip**: [...] Di default sono chi ha fatto almeno 5 visite negli ultimi 5 mesi, ma anche questa soglia è tarata sul tuo settore e la puoi personalizzare.
> - **Inattivi:** [...] Anche qui la soglia di default (90 giorni) dipende dal settore ed è personalizzabile.
> - **Archiviati:** [...] (di norma un paio d'anni).

**Dopo:**
> - **Nuovi**: i clienti che ti hanno visitato per la prima volta di recente. Per molte attività vuol dire negli ultimi 30 giorni, ma il periodo cambia con il settore e lo puoi personalizzare.
> - **Vip**: i clienti più fedeli. Un cliente diventa Vip se in un certo periodo ti ha visitato almeno un certo numero di volte, oppure ha speso almeno una certa cifra. Per molte attività il punto di partenza è 5 visite negli ultimi 150 giorni, ma cambia molto con il settore (dove i clienti tornano tutti i giorni ne servono molte di più) e lo puoi personalizzare.
> - **Inattivi:** quelli che, per una ragione o l'altra, non visitano il tuo locale da un po'. Per molte attività la soglia è di 90 giorni, ma anche questa dipende dal settore ed è personalizzabile.
> - **Archiviati:** I clienti ormai "freddi", che non ti visitano e non leggono le tue comunicazioni da più di 730 giorni (circa due anni). Questa lista compare nel menù a tendina della sezione Clienti solo se hai dei clienti archiviati.

**Ricerche Personalizzate, prima:**
> Cerca facilmente tra i tuoi clienti tramite nome, cognome, indirizzo email o le note personalizzate che hai assegnato.

**Dopo:**
> Cerca facilmente tra i tuoi clienti per nome, cognome, indirizzo email, numero di telefono o le note che hai scritto.

**Sezione finale «Liste preimpostate: valori tarati sul tuo settore», dopo** (sostituisce tutta la
sezione, compreso l'avviso ⚠️ che resta in fondo):

> **Liste preimpostate: valori tarati sul tuo settore**
>
> Un bar, una gelateria e un parrucchiere hanno ritmi di visita molto diversi. Per questo le soglie di Nuovi, Vip e Inattivi partono da valori **tarati sul settore della tua attività**, calcolati sui dati reali dei locali simili al tuo. Così parti già da numeri sensati, senza doverli impostare da zero.
>
> 🔍 **Dove vedi i criteri del tuo locale**<br>Vai in [Impostazioni](https://partner.unipiazza.it/impostazioni), trova la card **Liste preimpostate** e premi **Modifica liste**. Per ogni lista trovi una frase con i numeri che usa oggi il tuo locale, per esempio «Un cliente che ti ha visitato per la prima volta negli ultimi 30 giorni». Se hai più punti vendita, prima selezionane uno dal menu in alto. Te li ritrovi anche in Lista clienti, se scegli la lista dal menu a tendina e apri **Filtra clienti**.
>
> ✏️ **Come li cambi**<br>Nella stessa finestra cambi i numeri di **Nuovi**, **Vip**, **Inattivi** e **Archiviati** (la lista **Ti seguono** resta fissa). Per i Vip scegli anche se contano le visite (**ti ha visitato**) o la spesa (**ha speso**). Premi **Salva** e conferma. Le modifiche possono richiedere qualche minuto prima di vedersi nei dati dei clienti.
>
> ↩️ **Vuoi tornare ai valori di partenza?**<br>Sotto ogni lista c'è **Ripristina**, che la riporta ai valori del tuo settore. Con **Ripristina tutti**, in basso a sinistra, le riporti tutte insieme.
>
> 😴 **Inattivi e Automazioni**<br>La soglia degli Inattivi deve restare più alta di quella dell'Automazione **A rischio**. Se provi a scendere sotto, il Gestionale te lo dice e ti chiede di cambiare prima l'Automazione. La lista Inattivi decide anche chi riceve l'Automazione **Dormienti**.
>
> ⚠️ Ricorda: cambiando questi criteri cambia anche chi rientra in ciascuna lista e, di conseguenza, quali clienti raggiungono le tue Automazioni e le tue campagne.

Lo screenshot in cima (`27444_ListaClienti-Etichette.jpg`) va bene.

---

## 5. NUOVO Come trovare o iscrivere un cliente con Inquadra QrCode

Verificato su: `app/containers/CustomersPage/QrScannerPage.tsx:17` (accetta solo i codici
`go.unipiazza.it/`), `:179-243` (ricerca della Tessera e tre esiti), `:325-388` («Inquadra
QrCode», «Posiziona il QrCode nel riquadro», «Ricerca cliente...», «Ruota fotocamera»);
`app/containers/ScanNewCustomerPage/ScanNewCustomerPage.tsx:14-51` (pagina «Nuovo cliente», codice
Tessera già compilato); `app/containers/CustomersPage/RegisterCustomerForm.tsx:150-332` (campi
obbligatori, benvenuto, consenso, errori); backend `app/api_partner/v1/controllers/search.js:33-147`
e `templates/search/user.js:68-75` (cerca la Tessera, visite contate nel tuo locale);
`CustomersPage.tsx:1240-1272` («Scarica lista» e «Aggiungi cliente» solo da computer) e
`:1396-1404` («Inquadra QrCode» anche da telefono).

```yaml
collection_id: 7180
collection: "👨‍👩‍👧‍👦 Clienti"
title: "Come trovare o iscrivere un cliente con Inquadra QrCode"
slug: come-trovare-o-iscrivere-un-cliente-con-inquadra-qrcode
description: "Il cliente ti mostra la Tessera Fedeltà, tu la inquadri con il telefono e in un attimo apri il suo profilo o lo iscrivi."
status: published
written_by: 2961
keywords:
  - inquadra qrcode
  - qr code
  - scansione
  - tessera fedeltà
  - iscrivere un cliente
  - cercare un cliente
  - telefono
  - fotocamera
locale: it
```

Hai il Gestionale aperto sul telefono e davanti un cliente con la sua Tessera Fedeltà in mano? Non serve cercarlo per nome. Con **Inquadra QrCode** punti la fotocamera sulla Tessera e il Gestionale ti porta dritto al suo profilo, oppure ti fa iscrivere il cliente in un minuto. 📷

## Come si usa

**1. Apri Lista clienti**<br>Vai in **Clienti** › **Lista clienti**. Funziona dal telefono e anche dal computer, se ha una fotocamera.

**2. Premi Inquadra QrCode**<br>Lo trovi accanto alla barra di ricerca. La prima volta il browser ti chiede il permesso di usare la fotocamera, e va dato.

**3. Inquadra il QrCode della Tessera**<br>Tieni il QrCode della Tessera Fedeltà dentro il riquadro. Quando lo legge vedi **Ricerca cliente...** e dopo un attimo si apre la pagina giusta. Se il telefono usa la fotocamera sbagliata, premi **Ruota fotocamera**.

## Cosa succede dopo la scansione

👤 **Il cliente è già passato da te**<br>Si apre il suo profilo. Da lì accrediti gettoni, scarichi un premio o controlli il Wallet, come spieghiamo in [Cosa posso fare dal profilo cliente?](https://supporto.unipiazza.it/it/articles/28262-cosa-posso-fare-dal-profilo-cliente) [[cosa-posso-fare-dal-profilo-cliente]].

🙋 **Il cliente usa Unipiazza ma da te non ha ancora visite**<br>Si apre la pagina **Nuovo cliente** con i suoi dati già compilati. Controllali, spunta il consenso e premi **Aggiungi cliente** per iscriverlo al tuo programma fedeltà.

🆕 **La Tessera è nuova**<br>Si apre la pagina **Nuovo cliente** con il codice della Tessera già inserito. Scrivi nome e cognome, poi l'email o il numero di telefono (basta uno dei due). Compleanno e note sono facoltativi.

Prima di premere **Aggiungi cliente** ricordati due cose.

1. **Il messaggio di benvenuto**<br>L'interruttore **Invia l'email o il messaggio RCS di benvenuto** è acceso. Se non vuoi mandarlo, spegnilo.
2. **Il consenso**<br>Spunta la casella con cui confermi che il cliente ti ha dato il consenso per iscriversi e ricevere le tue promozioni. Senza la spunta il bottone resta grigio.

Fatto! Il Gestionale ti porta sul profilo del cliente appena iscritto.

## Se qualcosa non va

📵 **La fotocamera non parte**<br>Controlla di aver dato al browser il permesso di usare la fotocamera, poi chiudi e riapri **Inquadra QrCode**.

🔁 **Non succede niente mentre inquadri**<br>Il Gestionale legge solo i QrCode delle Tessere Fedeltà Unipiazza. Gli altri codici li ignora e continua a cercare. Avvicina la Tessera e tienila ferma nel riquadro.

⚠️ **Email, telefono o Tessera già usati**<br>Se l'email è già di un altro cliente, il Gestionale ti mostra il suo nome e puoi aprire il suo profilo. Se a dirti che è già usato è il numero di telefono o la Tessera, controlla i dati. Se il cliente ha due profili, scrivici e li uniamo noi, come spieghiamo in [Un mio cliente ha due profili, come posso fare per unirli?](https://supporto.unipiazza.it/it/articles/41598-un-mio-cliente-ha-due-profili-come-posso-fare-per-accorparli) [[un-mio-cliente-ha-due-profili-come-posso-fare-per-accorparli]].

💡 **Dal telefono è il modo per iscrivere un cliente**<br>Il bottone **Aggiungi cliente** c'è solo dal computer. Dal telefono un cliente nuovo lo iscrivi inquadrando la sua Tessera. Tutti gli altri modi per far iscrivere i clienti li trovi in [Come si possono iscrivere i miei clienti?](https://supporto.unipiazza.it/it/articles/28260-come-si-possono-iscrivere-i-miei-clienti) [[come-si-possono-iscrivere-i-miei-clienti]].

Hai un dubbio? Scrivici su WhatsApp al **388 8665987**, siamo qui per aiutarti!

---

## 6. 65570 Come attivare il Compleanno all'iscrizione [[come-attivare-compleanno-all-iscrizione]]

Verificato su: `app/components/Drawer/index.tsx:451-453` (menu Clienti › Compleanni);
`app/containers/BirthdayCalendar/BirthdayCalendar.tsx:135-184` (vista Mese o Anno scelta in base al
numero di compleanni, selettore nascosto oltre 100), `:226-248` (selettore Mese/Anno), `:264-310`
(colonne Compleanno, Cliente, Età, «Può ricevere promo?» con il tooltip sui consensi), `:316-370`
(«Compleanni clienti», tabella «Compleanni in arrivo» solo da computer, riga che apre il profilo);
`app/containers/BirthdayCalendar/components.tsx:92-120`.

Scelgo una sezione in 65570 invece di un articolo nuovo, perché la pagina è piccola e chi cerca i
compleanni arriva già qui.

**Nuova sezione, prima del «Nota bene» finale:**

> **Dove vedi i compleanni dei tuoi clienti**
>
> Nel menu **Clienti** trovi la pagina **Compleanni**. In alto c'è il calendario con i compleanni dei tuoi clienti, che puoi guardare mese per mese oppure tutto l'anno insieme. Dal computer, sotto il calendario, trovi anche la tabella **Compleanni in arrivo**, a partire da oggi, con data, nome ed età del cliente. Premi su un cliente per aprire il suo profilo.
>
> 🎁 **Può ricevere promo?**<br>Accanto a ogni cliente vedi ✅ o ❌. Con ✅ il cliente ha i consensi marketing attivi e riceve la promo di compleanno per email, notifica push o RCS. Con ❌ la promo non gli arriva, ma la vede comunque sul Chiosco e nell'App.
>
> ✍️ **Manca la data?**<br>Se il cliente te la dice a voce, la inserisci tu dal suo profilo con **🎂 Inserisci Compleanno**, come spieghiamo in [Cosa posso fare dal profilo cliente?](https://supporto.unipiazza.it/it/articles/28262-cosa-posso-fare-dal-profilo-cliente) [[cosa-posso-fare-dal-profilo-cliente]].

(Il rimando a 28262 dipende dalla correzione del lotto 1 su 🎂 Inserisci Compleanno.)

---

## 7. 27445 Cosa vedo nella sezione Storico Azioni? [[cosa-vedo-nella-sezione-storico-azioni]]

Verificato su: `app/containers/CustomersPage/ActionHistory.tsx:365-397` (finestra «Scarica storico
azioni», email all'utente collegato, «storico completo», nessun periodo passato all'export),
`:405-430` (periodi Oggi, Ieri, 7, 30, 365 giorni, Dall'inizio, Scegli periodo; bottone «Scarica
dati» nascosto per il pacchetto Digital), `:488-516` (menu Mostra);
`app/containers/CustomersPage/DownloadDataModal.tsx:69-120` (Excel o CSV, «Lista inviata via
email!»).

**Elenco dei periodi, prima:**
> - Ultimi 7 giorni
> - Ultimi 30 giorni
> - Ultimi 365 giorni
> - Dall'inizio (da quando hai iniziato a usare Unipiazza)
> - Scegli periodo: Scegli tu la data di inizio e di fine del periodo

**Dopo:**
> - Oggi
> - Ieri
> - Ultimi 7 giorni
> - Ultimi 30 giorni
> - Ultimi 365 giorni
> - Dall'inizio (da quando hai iniziato a usare Unipiazza)
> - Scegli periodo (scegli tu la data di inizio e quella di fine)

**Nuovo paragrafo, dopo l'elenco dei periodi:**
> 🔎 **Vuoi vedere un tipo di azione alla volta?**<br>Dal menu **Mostra** scegli per esempio **Raccolta gettoni**, **Premio ritirato**, **Promo ritirata**, **Nuove iscrizioni**, **Booster**, **Ricariche Wallet** o **GiftCard**. Con **Tutte le azioni** torni a vedere tutto.
>
> 📥 **Vuoi lo storico in un file?**<br>Premi **Scarica dati** in alto a destra e scegli Excel o CSV. Ti mandiamo il file all'email con cui entri nel Gestionale, con lo **storico completo** delle azioni dei tuoi clienti, non solo il periodo che stai guardando. Se non lo trovi, guarda anche nella posta indesiderata.

---

## 8. 40695 Come posso esportare i dati dei miei clienti? [[come-posso-esportare-i-dati-dei-miei-clienti]]

Verificato su: `CustomersPage.tsx:1038-1046` e `:1240-1258` («Scarica lista», solo da computer,
«la lista completa dei tuoi clienti»); `ActionHistory.tsx:365-430` (storico azioni);
`DownloadDataModal.tsx:69-120` (formati e conferma «Lista inviata via email!»).

**Passo 1, aggiunta in fondo:**
> Il bottone c'è dalla versione per computer del Gestionale, non dal telefono.

**Passo 3, prima:**
> Una volta selezionato il formato, il sistema invierà automaticamente il file alla tua email. Comparirà una notifica che ti confermerà l'invio.

**Dopo:**
> Appena scegli il formato ti mandiamo il file all'email con cui entri nel Gestionale, e nella finestra compare **Lista inviata via email!**. Il file contiene la lista completa dei tuoi clienti. Se non lo vedi, guarda anche nella posta indesiderata.

**Nuova sezione, prima del suggerimento finale:**
> **Ti serve anche lo storico delle azioni?**
>
> Visite, gettoni, premi, promo e ricariche si scaricano a parte. Vai in **Clienti** › **Storico azioni**, premi **Scarica dati** e scegli Excel o CSV. Anche qui il file arriva via email, con lo storico completo. Trovi cosa c'è in questa pagina in [Cosa vedo nella sezione Storico Azioni?](https://supporto.unipiazza.it/it/articles/27445-cosa-vedo-nella-sezione-storico-azioni) [[cosa-vedo-nella-sezione-storico-azioni]].

**Suggerimento finale:** il link punta al vecchio formato
`https://supporto.unipiazza.it/it/clienti/aggiungere-importare-contatti-clienti`. Va cambiato in
`https://supporto.unipiazza.it/it/articles/30306-aggiungere-importare-contatti-clienti` [[aggiungere-importare-contatti-clienti]].

**Frontmatter:** `written_by` è 45263, va portato a 2961 alla pubblicazione (default della KB).

---

## Domande per Lorenzo

1. **Il «20%» dei VIP.** Il tooltip della Lista clienti dice che i VIP «corrispondono al massimo al 20% della tua clientela». Il job `app/jobs/user_vip.ts` non applica nessun tetto, e lo script `scripts/analyze_category_user_list_defaults.js` usa `vip_target: 0.1` solo per tarare i valori di categoria. Il 20% è un limite che esiste da qualche parte o va tolto dal tooltip? Nella KB non l'ho scritto. Collegato all'issue https://github.com/unipiazza/unipiazza-web-partner-v2/issues/157.
2. **Archiviati, «o» oppure «e».** Le Impostazioni dicono «Clienti che non tornano **o** non leggono tue campagne da più di X giorni», la KB dice «non ti visitano **e** non leggono». Quale delle due fa davvero il job degli archiviati?
3. **QrCode della Tessera nel Wallet.** Inquadra QrCode accetta solo codici `go.unipiazza.it/...`. Il QrCode della Tessera Fedeltà su Apple Wallet e Google Wallet, e quello nell'App Unipiazza, hanno lo stesso formato? Se sì, aggiungo nell'articolo che si può inquadrare anche il telefono del cliente.
