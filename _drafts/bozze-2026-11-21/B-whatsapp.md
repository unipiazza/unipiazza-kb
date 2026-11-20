# Gruppo B — Campagne WhatsApp e stima costi delle Automazioni (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Verificate sul codice del
gestionale (`unipiazza-web-partner-v2`, `master` al commit `2146b46` del 20/11/2026).
Righe della review coperte: sezione 2 #2 (campagna WhatsApp passo passo) e #9 (stima costi
WhatsApp nelle Automazioni).

---

## 1. NUOVO — Come creare una campagna WhatsApp passo passo

Verificato su: `app/containers/CreateCampaignPage/components.tsx:104-110, 385-415` (card e
nome) · `app/containers/AllCampaignsPage/AllCampaignsPage.tsx:878-886` (Crea nuova campagna) ·
`app/containers/CreateWhatsappCampaignPage/CreateWhatsappCampaignPage.tsx:1227-1231, 1275,
1309-1316, 1512-1600, 1671-1806, 1853-1930, 2019-2082, 2141-2152` (passi, destinatari, costo,
orario, blocchi all'invio, Rifiutata da Meta) · `WhatsappContentEditor.tsx:112-128, 588-1170`
(editor) · `app/utils/whatsappBodyValidation.ts`, `app/utils/whatsappHeaderValidation.ts`
(regole) · `app/utils/smartCampaignAlert.ts:23-27, 116-119` (avviso promozione) ·
`app/components/CampaignPageShell/ContentSetupModal.tsx:407-437` (Da dove vuoi partire) ·
`app/components/CampaignSubmitModals/index.tsx:442-541, 650-695` (finestra di invio e conferma) ·
`app/components/Campaigns/ContentEditorShell.tsx:157` (Salva ed esci).

**Frontmatter proposto:**

```yaml
collection_id: 7182
collection: "📢 Campagne, Automazioni e Whatsapp"
title: "Come creare una campagna WhatsApp passo passo"
slug: come-creare-una-campagna-whatsapp
description: "Dal nome al messaggio, dalla promozione all'orario di invio. Ecco come preparare la tua campagna WhatsApp senza intoppi."
status: published
written_by: 2961
locale: it
keywords:
  - campagna whatsapp
  - creare campagna whatsapp
  - messaggio whatsapp
  - regole meta
  - promozione whatsapp
  - intestazione whatsapp
  - pulsante whatsapp
  - costo campagna whatsapp
  - revisione campagna
  - rifiutata da meta
```

**Testo:**

Hai collegato il tuo numero e in **Impostazioni** vedi **WhatsApp è pronto**? Allora sei pronto anche per la tua prima campagna WhatsApp, il canale che i tuoi clienti aprono di più 📲 Ti accompagniamo passo passo, dal nome all'invio.

Se il numero non è ancora collegato, parti da [Campagne WhatsApp: come funzionano, quanto costano e come iniziare](https://supporto.unipiazza.it/it/articles/61972-campagne-whatsapp-come-funzionano-costi-e-come-iniziare) [[campagne-whatsapp-come-funzionano-costi-e-come-iniziare]]. Puoi comunque preparare la bozza, ma per inviarla devi prima collegare WhatsApp.

## Come si crea

**1. Scegli la card WhatsApp**<br>Vai in **Campagne**, premi **Crea nuova campagna** e scegli **WhatsApp**, la card verde con la scritta *WhatsApp (A pagamento)*.

**2. Dai un nome alla campagna**<br>Nella finestra **Crea una Campagna WhatsApp** scrivi un nome, per esempio "Promo WA Luglio 2026", e premi **Inizia**. Il nome lo vedi solo tu e ti serve per ritrovarla nell'elenco.

**3. Scegli il mittente**<br>Se hai più punti vendita, nel passo **Mittente** scegli quelli che invieranno la campagna. Con un solo punto vendita questo passo non c'è.

**4. Scegli i destinatari**<br>In **Destinatari** scegli **Tutti i clienti** oppure una delle tue liste clienti. Il Gestionale ti mostra subito quanti destinatari hai e il **Costo stimato** della campagna.

**5. Scrivi il messaggio**<br>Premi **Crea messaggio** e scegli **Crea da zero** oppure **Crea con Olivia (AI)**, se vuoi che ti prepari una bozza da sistemare. Si apre l'editor con l'anteprima del telefono a destra. Ti spieghiamo ogni parte qui sotto. Quando hai finito premi **Salva ed esci**.

**6. Scegli quando inviarla**<br>In **Orario di invio** scegli **Inviala subito** oppure **Programma l'invio**, con giorno e ora. Se la programmi, l'orario deve essere almeno 24 ore dopo, perché serve il tempo per i controlli. Premi **Salva**.

**7. Premi Programma invio e richiedi la revisione**<br>Quando tutti i passi sono completi, in alto si accende **Programma invio**. Nella finestra che si apre scegli **Fai controllare la campagna**, aggiungi se vuoi una nota per il nostro team e premi **Richiedi revisione**.

## Come si scrive il messaggio

Il messaggio WhatsApp ha quattro parti. Solo il corpo è obbligatorio.

🏷️ **Intestazione**<br>È la riga in cima al messaggio. La accendi con il suo interruttore e scegli tra **Testo** e **Immagine**. Il testo ha al massimo 60 caratteri e non può contenere emoji, a capo, asterischi o altra formattazione. L'immagine va in orizzontale (proporzione 1,91:1), e il Gestionale ti aiuta a ritagliarla.

✍️ **Corpo**<br>È il testo vero e proprio, fino a 950 caratteri. Con la barra sotto il testo aggiungi grassetto, corsivo, barrato ed emoji, inserisci le variabili (Nome, Cognome, Genere, Telefono, Email, Saldo Gettoni) oppure chiedi una mano a Olivia. Per approfondire le variabili leggi [Personalizza le campagne con le variabili](https://supporto.unipiazza.it/it/articles/67839-personalizza-le-campagne-con-le-variabili) [[personalizza-le-campagne-con-le-variabili]].

🎁 **Promozione riscattabile**<br>Se nel messaggio proponi un'offerta, accendila. Così il cliente la può riscattare al Chiosco e tu puoi misurare quanti l'hanno usata. Scrivi la promo con le sue restrizioni (fino a 100 caratteri) e scegli da che giorno a che giorno è valida. Con **👁 Ecco come vedranno la Promo i tuoi clienti** controlli come appare. Se scrivi di una promozione e non l'hai ancora accesa, il Gestionale te lo ricorda con un avviso e il bottone **Attiva**.

🔘 **Pulsante**<br>Puoi aggiungere un pulsante sotto il messaggio. In **Tipo di azione** scegli **Link**, per aprire una pagina web (l'indirizzo deve iniziare con http:// o https://), oppure **Chiamata**, per far partire una telefonata al tuo numero. Il testo del pulsante ha al massimo 25 caratteri e niente emoji.

💡 Il testo che scrivi è lo stesso che i clienti ricevono. Scrivi la promo in dettaglio, per esempio "20% di sconto sul pranzo", e non frasi generiche come "promo pranzo".

## Le regole di Meta per il corpo

Ogni messaggio passa dall'approvazione di Meta, che ha regole precise. Sotto il corpo le trovi sempre elencate, e quella che non rispetti diventa rossa.

1️⃣ Il corpo non può iniziare o finire con una variabile. Scrivi "Ciao `{{FNAME}}`, ti aspettiamo!" e non "`{{FNAME}}`, ti aspettiamo".<br>
2️⃣ Puoi usare al massimo 10 emoji.<br>
3️⃣ Tra un paragrafo e l'altro lascia al massimo una riga vuota.

Finché una regola non è rispettata, il Gestionale non ti lascia inviare la campagna e ti chiede di correggere il testo.

## Cosa succede dopo la richiesta

🧑‍💻 **Il nostro team la controlla**<br>Un consulente Unipiazza controlla testi, contenuto, destinatari e orario, dal lunedì al venerdì dalle 9:00 alle 18:00. Finché non l'ha controllata, la campagna non parte. Ti avvisiamo appena abbiamo finito.

✅ **Poi la approva Meta**<br>Dopo il nostro controllo anche Meta approva il messaggio. Possono volerci pochi minuti o diverse ore, in base allo "stato di salute" del tuo numero WhatsApp. Se hai scelto **Inviala subito**, la campagna parte appena arriva l'approvazione. Se l'hai programmata, parte all'orario che hai scelto, sempre che Meta l'abbia approvata in tempo.

🚫 **Se Meta la rifiuta**<br>In cima alla campagna vedi **Rifiutata da Meta**, con il motivo quando Meta lo indica. Correggi il testo e rimandala, ripasserà dal nostro team e da Meta.

📍 **Dove la ritrovi**<br>Nell'elenco delle campagne vedi a che punto è. Se vuoi cambiarla prima che parta, la puoi riportare in bozza, come spieghiamo in [Dove si trova la tua campagna e come riportarla in bozza](https://supporto.unipiazza.it/it/articles/70971-dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza) [[dove-si-trova-la-tua-campagna-e-come-riportarla-in-bozza]].

## Quanto costa

Paghi 0,10€ per ogni messaggio WhatsApp consegnato correttamente. Il **Costo stimato** lo vedi già nel passo **Destinatari** e di nuovo nella finestra prima dell'invio. Il costo finale può essere un po' diverso, perché dipende dai messaggi davvero consegnati. Limiti giornalieri, fatturazione e domande frequenti li trovi in [Campagne WhatsApp: come funzionano, quanto costano e come iniziare](https://supporto.unipiazza.it/it/articles/61972-campagne-whatsapp-come-funzionano-costi-e-come-iniziare) [[campagne-whatsapp-come-funzionano-costi-e-come-iniziare]].

Ti blocchi a metà strada? Scrivici su WhatsApp al **388 8665987**, siamo qui per aiutarti! 😊

**Note per Dodo (non vanno nell'articolo):**
- Nel pulsante c'è anche il tipo **WhatsApp**, ma per un bug viene salvato come Chiamata
  (`CreateWhatsappCampaignPage.tsx:1185-1199` manda `PHONE_NUMBER` anche per `whatsapp`). Per
  questo l'articolo cita solo Link e Chiamata. Quando Lorenzo lo sistema si aggiunge una riga.
- Il passo 7 non nomina «Invia subito», perché nella finestra è disattivato con «Presto in
  arrivo» (voluto, confermato da te il 21/11). Lo spiega già la FAQ di 61972.

---

## 2. 61972 Campagne WhatsApp: come funzionano, quanto costano e come iniziare [[campagne-whatsapp-come-funzionano-costi-e-come-iniziare]]

Verificato su: gli stessi file del punto 1. La FAQ «Posso inviare subito una campagna WhatsApp?»
è già corretta (dice che **Invia subito** è disattivato). Cambia solo il passo 3, il resto resta
uguale.

**Passo 3, prima:**
> **3. Inizia a creare campagne WhatsApp**
> Una volta approvato il numero, puoi creare la tua prima campagna WhatsApp e attivare WhatsApp sulle tue Automazioni (vedi [Come attivare WhatsApp sulle tue Automazioni](https://supporto.unipiazza.it/it/articles/61973-come-attivare-whatsapp-sulle-autopromo)).

**Passo 3, dopo:**
> **3. Crea la tua prima campagna WhatsApp**
> Una volta approvato il numero, vai in **Campagne**, premi **Crea nuova campagna** e scegli **WhatsApp**. Ti spieghiamo ogni passaggio, dalle regole di Meta per il testo alla revisione, in [Come creare una campagna WhatsApp passo passo](https://supporto.unipiazza.it/it/articles/NUOVO_ID-come-creare-una-campagna-whatsapp) [[come-creare-una-campagna-whatsapp]]. Puoi anche accendere WhatsApp sulle tue Automazioni, come spieghiamo in [Come attivare WhatsApp sulle tue Automazioni](https://supporto.unipiazza.it/it/articles/61973-come-attivare-whatsapp-sulle-autopromo) [[come-attivare-whatsapp-sulle-autopromo]].

`NUOVO_ID` va sostituito con l'article_id del nuovo articolo dopo la pubblicazione.

---

## 3. 61973 Come attivare WhatsApp sulle tue Automazioni [[come-attivare-whatsapp-sulle-autopromo]]

Verificato su: `app/containers/AutomationsPage/components/WhatsappCostEstimate.tsx:35-205` (testi,
calcolo sugli ultimi 30 giorni, stima da aggiornare) · `app/containers/AutomationsPage/whatsappEstimate.ts:13-22, 72-88`
(Automazioni con stima e messaggi di stima non disponibile) · `app/containers/AutomationsPage/AutomationEditPage.tsx:881-905`
e `components/MessageBlock.tsx:172` (dove compare, anche senza WhatsApp collegato).

Nuova sezione da inserire dopo «Come si fa» e prima di «Cosa riceve il cliente su WhatsApp». Il
resto dell'articolo resta uguale.

**Nuova sezione:**

> ## Quanto ti costa ogni mese
>
> Prima di accendere WhatsApp puoi farti un'idea della spesa. Nel blocco **Il messaggio**, sotto i canali, trovi la stima del costo WhatsApp di quell'Automazione.
>
> 💶 **Premi Stima i costi**<br>Il Gestionale guarda l'attività del tuo locale negli ultimi 30 giorni e ti dice quanti messaggi WhatsApp partirebbero nei prossimi 30, con il costo, per esempio "circa 12€ al mese". Quando accendi l'interruttore di WhatsApp la stima parte da sola.
>
> 🧮 **Cosa conta la stima**<br>Solo il messaggio principale, senza promemoria, per i clienti che hanno dato il consenso, IVA esclusa. È una stima, quindi il costo reale dipende dai messaggi consegnati davvero e da quanti clienti passeranno nei prossimi giorni.
>
> 🔄 **Hai cambiato le impostazioni?**<br>Se modifichi i tempi o le condizioni dell'Automazione, la stima di prima resta visibile ma ti avvisa che è da aggiornare. Premi **Aggiorna stima**.
>
> 📵 **WhatsApp non è ancora collegato?**<br>Vedi lo stesso **Quanto costerebbe WhatsApp**. Premi **Scopri il costo** e scopri quanti clienti raggiungeresti e a che prezzo per messaggio.
>
> La stima c'è per Prima visita, Compleanno, Invita un amico, Recensioni, A rischio e Dormienti. Se vedi "Servono più giorni di attività del negozio per calcolare una stima", il tuo locale è attivo da troppo poco tempo. Riprova tra qualche settimana.

**Note per Dodo (non vanno nell'articolo):**
- La stima compare solo dove l'Automazione ha un messaggio WhatsApp e WhatsApp non è in sola
  lettura. Per l'Iscrizione non c'è (non ha messaggi), coerente con quanto già scritto in 61973.
- Il prezzo per messaggio mostrato («con soli X a messaggio») arriva dal backend
  (`unit_price`), non è scritto nel gestionale. Per questo nel testo non ho messo 0,10€.
