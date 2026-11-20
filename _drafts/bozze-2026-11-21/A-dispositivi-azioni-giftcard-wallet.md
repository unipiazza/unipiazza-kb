# Gruppo A — Dispositivi, azioni manuali, GiftCard dal Gestionale, Wallet (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Codice: gestionale
`unipiazza-web-partner-v2` `master` @ `2146b46`, backend `unipiazza-api` (via `gh api`), libreria
Android del Chiosco e dell'App Operatore `unipiazza-android-restlibrary` @ `4d9f9be`, app desktop
`unipiazza-attivitapp-desktop` (via `gh`).

Righe della review coperte: sezione 2 #1, #3, #4 e sezione 1 #9.

---

## A1. NUOVO — Come collegare un Chiosco Unipiazza o l'App Operatore al Gestionale

Verificato su:
- gestionale `app/containers/DevicesPage/DevicesPage.tsx:311-691` (codice, QR, scadenza, elenco), `app/containers/App/index.tsx:631-660` (apertura automatica della pagina alla richiesta), `:736-746` e `:1183-1197` (voce Dispositivi nel menu sotto il tuo nome)
- backend `app/utils/attivitapp_pairing_code.ts` (codice di 6 cifre, `TTL_SECONDS = 5 * 60`, `MAX_FAILED_ATTEMPTS = 5`, invio ripetibile ogni 3 minuti), `app/api_partner/v1/controllers/device_pairing.js` (notifica «Richiesta di collegamento dispositivo», invio per email e RCS o WhatsApp), `routes/api_partner/v2.routes.js:22-46` (il codice è legato al profilo che lo genera e al punto vendita, serve il permesso di modifica del negozio)
- libreria Android `res/values/strings.xml:35-54` (passo «Verifica il tuo accesso 🔐», «Scansiona QR Code», «Invia codice via email e telefono», errori), `onboarding/OnboardingPagerAdapter.kt:21-32` (il passo del codice c'è solo alla prima attivazione)
- app desktop `ui/OtpOnboardingWindow.java` (stesso passo con il codice)

**Frontmatter proposto**

```yaml
collection: 🧩 Integrazioni
collection_id: 8104
title: Come collegare un Chiosco Unipiazza o l'App Operatore al Gestionale
slug: come-collegare-un-chiosco-o-l-app-operatore-al-gestionale
description: Un codice di 6 cifre dal Gestionale e il tuo nuovo dispositivo è pronto a raccogliere gettoni.
keywords:
  - dispositivi
  - collegare dispositivo
  - codice di collegamento
  - codice di sicurezza
  - verifica il tuo accesso
  - app operatore
  - chiosco
  - pairing
  - nuovo dispositivo
written_by: 2961
status: published
locale: it
```

**Testo**

Hai un Chiosco Unipiazza nuovo, hai cambiato smartphone o stai installando l'App Operatore sulla cassa? Prima di iniziare a raccogliere gettoni, il nuovo dispositivo ti chiede un codice di sicurezza. Serve a confermare che sei proprio tu a collegarlo al tuo locale, e lo trovi nel Gestionale in pochi secondi. 🔐

## Come si collega un dispositivo

**1. Fai partire l'attivazione sul dispositivo**<br>Sul Chiosco Unipiazza o sull'App Operatore premi **Iniziamo**, scrivi l'email o il numero di telefono del tuo profilo Unipiazza e premi sulla card del tuo locale. Il dispositivo ti mostra la schermata **Verifica il tuo accesso 🔐** e aspetta il codice.

**2. Apri Dispositivi nel Gestionale**<br>Entra in [partner.unipiazza.it](https://partner.unipiazza.it) con la **stessa email o lo stesso numero** che hai scritto sul dispositivo. Premi sul tuo nome in alto a destra e scegli **Dispositivi**. Se il Gestionale è già aperto, di solito ti porta da solo su questa pagina appena arriva la richiesta di collegamento.

**3. Premi Genera codice**<br>Compare un codice di 6 cifre con il suo QR code. Il codice vale 5 minuti, e sotto vedi quanto tempo ti resta.

**4. Inserisci il codice sul dispositivo**<br>Scrivi le 6 cifre nella schermata **Verifica il tuo accesso**, oppure premi **📷 Scansiona QR Code** e inquadra il QR code sullo schermo del computer. Concedi i permessi che il dispositivo ti chiede e... è fatta! 🚀

## Qualcosa non va?

⏳ **Il codice è scaduto**<br>Nel Gestionale premi di nuovo **Genera codice**. Se ne generi uno nuovo mentre il vecchio è ancora valido, il vecchio smette subito di funzionare.

📵 **Non hai il computer a portata di mano**<br>Sul dispositivo premi **✉️ Invia codice via email e telefono**. Ti mandiamo il codice all'email del tuo profilo e sul telefono (con un messaggio RCS oppure su WhatsApp). Se serve, puoi richiederlo di nuovo dopo qualche minuto.

🚫 **Il dispositivo dice «Codice non valido o scaduto»**<br>Controlla di essere entrato nel Gestionale con la stessa email o lo stesso numero scritti sul dispositivo, e che in alto sia selezionato il punto vendita giusto. Ogni codice vale solo per quel profilo e quel punto vendita.

🔁 **Il dispositivo dice «Troppi tentativi»**<br>Dopo 5 codici sbagliati il collegamento si blocca per qualche minuto. Aspetta un po' e genera un codice nuovo.

🏪 **Hai più punti vendita**<br>Il codice si genera per un punto vendita alla volta. Selezionalo dal menu in alto prima di premere **Genera codice**.

## Controlla i dispositivi collegati

Sempre in **Dispositivi**, sotto il codice, trovi **Dispositivi collegati**. I dispositivi sono raggruppati a coppie (di solito il Chiosco Unipiazza e l'App Operatore che lavora con lui), e per ognuno vedi:

📱 **Stato**, cioè **Accoppiato** se ha trovato il suo compagno, oppure **In attesa**<br>
👤 **Utente collegato**, il profilo con cui è stato attivato<br>
🔢 **Versione app** e **ID dispositivo**, utili se ci scrivi per assistenza<br>
🔋 **Batteria**, con la percentuale e se è in carica<br>
📶 **Rete Wi-Fi**, con il nome della rete e la potenza del segnale da 1 a 5<br>
📅 **Accoppiato il** e **Ultimo aggiornamento**

Se in una coppia vedi **Nessun dispositivo accoppiato**, manca ancora il secondo dispositivo. Attivalo e collegalo con un nuovo codice.

Ti serve una mano con l'installazione? Trovi i passaggi in [Come installare l'App Operatore Unipiazza sul tuo dispositivo Android](https://supporto.unipiazza.it/it/articles/61666-come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android) [[come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android]] e in [Come installare l'App Operatore Unipiazza sul tuo PC Windows](https://supporto.unipiazza.it/it/articles/48423-come-installare-l-app-unipiazza-sul-tuo-pc-windows) [[come-installare-l-app-unipiazza-sul-tuo-pc-windows]]. E se sei bloccato, scrivici su WhatsApp al **388 8665987**, siamo qui per aiutarti!

### Rimandi da aggiungere negli articoli esistenti

**61666 Come installare l'App Operatore sul tuo dispositivo Android** [[come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android]]

Passo 3, prima:
> -   Clicca sull'immagine del tuo locale e concedi i permessi richiesti dall'applicazione (Posizione, Batteria e Posizionamento app sullo schermo).
> -   Una volta fatto, dopo pochi secondi di sincronizzazione con il Chiosco Unipiazza, l'App Operatore sarà operativa.

Passo 3, dopo:
> -   Clicca sull'immagine del tuo locale.
> -   L'app ti chiede un codice di sicurezza. Generalo dal Gestionale in **Dispositivi** e inseriscilo, oppure inquadra il suo QR code. Ti spieghiamo tutto in [Come collegare un Chiosco Unipiazza o l'App Operatore al Gestionale](https://supporto.unipiazza.it/it/articles/NUOVO-come-collegare-un-chiosco-o-l-app-operatore-al-gestionale) [[come-collegare-un-chiosco-o-l-app-operatore-al-gestionale]].
> -   Concedi i permessi richiesti dall'applicazione (Posizione, Batteria e Posizionamento app sullo schermo).
> -   Una volta fatto, dopo pochi secondi di sincronizzazione con il Chiosco Unipiazza, l'App Operatore sarà operativa.

**48423 Come installare l'App Operatore Unipiazza sul tuo PC Windows** [[come-installare-l-app-unipiazza-sul-tuo-pc-windows]] ⚠️ da confermare con Lorenzo (domanda L1)

Passo 3, prima:
> 3\. Avvia e comunica il codice
> -   L'app si aprirà automaticamente una volta completata l'installazione.
> -   Nella schermata troverai un **codice identificativo** in basso.
> -   Inviacelo via WhatsApp, così da attivare il collegamento con il tuo account Unipiazza!

Passo 3, dopo:
> 3\. Collega l'app al tuo locale
> -   L'app si aprirà automaticamente una volta completata l'installazione.
> -   Scrivi l'email o il numero di telefono del tuo profilo Unipiazza e scegli il tuo locale.
> -   L'app ti chiede un codice di sicurezza. Generalo dal Gestionale in **Dispositivi** e inseriscilo. Ti spieghiamo tutto in [Come collegare un Chiosco Unipiazza o l'App Operatore al Gestionale](https://supporto.unipiazza.it/it/articles/NUOVO-come-collegare-un-chiosco-o-l-app-operatore-al-gestionale) [[come-collegare-un-chiosco-o-l-app-operatore-al-gestionale]].

**65542 «App Operatore assente» sul tuo Chiosco Unipiazza** [[app-operatore-assente-sul-tuo-chiosco-unipiazza]]

Nuovo passo, prima di «Ancora bloccato?»:
> Controlla che i due dispositivi siano collegati fra loro: nel Gestionale premi sul tuo nome in alto a destra e apri **Dispositivi**. In **Dispositivi collegati** il Chiosco e l'App Operatore devono stare nella stessa coppia, con lo stato **Accoppiato**. Lì vedi anche batteria e rete Wi-Fi di ognuno. Se l'App Operatore manca, collegala con un nuovo codice come spieghiamo in [Come collegare un Chiosco Unipiazza o l'App Operatore al Gestionale](https://supporto.unipiazza.it/it/articles/NUOVO-come-collegare-un-chiosco-o-l-app-operatore-al-gestionale) [[come-collegare-un-chiosco-o-l-app-operatore-al-gestionale]].

(Nota: i passi attuali usano la costruzione «Controlla lo strumento con l'app operatore: verifica...» con i due punti. Se si tocca l'articolo conviene sistemarli insieme, per esempio «**1. Controlla lo strumento con l'App Operatore**<br>Verifica che...».)

**1249 Ho cambiato la password del wifi, come la cambio nel tablet?** [[ho-cambiato-la-password-del-wifi-come-la-cambio-nel-tablet]]

Aggiunta in fondo, prima del contatto:
> 📶 **Vuoi controllare che siano tornati online?** Nel Gestionale premi sul tuo nome in alto a destra e apri **Dispositivi**. Per il Chiosco e per l'App Operatore vedi la rete Wi-Fi a cui sono collegati e la potenza del segnale.

---

## A2. NUOVO — Il Chiosco non funziona? Come caricare gettoni, abbonamenti e Wallet dal Gestionale

Verificato su:
- gestionale `app/containers/CustomerPage/MyUserGenericInfo.tsx:136-198` (menu Azioni, permessi, grigio con tutti i punti vendita), `:342-347` (bottone «🪙 Accredita Gettoni» su telefono)
- `app/containers/CustomerPage/CustomerPage.tsx:627-645` e `:1057-1109` (Accredita gettoni in euro, conversione `coins_per_euro`, «🎁 Regala questi gettoni»), `:1110-1165` (Scarica Premi e Promo), `:1166-1205` (Scala 1 registra un acquisto dell'abbonamento)
- `app/containers/CustomerPage/ModalSubscriptionDischarge.tsx:274-370` («Abbonamenti cliente», «+ Aggiungi abbonamento», «Scala 1», «utilizzi disponibili»)
- `app/containers/Wallets/ModalWallet.tsx:42-110` (si scrive il saldo finale; se sale è una ricarica, se scende è un pagamento col Wallet)
- backend `app/api_partner/v1/controllers/receipts.js:776-783` (notifica «Wow! Gettoni regalo»), `:916-931` (ogni accredito incrementa `receipts_counter`, quindi conta come visita, e il pagamento col Wallet scala il saldo)

**Frontmatter proposto**

```yaml
collection: "👨‍👩‍👧‍👦 Clienti"
collection_id: 7180
title: Il Chiosco non funziona? Come caricare gettoni, abbonamenti e Wallet dal Gestionale
slug: come-caricare-gettoni-abbonamenti-e-wallet-dal-gestionale
description: Il Chiosco fa i capricci e c'è un cliente alla cassa? Dal suo profilo nel Gestionale fai tutto a mano, in pochi secondi.
keywords:
  - chiosco non funziona
  - caricare gettoni a mano
  - accredita gettoni
  - regala gettoni
  - scala abbonamento
  - aggiungi abbonamento
  - modifica wallet
  - azioni
written_by: 2961
status: published
locale: it
```

**Testo**

Il Chiosco Unipiazza è spento, senza rete o in assistenza, e intanto i clienti continuano ad arrivare? Niente panico, nessuno perde i suoi gettoni. Tutto quello che il Chiosco fa alla cassa lo puoi fare anche dal Gestionale, dal computer o dal telefono. 😊

## Prima di tutto, apri il profilo del cliente

**1. Scegli il punto vendita**<br>Se hai più punti vendita, selezionane uno dal menu in alto. Con tutti i punti vendita selezionati il bottone **Azioni** resta grigio.

**2. Cerca il cliente**<br>Vai in **Clienti**, cercalo per nome, email o telefono e premi sul suo nome.

**3. Premi Azioni**<br>In alto nel profilo trovi il bottone blu **Azioni** con tutte le operazioni che vedi qui sotto. Se una voce è grigia, il tuo utente non ha il permesso per farla, e te lo può dare il titolare del locale.

## 🪙 Accreditare i gettoni di un acquisto

**1. Scegli Accredita gettoni**<br>Dal telefono trovi anche il bottone **🪙 Accredita Gettoni** direttamente nel profilo.

**2. Scrivi l'importo in euro**<br>Non serve fare conti. Scrivi quanto ha speso il cliente e il Gestionale lo trasforma in gettoni da solo (in basso vedi quanti gliene accrediterai).

**3. Premi Accredita importo**<br>Il cliente riceve i gettoni e nello Storico Azioni compare la visita con l'importo, proprio come se fosse passato dal Chiosco.

🎁 **Vuoi regalargli dei gettoni?**<br>Prima di confermare spunta **🎁 Regala questi gettoni**. Il cliente riceve i gettoni senza che l'importo finisca negli euro spesi, e gli arriva la notifica dei gettoni regalo. Anche il regalo conta come una visita.

Da qui i gettoni si possono solo aggiungere. Se hai sbagliato un importo, correggilo dallo Storico Azioni come spieghiamo in [Come correggere un importo, dei gettoni o una visita caricati per errore](https://supporto.unipiazza.it/it/articles/41052-come-correggere-un-importo-errato-nel-gestionale-unipiazza) [[come-correggere-un-importo-errato-nel-gestionale-unipiazza]].

## 🏆 Consegnare un premio o una promo

Scegli **Scarica premio**, seleziona il premio che hai consegnato e conferma. I gettoni si scalano da soli. Nella stessa finestra trovi anche le promo attive del cliente, come il regalo di compleanno. Tutti i dettagli sono in [Come scalare un premio manualmente nel gestionale Unipiazza](https://supporto.unipiazza.it/it/articles/41054-come-scalare-un-premio-manualmente-nel-gestionale-unipiazza) [[come-scalare-un-premio-manualmente-nel-gestionale-unipiazza]].

## 🎫 Usare o aggiungere un abbonamento

Scegli **Gestisci abbonamenti**. Si apre **Abbonamenti cliente** con gli abbonamenti attivi del cliente e, per ognuno, gli utilizzi disponibili.

✂️ **Il cliente usa l'abbonamento**<br>Premi **Scala 1** accanto all'abbonamento giusto. Gli utilizzi scendono di uno e nello Storico Azioni compare il passaggio.

➕ **Il cliente ha comprato un abbonamento in cassa**<br>Premi **+ Aggiungi abbonamento**, scegli quello giusto dall'elenco e conferma con **Aggiungi abbonamento**. Puoi aggiungere solo abbonamenti attivi che il cliente non ha già.

## 💳 Ricaricare o scalare il Wallet

Scegli **Modifica Wallet**. Qui non scrivi quanto aggiungere o togliere, ma **il saldo a cui vuoi arrivare**. Sotto il campo il Gestionale ti dice cosa succederà.

⬆️ **Se il saldo sale**<br>È una ricarica. Per esempio, il cliente ha 10€, scrivi 60€ e gli ricarichi 50€.

⬇️ **Se il saldo scende**<br>È un pagamento con il Wallet. Per esempio, il cliente ha 60€ e spende 15€, scrivi 45€. Il pagamento si registra come un acquisto, quindi il cliente riceve anche i gettoni per quei 15€.

La voce è grigia se il Wallet non è attivo nel tuo locale. Lo attivi come spieghiamo in [Cosa sono e come si attivano i Wallet?](https://supporto.unipiazza.it/it/articles/28250-cosa-sono-e-come-si-attivano-i-wallet) [[cosa-sono-e-come-si-attivano-i-wallet]].

Il Chiosco è fermo da un po'? Dai un'occhiata a [Il mio Chiosco è bloccato, come lo resetto?](https://supporto.unipiazza.it/it/articles/41648-come-si-resetta-il-chiosco) [[come-si-resetta-il-chiosco]] oppure scrivici su WhatsApp al **388 8665987**, ti aiutiamo a rimetterlo in pista!

(Domanda L2 sulla ricarica con credito extra, prima di pubblicare la sezione Wallet.)

### Rimando proposto in 28262 (sopra la bozza del lotto 1)

Punto **Azioni**, aggiunta in fondo:
> Se il Chiosco non funziona e devi fare tutto a mano, trovi i passaggi in [Il Chiosco non funziona? Come caricare gettoni, abbonamenti e Wallet dal Gestionale](https://supporto.unipiazza.it/it/articles/NUOVO-come-caricare-gettoni-abbonamenti-e-wallet-dal-gestionale) [[come-caricare-gettoni-abbonamenti-e-wallet-dal-gestionale]].

---

## A3. NUOVO — Come attivare, correggere o eliminare una GiftCard dal Gestionale

Verificato su:
- gestionale `app/containers/Wallets/WalletsPage.tsx:510-580` («Attiva nuova GiftCard», importo, codice della tessera vuota di 5 caratteri o 7 per le tessere personalizzate, bottone grigio se le GiftCard non sono attive o con tutti i punti vendita), `:307-347` (matita «Modifica l'importo della GiftCard», cestino «Sicuro di voler eliminare questa GiftCard?», permesso GiftCard), `:599-640` (modale di modifica), `:650-670` (tabella «GiftCard da riscattare»)
- `app/components/Drawer/index.tsx:527-552` (menu Wallet › Attivi / Impostazioni)
- backend `app/api_partner/v1/controllers/wallet.js:269-288` (il codice non deve esistere già, altrimenti «Pass already exists»), test `test/tests/api-partner-v1/giftcard.test.js:150-151`
- articolo 28251, che già dice che la GiftCard creata senza un cliente che la regala mostra «qualcuno ti ha regalato»

**Frontmatter proposto**

```yaml
collection: 💳 Wallet e Gift Card
collection_id: 7199
title: Come attivare, correggere o eliminare una GiftCard dal Gestionale
slug: come-attivare-correggere-o-eliminare-una-giftcard-dal-gestionale
description: Il Chiosco non è disponibile, oppure hai sbagliato un importo? Le GiftCard le gestisci anche dal Gestionale.
keywords:
  - giftcard
  - gift card
  - attivare giftcard
  - attiva nuova giftcard
  - modificare giftcard
  - eliminare giftcard
  - giftcard da riscattare
  - tessera vuota
written_by: 2961
status: published
locale: it
```

**Testo**

Di solito le GiftCard nascono sul Chiosco Unipiazza, quando un cliente ne compra una. Ma a volte ti serve farlo da te. Magari il Chiosco è fermo, vuoi preparare in anticipo dei regali per Natale, oppure ti accorgi che una GiftCard ha l'importo sbagliato. Dal Gestionale fai tutto in un minuto. 🎁

## Come attivare una nuova GiftCard

**1. Tieni pronta una Tessera Fedeltà nuova**<br>Prendi una delle Tessere Fedeltà che ti abbiamo spedito, mai usata da nessuno. Sotto il QR code trovi il suo codice, di 5 caratteri (per esempio AA111) oppure di 7 se hai le Tessere Fedeltà personalizzate (per esempio 1TAA111).

**2. Apri Wallet › Attivi**<br>Se hai più punti vendita, prima selezionane uno dal menu in alto.

**3. Premi Attiva nuova GiftCard**<br>Lo trovi in alto a destra. Se è grigio, le GiftCard non sono attive nel tuo locale (le accendi da **Wallet › Impostazioni**) oppure il tuo utente non ha il permesso di gestirle.

**4. Scrivi importo e codice**<br>Inserisci l'importo in euro da caricare e il codice della tessera, poi premi **Attiva GiftCard**.

**5. Consegna la tessera**<br>La GiftCard compare subito nella tabella **GiftCard da riscattare**. Quando chi la riceve la mostra al Chiosco, vede «Wow, qualcuno ti ha regalato...» con l'importo, e il credito passa nel suo Wallet.

🙅 **Il codice non viene accettato?**<br>Vuol dire che quella tessera è già stata usata, da un cliente o da un'altra GiftCard. Prendine un'altra mai usata. Se le hai finite, le richiedi come spieghiamo in [Ho finito le tessere, come posso richiederne delle altre?](https://supporto.unipiazza.it/it/articles/4366-ho-finito-le-tessere-come-posso-richiederne-delle-altre) [[ho-finito-le-tessere-come-posso-richiederne-delle-altre]].

## Come correggere o eliminare una GiftCard

In **Wallet › Attivi**, nella tabella **GiftCard da riscattare**, trovi tutte le GiftCard che nessuno ha ancora usato, con data, valore, chi l'ha acquistata e la scadenza.

✏️ **Hai sbagliato l'importo**<br>Premi la matita accanto alla GiftCard, scrivi l'importo giusto e premi **Modifica GiftCard**.

🗑️ **Vuoi eliminarla**<br>Premi il cestino rosso e conferma con **Si**. La GiftCard sparisce e la tessera non vale più come regalo.

Una volta riscattata, la GiftCard diventa credito nel Wallet del cliente e non compare più in questa tabella. Da lì il saldo si corregge con **Modifica Wallet**, dalla tabella **Wallet attivati** o dal profilo del cliente.

Vuoi sapere come funzionano le GiftCard sul Chiosco? Leggi [Cosa sono e come si attivano le GiftCard?](https://supporto.unipiazza.it/it/articles/28251-cosa-sono-e-come-si-attivano-le-giftcard) [[cosa-sono-e-come-si-attivano-le-giftcard]]. E per qualsiasi dubbio scrivici su WhatsApp al **388 8665987**!

(Domanda L3 su cosa succede alla tessera dopo l'eliminazione, prima di pubblicare la frase «la tessera non vale più come regalo».)

---

## A4. 28250 Cosa sono e come si attivano i Wallet? [[cosa-sono-e-come-si-attivano-i-wallet]]

Verificato su: gestionale `app/containers/Wallets/SettingsPage.tsx:75-77` e `:419-452` (moltiplicatori x1,2 x1,3 x1,4 x1,5 x2, gettoni = gettoni per euro × moltiplicatore), `app/localizations/it.json:23-27`, `:38-54` (nomi delle colonne e tooltip della scadenza a 12 mesi dall'ultima ricarica), `app/containers/Wallets/WalletsPage.tsx:108-165` (riquadri in alto), `:350-500` e `:672-680` (tabella «Wallet attivati» con la matita), `app/components/Drawer/index.tsx:527-552` (menu Wallet › Attivi); backend `app/api_partner/v1/controllers/wallet.js:135,149` (scadenza a 12 mesi nelle email).

**Moltiplicatore, prima:**
> -   **Incentiva i Pagamenti Tramite il Wallet:** Seleziona questa opzione per dare gettoni extra ai clienti che pagano con il Wallet. Ad esempio, potresti offrire un moltiplicatore di gettoni, come 1,5 gettoni per ogni euro speso.

**Moltiplicatore, dopo:**
> -   **Incentiva i Pagamenti Tramite il Wallet:** Seleziona questa opzione per dare gettoni extra ai clienti che pagano con il Wallet. Scegli fra x1,2, x1,3, x1,4, x1,5 e x2. Per esempio, se normalmente dai 10 gettoni per ogni euro, con x1,5 chi paga con il Wallet ne riceve 15. Accanto a ogni opzione il Gestionale ti mostra quanti gettoni per euro darai.

**Elenco Wallet, prima:**
> Nella sezione "Wallet prepagati" del Gestionale, puoi visualizzare una lista dei clienti che hanno attivato il proprio Wallet. Questa lista fornisce dettagli quali:
>
> -   Nome del cliente
> -   Credito acquistato dal cliente
> -   Credito rimanente nel Wallet del cliente
> -   Ultima ricarica effettuata dal cliente
> -   Data di scadenza del credito nel Wallet (se applicabile)

**Elenco Wallet, dopo:**
> In **Wallet › Attivi** trovi in alto i numeri del tuo Wallet (Wallet attivati, ricariche fatte, euro incassati e ancora da spendere, GiftCard create e riscattate, nuovi clienti arrivati con una GiftCard, incassi delle GiftCard). Più in basso, nella tabella **Wallet attivati**, ci sono i clienti che hanno ricaricato il Wallet o riscattato una GiftCard. Per ognuno vedi:
>
> 👤 **Nome** del cliente<br>
> 💶 **Credito acquistato**, cioè il totale di ricariche e GiftCard riscattate (fra parentesi l'eventuale credito extra che gli hai regalato)<br>
> 💳 **Credito rimanente** nel suo Wallet<br>
> 📅 **Ultima ricarica**<br>
> ⏳ **Scade il**, perché il credito del Wallet scade 12 mesi dopo l'ultima ricarica. Ogni nuova ricarica sposta in avanti la scadenza, e quando la data è passata leggi **Scaduto il**<br>
> ✏️ **Modifica**, per correggere a mano il saldo del cliente
>
> Sopra trovi anche la tabella **GiftCard da riscattare**. Se vuoi attivare, correggere o eliminare una GiftCard dal Gestionale, ti spieghiamo tutto in [Come attivare, correggere o eliminare una GiftCard dal Gestionale](https://supporto.unipiazza.it/it/articles/NUOVO-come-attivare-correggere-o-eliminare-una-giftcard-dal-gestionale) [[come-attivare-correggere-o-eliminare-una-giftcard-dal-gestionale]].

(«Ogni nuova ricarica sposta in avanti la scadenza» segue dal tooltip «12 mesi dopo l'ultima ricarica». Lo lascerei, ma è nella domanda L4.)

---

## A5. 28252 Impostazioni Wallet & Gift Card [[impostazioni-wallet-gift-card]]

Verificato su: come A4 (`SettingsPage.tsx:419-452`, `it.json:7,20-27`).

**Moltiplicatore, prima:**
> -   **Incentiva i Pagamenti con il Wallet:** Attivando questa opzione, potrai ricompensare i clienti che utilizzano il Wallet per i pagamenti, ad esempio, offrendo loro un moltiplicatore di gettoni per ogni euro speso.

**Moltiplicatore, dopo:**
> -   **Incentiva i Pagamenti con il Wallet:** Attivando questa opzione, potrai ricompensare i clienti che utilizzano il Wallet per i pagamenti con più gettoni del solito. Scegli il moltiplicatore fra x1,2, x1,3, x1,4, x1,5 e x2. Per esempio, se normalmente dai 10 gettoni per ogni euro, con x1,2 chi paga con il Wallet ne riceve 12. Accanto a ogni opzione vedi quanti gettoni per euro darai.

**Nuovo punto, dopo «Limite Credito»:**
> -   **Scadenza del credito:** Il credito del Wallet scade 12 mesi dopo l'ultima ricarica del cliente. Dopo quella data non è più disponibile. La scadenza di ogni cliente la vedi in **Wallet › Attivi**, nella colonna **Scade il**.

(Nota: i punti dell'elenco usano già il formato «**Etichetta:** testo» con l'etichetta in grassetto. L'ho mantenuto per coerenza con il resto dell'articolo.)

---

## Domande per Lorenzo

- **L1.** La versione Windows dell'App Operatore che si scarica da unpz.it/desktop chiede già il codice di sicurezza da **Dispositivi** (in `unipiazza-attivitapp-desktop` c'è `OtpOnboardingWindow`)? Se sì, il passo «mandaci il codice identificativo su WhatsApp» di 48423 è da togliere.
- **L2.** Se da **Modifica Wallet** alzo il saldo di un cliente e il locale ha attivo il credito extra sulle ricariche (per esempio 10%), il cliente riceve anche il 10%? La ricarica passa da `api/partner/v1/wallet` (`ModalWallet.tsx:44-47`), che in `wallet.js:67-72` aggiunge `free_amount_percentage`. Se è così, «scrivi il saldo a cui vuoi arrivare» non è vero e il saldo finale supera quello scritto.
- **L3.** Quando elimino una GiftCard non riscattata dal cestino (`DELETE api/partner/v2/wallets/gift/:pass_id`), la tessera torna libera e si può riusare per un'altra GiftCard o per iscrivere un cliente, oppure resta bruciata?
- **L4.** La scadenza di 12 mesi è applicata davvero (c'è un job che azzera il credito scaduto?) e si sposta a ogni ricarica? Ho trovato il «12 mesi» solo nel tooltip del gestionale e nelle email (`wallet.js:135,149`).
- **L5.** Il pagamento col Wallet registrato da **Modifica Wallet** (saldo che scende) applica il moltiplicatore del Wallet? `receipts.js:236-240` imposta `data.multiplier`, ma `:582-585` scrive in `receipt.extra_coins`, che per un accredito normale non esiste. Possibile errore quando il moltiplicatore è attivo.
