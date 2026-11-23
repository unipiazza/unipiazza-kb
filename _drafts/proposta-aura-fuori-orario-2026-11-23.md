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

## Domande per Edoardo

Vedi il messaggio in chat del 23/11/2026.
