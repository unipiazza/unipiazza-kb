# Domande e bug per Lorenzo dalla review KB (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Raccolte mentre si scrivevano le bozze dei lotti 2-4 (cartella `bozze-2026-11-21/`). Ogni domanda
blocca una frase precisa di una bozza, indicata fra parentesi. Il resto delle bozze si può pubblicare
anche senza risposta. Edoardo ha già risposto alle domande del 20/11, le risposte sono nella review.

## Domande

Il 21/11 sera 15 domande su 18 sono state chiuse leggendo il codice (backend, app Windows, vecchio admin, MongoDB) e gli articoli sono stati ripubblicati. Restano aperte la 7, la 9 e la 14, da girare a Lorenzo con un'issue.

**Accesso e dispositivi**
1. Quanto dura il link per reimpostare la password? (lotto 1, 36905. Oggi l'articolo non dà una durata)
    ✔️ Risolta dal codice il 21/11: il link vale 1 ora e arriva solo via email (`jwt.ts:92`). Aggiunto in 36905.
2. Quando compare «📞 Aggiungi numero» nel profilo cliente? Dipende da `can_insert_phone` del backend. (lotto 1, 28262)
    ✔️ Risolta dal codice il 21/11: compare solo se il cliente non ha un numero (`can_insert_phone = !phone`). 28262 già giusto.
3. La versione Windows dell'App Operatore (unpz.it/desktop) chiede già il codice di collegamento da **Dispositivi**? Se sì, il passo «mandaci il codice identificativo su WhatsApp» di 48423 va tolto. (gruppo A)
    ✔️ Risolta dal codice il 21/11: dalla 3.1.3 l'app chiede email/telefono, locale e codice da Dispositivi; distribuita la 3.1.7. 48423 riscritto.

**Wallet e GiftCard**
4. Alzando il saldo da **Modifica Wallet**, se il locale ha il credito extra sulle ricariche (per esempio 10%) il cliente riceve anche quello? `wallet.js:67-72` aggiunge `free_amount_percentage`. Se sì, «scrivi il saldo a cui vuoi arrivare» non è vero. (gruppo A)
    ✔️ Risolta dal codice il 21/11: sì, il credito extra si aggiunge e al cliente arriva il messaggio di ricarica. Corretto 71250.
5. Una GiftCard non riscattata eliminata dal cestino libera la tessera, oppure resta bruciata? (gruppo A)
    ✔️ Risolta dal codice il 21/11: la tessera torna libera (`Pass.deleteOne`). Aggiunto in 71252.
6. La scadenza del Wallet a 12 mesi è applicata davvero da un job e si sposta a ogni ricarica? Il «12 mesi» si trova solo nel tooltip e nelle email. (gruppo A, 28250)
    ✔️ Risolta dal codice il 21/11: job `wallet_expiring` ogni giorno alle 9:00, 12 mesi dall'ultima ricarica, promemoria a 60/30/7/1 giorni. Precisato in 28250 e 28252.

**Campagne**
7. Chi fa rispettare il limite di 48 (o 150) campagne, e cosa vede il cliente quando prova a mandarne un'altra? Nel gestionale c'è solo la barra rossa in Piano & Consumi. (gruppo C, 63774)
    → issue. Nel codice nessuno blocca: il limite esiste solo nella barra di Piano & Consumi. 63774 lasciato com'è.
8. Una campagna programmata per un orario in cui il team non lavora (per esempio sabato mattina) e non ancora approvata parte dopo l'approvazione, passa a «Scaduta» o resta ferma? (gruppo C)
    ✔️ Risolta dal codice il 21/11: la Marketing approvata dopo l'orario parte subito; la WhatsApp approvata in ritardo da Meta non parte («Approvata in ritardo da Meta»). Aggiunto in 61971, 27450, 61976, 71245.
9. «Invia test» chiede l'oggetto anche se l'invio vero non lo chiede e manda solo l'email. È voluto? (gruppo C)
    → issue. Solo email è voluto («Invia email di test»); l'oggetto obbligatorio nel test è un'incoerenza.

**Booster e Abbonamenti**
10. Un abbonamento disattivato si può ancora vendere dal Chiosco o dall'App Operatore? Dal Gestionale non si aggiunge più. (gruppo D)
    ✔️ Risolta dal codice il 21/11: Chiosco e App Operatore (Android e Windows) non lo propongono più, chi l'ha comprato lo scala ancora. Aggiunto in 28249.

**Clienti**
11. I VIP «al massimo il 20% della clientela» (tooltip della Lista clienti). Il job `user_vip.ts` non applica nessun tetto. Il 20% esiste o va tolto? Collegata all'issue [unipiazza-web-partner-v2#157](https://github.com/unipiazza/unipiazza-web-partner-v2/issues/157). (gruppo E)
    ✔️ Risolta dal codice il 21/11: il tetto non esiste, va tolto dal tooltip (issue #157). 27444 già giusto.
12. Gli Archiviati sono chi non torna **o** non legge le campagne (come dicono le Impostazioni), o chi non torna **e** non legge (come dice la KB)? (gruppo E, 27444)
    ✔️ Risolta dal codice il 21/11: vale «e» (job `archived_users.ts`), chi torna attivo esce la notte stessa. Corretto 27444; il testo delle Impostazioni del Gestionale va corretto.
13. Il QrCode della Tessera Fedeltà su Apple Wallet, Google Wallet e App Unipiazza ha lo stesso formato `go.unipiazza.it/...`? Se sì, con **Inquadra QrCode** si può inquadrare anche il telefono del cliente. (gruppo E)
    ✔️ Risolta dal codice il 21/11 per Apple Wallet, Google Wallet e sito (`go.unipiazza.it/<codice>?type=…`). Aggiunto in 71253. App nativa non verificata.

**Vetrina e Impostazioni**
14. Modalità Vacanza, il campo «Al» è il giorno in cui riapri o l'ultimo giorno di chiusura? Il Gestionale salva la data a mezzanotte, Olivia salva la fine della giornata e scrive «inclusi». (gruppo F, 34556)
    → issue. Dal Gestionale «Al» è il giorno in cui riapri (34556 giusto); Olivia salva la fine della giornata, va allineata.
15. Chi attiva `custom_theme.active`, da cui dipende il campo «Colore Vetrina & Chiosco»? Oggi è attivo su 200 locali di pacchetti diversi. (gruppo F, 28255)
    ✔️ Risolta dal codice il 21/11: la attiva il team dal vecchio admin con «Grafica Custom», automatica con KioskElite. Aggiunto in 28255.

**Olivia, permessi, Offerte Partner**
16. Quando una proposta di Olivia diventa «scaduta»? Lo stato `expired` c'è nel modello, ma non si trova chi lo imposta. (gruppo G, 61975)
    ✔️ Risolta dal codice il 21/11: oggi le proposte non scadono mai (nessuno imposta `expired`). Semplificato 61975.
17. Permessi degli amministratori. Chi ha `admins_permission_code == 10` (nella bozza «il titolare»)? I permessi valgono per il punto vendita selezionato o per tutti? Un nuovo amministratore si aggiunge solo dall'assistenza? «Campagne» comprende anche WhatsApp e il Calendario eventi? (gruppo G, articolo nuovo sui permessi, bloccato finché non arrivano le risposte)
    ✔️ Risolta dal codice il 21/11: solo `admins_permission_code = 10` (oggi 2 utenti), permessi unici per tutti i locali, nuovi amministratori dal vecchio admin, «Campagne» copre Marketing e WhatsApp. Riscritto 71247. Da decidere se dare il codice 10 al titolare di ogni locale.
18. Le Offerte Partner si riscattano sempre seguendo le condizioni, o in qualche caso si passa dall'assistenza? (gruppo G)
    ✔️ Risolta dal codice il 21/11: si riscattano direttamente con il partner, solo per chi non è già suo cliente. Aggiunto in 71249.

## Possibili bug

- Campagna WhatsApp, il pulsante «WhatsApp» viene salvato come Chiamata (`CreateWhatsappCampaignPage.tsx:1185-1199`).
- Dopo una ricerca, «Seleziona tutti» + «Aggiungi ad una lista» forse salva solo i 20 clienti della pagina (`CustomersPage.tsx:1132-1180`).
- «Scarica premio» si disattiva per `prizes.write`, ma il tooltip controlla `wallets.write` (`MyUserGenericInfo.tsx:152`).
- «Invia test» ignora l'interruttore Mappa.
- Finestra di passaggio a Chiosco Plus, promette «Campagne illimitate» (`RequestCardsDialog.tsx:512, 596`) ma il limite è 150 (`PlanSection.tsx:20`).
- «Elimina booster» cancella senza chiedere conferma (`BoosterForm.tsx:325-331`) e «Disattiva booster» non controlla `boosters.write` (`:421-444`).
- Pagamento col Wallet da **Modifica Wallet** con moltiplicatore attivo, `receipts.js:582-585` scrive in `receipt.extra_coins`, che per un accredito normale non esiste.
- Vetrina, dopo mezzanotte un locale aperto 18:00-2:00 risulta «Chiuso, apre alle 18:00» (`unipiazza-web-user-v2`, `app/components/ShopFinder/places.ts`, `openingStatus`). Lo stesso `openingStatus` guarda solo `holidayTo` e non la data di inizio della vacanza.
- Backend, refuso `shop.holday = {}` in `app/api_user/v1/templates/shops/partial.ts:187`.
- Tooltip VIP con numero fisso, già nell'issue [#157](https://github.com/unipiazza/unipiazza-web-partner-v2/issues/157).
- Refusi: «Rinonima», «modalita» e «verra» senza accento, «Di tutti i N i punti vendita» nel pannello notifiche, «Autopromo» rimasto nella tabella permessi (`SettingsPage.tsx:478`), in «Sblocca le Autopromo» (`ScopeGate.tsx:26`) e in «Sto aggiornando l'Autopromo...».
