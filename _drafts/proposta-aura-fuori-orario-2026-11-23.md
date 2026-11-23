# Proposta — Aura sa quando il team non c'è (23/11/2026)

← [[proposta-orari-assistenza-2026-11-23]] · [[KB]]

Obiettivo. Quando Aura (che si presenta come Olivia) passa una conversazione a una persona
fuori dagli orari del team, deve dirlo al cliente, così sa che la risposta arriva quando il
team torna in ufficio. **Non ho modificato niente su Customerly.** Questa è solo l'analisi.

## Com'è oggi

1. **Gli orari ci sono già.** In Impostazioni › Messenger › Orari di apertura è impostato
   «Giorno feriale, 9:00-18:00», fuso Europe/Rome.
2. **Il flow principale è «Aura» (16434).** La nuova conversazione passa all'Assistente IA, che ha
   16 intenzioni. Da «Risolto» si va a Chiudi conversazione con CSAT, da «Escalation» si va
   direttamente ad «Assegna a Roberta Pignatelli». Prima di assegnare non c'è nessun controllo
   dell'orario e nessun messaggio.
3. **Molte intenzioni scalano con un loro flow** nella cartella «Missioni AI», per esempio
   18040 «Messaggi generici/decontestualizzati» (336 esecuzioni), 17929 utente finale, 17914
   spostamento call, 17938 verifiche nel Gestionale, 17937 credenziali, 18579 spedizione kit,
   18581 App operatore assente e 18578 batteria gonfia. Il 18040 è fatto solo di intenzione e
   «Assegna a Roberta», senza nessun messaggio al cliente.
4. **Il prompt di Aura** sta in Impostazioni › Progetto › Impostazioni generali › «Descrizione
   del progetto» (2.732 caratteri, comincia con «Ti chiami Olivia…»). Dice già «Quando passi la
   conversazione a qualcuno del team, di' il suo nome» e «non dai tempi che non conosci», ma non
   parla degli orari del team.
5. **Nei flow c'è il blocco giusto.** In Logica c'è «Switch sugli orari di lavoro», che legge gli
   orari di apertura. C'è anche «Avvia Flusso».

### Due casi dello scorso weekend

- **Domenica 22/11 alle 11:55, WhatsApp, 58143291.** Una lead chiede un preventivo per due
  locali e un appuntamento. Aura scala per «low_confidence». La risposta che aveva preparato
  **non viene inviata**, quindi la cliente non riceve niente fino a lunedì alle 8:44, quando
  scrive Roberta. Sono circa 21 ore di silenzio.
- **Domenica 22/11 alle 14:29, Facebook, 58143432.** Il cliente chiede un operatore. Aura
  risponde «ti passo a una collega del nostro team così ti aiuta lei», senza dire che è
  domenica. Roberta risponde lunedì alle 8:39.

## Proposta

### 1. Un sotto-flow unico «Passaggio a Roberta» (consigliato)

È deterministico, perché l'orario lo controlla Customerly e non l'AI.

```
Switch sugli orari di lavoro
├─ In orario     → Assegna a Roberta Pignatelli   (come oggi)
└─ Fuori orario  → Invia messaggio (testo sotto) → Assegna a Roberta Pignatelli
```

Poi si collega dove oggi c'è «Assegna a Roberta».
- Nel flow «Aura» (16434), al ramo Escalation.
- Nei flow delle Missioni AI che scalano a Roberta, sostituendo il loro «Assegna a» con
  «Avvia Flusso» verso il sotto-flow.

Così, se cambiano gli orari o il testo, si corregge in un posto solo.

**Messaggio fuori orario (bozza)**

> Ti passo a Roberta, del nostro team. Adesso siamo fuori orario, il team risponde dal lunedì
> al venerdì dalle 9:00 alle 18:00. Ti scrive lei appena rientra, non serve riscriverci.

Il messaggio risolve anche il silenzio del caso low_confidence, perché il cliente riceve
comunque una risposta.

### 2. Una riga nel prompt di Aura (complementare)

Da aggiungere nel blocco «Chi sei», dopo la frase sul passaggio a una persona.

> - Il team di Unipiazza risponde dal lunedì al venerdì, dalle 9:00 alle 18:00. Quando passi la
>   conversazione a qualcuno del team non promettere che risponde subito. Se il cliente chiede
>   quando gli risponderanno, di' questi orari.

Non affiderei solo al prompt il controllo dell'orario. Non sappiamo se Aura conosce giorno e ora
del messaggio, e il caso low_confidence non manda nessun testo di Aura.

## Altre cose trovate nel check, da decidere a parte

1. **Messenger, «Imposta tempo di risposta»** dice «In genere risponde in pochi minuti». Va
   contro la regola di non pubblicare un tempo di risposta del team.
2. **Risposte predefinite addestrate per l'AI.** In «Non ricordo la password per accedere»
   c'è scritto «ti resetto subito la password, la tua nuova password è:», e Aura potrebbe
   prometterlo. «Prima risposta» invece dice «ti risponderemo il prima possibile».
3. **Il prompt di Aura cita ancora «Autopromo» ed «eShop».** In KB adesso si chiamano
   Automazioni, e l'eShop non si vende più.

## Risposte di Edoardo (23/11/2026)

1. Il testo del messaggio fuori orario va bene così.
2. I festivi si ignorano. Lo Switch di Customerly non li conosce e in quei giorni dirà «in orario».
3. In orario non si manda nessun messaggio, resta tutto come prima.
4. I flow di Roberta si possono modificare, la si avvisa dopo.
5. Ok al test dalla «Prova la chat».
6. Le cose trovate nel check vanno spiegate meglio prima di decidere.

Prima di toccare tutti i flow, Edoardo ha chiesto una prova su uno solo.

## Cosa è stato fatto su Customerly (23/11/2026, sera)

1. **Nuovo flusso «Passaggio a Roberta (con orari)», id 19139, pubblicato.** Parte «Su Richiesta»,
   cioè solo quando un altro flusso lo chiama. Contiene lo Switch sugli orari del progetto
   (lun-ven 9-18, Europe/Rome). In orario assegna a Roberta. Fuori orario manda il messaggio e
   poi assegna a Roberta.
2. **Flow «Aura» (16434), ramo Escalation.** Il blocco «Assegna a Roberta» è stato sostituito con
   «Avvia Flusso» verso il 19139. È l'unico flow collegato per ora.
3. I flow delle Missioni AI **non sono ancora stati toccati**. Nel menu di «Avvia Flusso» compaiono
   tutti, quindi il collegamento è lo stesso.

## Esito dei test (23/11/2026, 21:36 e 21:43)

- **Aura conosce la data ma non l'ora.** Alla domanda «che giorno è e che ore sono?» ha preparato
  «Buongiorno… Oggi è 23 novembre 2026. Non posso vedere l'ora esatta». Era sera, quindi anche il
  saluto era sbagliato. Conferma che il controllo dell'orario va fatto dallo Switch e non dal prompt.
- **Prima della modifica (conversazione 58147636).** Escalation per low_confidence, la risposta di
  Aura non viene inviata, la conversazione va a Roberta e il cliente non riceve niente.
- **Dopo la modifica (conversazione 58147648).** Stessa domanda, stessa escalation. Parte il
  19139, il cliente riceve il messaggio fuori orario e la conversazione passa a Roberta. Funziona.
- Il ramo «in orario» non è stato provato dal vivo, perché il test era alle 21:43. Fa la stessa
  cosa di prima, cioè solo l'assegnazione.
- Le due conversazioni di prova sono state riassegnate a Edoardo e chiuse.
- Nella chat del sito, fuori orario, Customerly mostra anche il riquadro «Puoi continuare la
  conversazione su WhatsApp». Non viene dai nostri flow. Esce perché il contatto di prova ha un
  numero WhatsApp.

## Secondo flow collegato (23/11/2026, 22:30)

Edoardo ha chiesto di provare su un solo flow delle Missioni AI. È stato scelto il **18040
«Messaggi generici/decontestualizzati»**, il più usato (21 esecuzioni negli ultimi 7 giorni) e
quello che prima scalava senza scrivere niente al cliente. Il suo «Assegna a Roberta» è stato
sostituito con «Avvia Flusso» verso il 19139.

**Test (conversazione 58147724).** Al primo messaggio senza senso Aura chiede di riformulare. Al
secondo scatta il 18040, che chiama il 19139, e il cliente riceve il messaggio fuori orario prima
dell'assegnazione a Roberta. Funziona. La conversazione di prova è stata riassegnata a Edoardo e
chiusa. Anche qui Aura ha salutato con «Buongiorno» alle 22:32.

## Prossimi passi

1. Collegare il 19139 agli altri flow delle Missioni AI che scalano a Roberta, al posto del loro
   «Assegna a».
2. Aggiungere la riga sugli orari al prompt di Aura.
3. Avvisare Roberta delle modifiche ai suoi flow.
