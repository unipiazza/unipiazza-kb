# Gruppo F: Vetrina, Cover Chiosco, immagini, dominio email, Modalità Vacanza, Recensioni (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Verificate sul codice del gestionale
(`unipiazza-web-partner-v2`, `master` al commit `2146b46`), sul sito (`unipiazza-web-user-v2`,
`origin/master`) e sul backend (`unipiazza-api`, letto con `gh api`). Righe della review coperte:
sezione 1 #8, #10, #11, #15, sezione 2 #12, le minori su 34556 e, della #18, cover a fasce orarie
e Recensioni.

---

## 1. 28255 Cos'è e a cosa serve la Vetrina? [[cos-e-e-a-cosa-serve-la-vetrina]]

Verificato su: gestionale `app/containers/ShopPage/ShopPage.tsx:302-323` (avviso cambio nome),
`:370-375`, `:420-460` (Nome, Nome Chiosco, Descrizione 600), `:560-605` (Icona, Logo, Categoria,
Colore solo con `custom_theme.active`), `:628-640` (copertine 16:10, `disabledUp` oltre 2 = max 3),
`:658-770` (contatti, Telefono obbligatorio, WhatsApp, Sito, Facebook, Instagram, TikTok),
`:776-795` (Salva modifiche, permesso, un punto vendita alla volta); `app/images/images.ts:201-264`
(62 icone); `ShopPage/ShopLogoModal.tsx:14-20, 360-420` (logo PNG/JPG, 512×512 consigliato, minimo
144×144, compare in cima alla Vetrina e sulla Home). Sito `app/containers/ShopPage/ShopPageView.tsx:45-50,
170-174` («Sul web» con Sito, Facebook, Instagram, TikTok), `ShopFooter.tsx:133`,
`ShopPage.tsx:521, 997-1001` (bottone WhatsApp).

Le prime sezioni (Come la vedono i tuoi clienti, catena, Home del telefono) restano uguali. Cambia
la sezione **Cosa puoi inserire**, che riscrivo da capo, e il link del Nota Bene.

**«Cosa puoi inserire», prima:** l'elenco con Nome, Descrizione, Indirizzo, Orari, Icona («25 icone»),
Categoria («52 categorie»), Immagini di Copertina, Email, Telefono, Facebook/Instagram/Sito.

**«Cosa puoi inserire», dopo:**

**Cosa puoi inserire**

Dalla sezione [Vetrina](https://partner.unipiazza.it/vetrina) del Gestionale scegli cosa mostrare ai tuoi clienti. Se hai più punti vendita, selezionane uno dal menu in alto, perché la Vetrina si modifica un locale alla volta. Quando hai finito premi **Salva modifiche** in fondo alla pagina. Se il bottone è grigio, il tuo utente non ha il permesso di modificare la Vetrina e te lo può dare il titolare del locale.

🏷️ **Nome attività commerciale**<br>È il nome che compare sulla Vetrina, nell'App Unipiazza e nell'intestazione delle campagne che mandi ai tuoi clienti.

⚠️ **Il nome decide anche l'indirizzo della Vetrina**<br>Se lo cambi, prima di salvare il Gestionale ti avvisa. L'indirizzo attuale smette di funzionare e ne nasce uno nuovo, costruito sul nuovo nome. QR Code stampati, volantini e link che hai già condiviso porterebbero a una pagina che non c'è più, quindi dopo il cambio scarica il nuovo QR Code e aggiorna tutto. Se vuoi cambiare solo il nome che si vede sul Chiosco, usa **Nome Chiosco**.

📟 **Nome Chiosco**<br>È il nome che compare sul tuo Chiosco Unipiazza. Se lo lasci vuoto usiamo il nome dell'attività.

📝 **Descrizione**<br>Racconta in breve la tua attività e i suoi punti di forza, fino a 600 caratteri spazi inclusi. Compare sulla Vetrina e nell'App, e la leggono anche i motori di ricerca.

📍 **Città, CAP e Indirizzo**<br>Sono obbligatori e mettono il tuo locale sulla mappa, così i clienti ti trovano senza giri a vuoto.

🕒 **Orari di Apertura**<br>Tienili sempre aggiornati, così nessuno trova la serranda abbassata! 😉 Ti spieghiamo come in [Come modificare gli orari di apertura](https://supporto.unipiazza.it/it/articles/71235-come-modificare-gli-orari-di-apertura) [[come-modificare-gli-orari-di-apertura]].

🎨 **Icona**<br>Scegli fra 62 icone quella che rappresenta meglio la tua attività.

🖼️ **Logo**<br>Premi **Carica il logo** e scegli un file PNG o JPG, meglio se di almeno 512×512 pixel (il minimo è 144×144). Lo ritagli quadrato, e compare in cima alla Vetrina e come icona sul telefono dei clienti che aggiungono la Vetrina alla schermata Home. Puoi cambiarlo o toglierlo quando vuoi.

🗂️ **Categoria merceologica**<br>Scegli la categoria che descrive meglio la tua attività.

🌈 **Colore Vetrina & Chiosco**<br>È il colore di bottoni, premi e icone sulla Vetrina e sul Chiosco. Lo trovi solo se per il tuo locale è attiva la grafica personalizzata.

📸 **Immagini copertina attività**<br>Sono le foto in cima alla Vetrina. Puoi caricarne fino a 3, e il Gestionale le ritaglia in formato 16:10. Le misure giuste le trovi in [Guida alle Risoluzioni delle Immagini su Unipiazza](https://supporto.unipiazza.it/it/articles/38701-guida-alle-risoluzioni-delle-immagini) [[guida-alle-risoluzioni-delle-immagini]].

(qui resta la tabella «💡Nota Bene!», con il link aggiornato, vedi sotto)

**I tuoi contatti**

✉️ **Indirizzo email**<br>Non compare sulla Vetrina. Serve ai clienti per risponderti quando ricevono le tue campagne email.

📞 **Telefono**<br>È obbligatorio e lo vedono tutti, sulla Vetrina e nell'App.

💬 **WhatsApp**<br>Se lo inserisci, sulla Vetrina compare il bottone di WhatsApp e i clienti ti scrivono con un tocco.

🌐 **Sito web, Facebook, Instagram e TikTok**<br>Inserisci i tuoi link e i bottoni compaiono nella sezione **Sul web** della Vetrina e in fondo alla pagina.

**Nota Bene, prima:** link a `https://unipiazza.customerly.help/it/vetrina/come-cambio-le-immagini-cover-che-compaiono-sul-chiosco`

**Nota Bene, dopo:** stesso testo, link a `https://supporto.unipiazza.it/it/articles/28259-come-cambio-le-immagini-cover-che-compaiono-sul-chiosco` [[come-cambio-le-immagini-cover-che-compaiono-sul-chiosco]]

---

## 2. 28259 Come cambio le immagini Cover che compaiono sul Chiosco? [[come-cambio-le-immagini-cover-che-compaiono-sul-chiosco]]

Verificato su: gestionale `app/containers/TabletCovers/TabletCoversPage.tsx:52-53, 119, 146-180`
(Crea › Cover Premio / Cover Generica, eliminazione), `MyDndContext.tsx:64-90` (colonne Cover Attive /
Cover Disattive, nessun interruttore), `PreviewCover.tsx:46, 224-230` (matita e cestino),
`TabletCoverForm.tsx:40-58` (stato calcolato dalle date, orario settimanale richiede la data di fine),
`:128-131` (ritaglio 16:10), `:159-242` (Premio collegato, Etichetta 60, Testo principale 80),
`:247-318` (date, fine al massimo fra un anno, date bloccate per Campagna Promo ed Evento), `:320-330`
(fasce orarie, punti vendita); `app/components/Timetable/Timetable.tsx:145-260` («Seleziona manualmente
i giorni», due fasce per giorno con «Aggiungi orario»); `Boosters/BoosterForm.tsx:658-675` e
`Subscriptions/SubscriptionForm.tsx:836-840` (spunte «Pubblicizza automaticamente»). Backend
`app/utils/campaign_tablet_cover.ts:48-90` (cover automatica solo per Promo ed Evento mandate a tutti i
clienti), `app/utils/tablet_covers.ts:204-218` (sotto le 2 cover attive ne aggiungiamo noi).
Nell'editor delle campagne non c'è nessuna spunta per il Chiosco.

**Paragrafo 2, prima:**
> La pagina ha due colonne, **Cover Attive** e **Cover Disattive**. Premi su una cover per modificarla. Nella finestra scegli la data di inizio e, se vuoi, spunti **Imposta una data di fine**, così la cover si disattiva da sola. Per crearne una nuova premi **Crea** in alto a destra e scegli **Cover Premio** o **Cover Generica**.

**Paragrafo 2, dopo:**
> La pagina ha due colonne, **Cover Attive** e **Cover Disattive**. Per crearne una nuova premi **Crea** in alto a destra e scegli **Cover Premio** (pubblicizza uno dei tuoi premi) o **Cover Generica** (per tutto il resto). Per cambiarne una premi la matita, per toglierla del tutto il cestino.
>
> Nella finestra della cover scegli l'immagine, scrivi il **Testo principale** (fino a 80 caratteri) e l'**Etichetta** che compare sopra (fino a 60), poi la **Data di inizio**. Se vuoi che si spenga da sola, spunta **Imposta una data di fine** (al massimo fra un anno). Se hai più punti vendita, scegli anche in quali deve comparire.

**Paragrafo 3, prima:**
> Dovrai avere sempre almeno due cover attive e potrai attivarle o disattivarle quando vuoi in base alle tue esigenze promozionali o stagionali.

**Paragrafo 3, dopo:**
> Non c'è un interruttore per accendere o spegnere una cover, perché a decidere sono le date. Una cover è attiva dalla data di inizio fino alla data di fine, e finita quella passa da sola tra le Disattive. Per toglierla prima, eliminala con il cestino oppure metti come data di fine un momento già passato. Sul Chiosco ci sono sempre almeno due cover, e se le tue attive sono meno di due ne aggiungiamo noi una del tuo programma fedeltà (per esempio un tuo premio).
>
> 🕒 **Solo in certi giorni e orari**<br>Vuoi una cover solo a pranzo o solo nel weekend? Spunta **Seleziona manualmente i giorni**, scegli i giorni e per ognuno l'orario. Con **Aggiungi orario** imposti una seconda fascia nello stesso giorno, per esempio 12:00-15:00 e 19:00-23:00. Per usare gli orari serve anche la data di fine.

**Box «Viva le automazioni!», prima:**
> Ogni volta che crei un abbonamento, un booster, invii una campagna promozione o evento, oppure attivi Wallet e GiftCard, puoi spuntare la funzione "Promuovi sul Chiosco Automaticamente" per far creare in automatico un'immagine Cover sul Chiosco. Sfrutta questa opzione per risparmiare tempo e ottimizzare le tue promozioni!

**Box «Viva le automazioni!», dopo:**
> **🥳Viva le automazioni!** Alcune cover nascono da sole. Quando crei un Booster o un Abbonamento, spunta **Pubblicizza automaticamente** e la cover la prepariamo noi. Quando mandi una Campagna Promo o Evento a tutti i tuoi clienti, la cover compare senza che tu debba fare nulla. Un Booster riservato a una lista di clienti, invece, non si può pubblicizzare sul Chiosco.

**Ultimo paragrafo, prima:**
> **Quanto dura una cover automatica?** Per le Campagne Promozione ed Evento, la cover creata in automatico segue le date della campagna. Compare alla data di inizio e si disattiva da sola alla fine dell'ultimo giorno, senza che tu debba fare nulla. Le cover che crei a mano, invece, restano attive finché non le disattivi tu dalla sezione Cover Chiosco, oppure fino alla data di fine, se l'hai impostata.

**Ultimo paragrafo, dopo:**
> **Quanto dura una cover automatica?** Per le Campagne Promo ed Evento la cover segue le date della campagna, e le sue date non si possono cambiare. Compare alla data di inizio e si disattiva da sola alla fine dell'ultimo giorno. Le cover che crei a mano restano attive fino alla data di fine, se l'hai impostata, oppure finché non le elimini.

**Esempio 6 (Booster), nota:** il testo cita Booster «Moltiplicatore» e «Gettoni Doppi». Lo lascio, è
del gruppo Booster (fork D) controllare i nomi.

---

## 3. 38701 Guida alle Risoluzioni delle Immagini su Unipiazza [[guida-alle-risoluzioni-delle-immagini]]

Verificato su: gestionale `app/containers/CreateCampaignPage/components.tsx:1069-1200` (`CropImage`:
ogni immagine caricata viene ridotta a 1280 pixel sul lato più lungo, i minimi di ritaglio sono in
pixel dello schermo e non dell'immagine), `ShopPage.tsx:634-637` (copertine Vetrina 16:10),
`TabletCovers/TabletCoverForm.tsx:128-131` (cover Chiosco 16:10), `AutomationsPage/components/AutomationMessageEditor.tsx:674-677`,
`CreateMarketingCampaignPage/MarketingContentEditor.tsx:1593-1596`,
`CreateWhatsappCampaignPage/WhatsappContentEditor.tsx:664-667` (ritaglio libero che parte da 1,91:1),
`ShopPage/ShopLogoModal.tsx:14-20` (logo). La review parlava di «Automazioni 600×300»: nel codice non
c'è, la misura vera è il ritaglio 1,91:1.

Il punto chiave è che il Gestionale riduce ogni immagine a 1280 pixel sul lato lungo, quindi
consigliare 1920×1200 per il Chiosco non serve. Riscrivo l'articolo da capo, tengo la foto 16:10 / 21:9
della Vetrina e la foto del tablet con l'interfaccia sopra.

**Description:** Le misure giuste per Vetrina, logo, Chiosco, campagne e Automazioni, così le tue foto escono sempre perfette.

**Testo:**

Una bella foto fa venire voglia di passare a trovarti, ma solo se si vede bene! 📸 Qui trovi le misure giuste per ogni immagine che carichi su Unipiazza.

Una regola vale per tutte. Quando carichi una foto dal Gestionale la ritagli e la salviamo al massimo a 1280 pixel sul lato più lungo. Partire da una foto più grande non dà un risultato migliore, mentre una foto troppo piccola si vede sgranata.

🏪 **Immagini copertina della Vetrina (Web & App)**<br>Formato 16:10, il ritaglio è già impostato. Carica foto di almeno 1280×800 pixel. Puoi metterne fino a 3.

(qui resta la foto del panificio e il Nota sul 21:9, senza modifiche)

🖼️ **Logo della Vetrina**<br>Quadrato, PNG o JPG. Meglio se di almeno 512×512 pixel, il minimo è 144×144.

📟 **Cover Chiosco**<br>Formato 16:10, il ritaglio è già impostato. Carica foto di almeno 1280×800 pixel.

(qui resta la foto del tablet e il Nota sugli elementi dell'interfaccia che coprono parte della cover)

📢 **Campagne Marketing, Campagne WhatsApp e Automazioni**<br>Il ritaglio parte in formato 1,91:1, quello delle anteprime dei link, ma puoi allargarlo o stringerlo come preferisci. Per il formato di partenza carica foto di almeno 1280×670 pixel.

Seguendo queste misure le tue immagini si vedono sempre al meglio, sul web, nell'App e sul Chiosco. 😉

**Cosa tolgo:** il blocco su Honor Pad X8a 1920×1200 e quello «prima di settembre 2025 1280×800»
(non servono più, perché tutto viene salvato a 1280×800), i minimi «480×300» e «300×300» (nel codice
sono misure del riquadro sullo schermo, non dell'immagine), il consiglio 16:10 per campagne e
Automazioni, e i due blocchi separati «Automazioni e Campagne» / «Campagne Generiche, Evento o Promo»
uniti in uno. Il Nota «Le campagne vengono mostrate via Email, RCS, Notifiche App, Chiosco Tablet e
Vetrina Web» non l'ho verificato e lo tolgo per non lasciare un'informazione non controllata.

---

## 4. 37235 Personalizza il Mittente delle Tue Campagne Email [[personalizza-il-mittente-delle-campagne-email]]

Verificato su: gestionale `app/containers/SettingsPage/SettingsPage.tsx:1038-1150` (card «Dominio
email personalizzato» senza condizioni di pacchetto, bottoni Aggiungi Dominio Email, Record DNS,
Verifica, Verificato, Invia Email di test, Elimina), `:275` (24-48 ore). Dodo ha confermato il 21/11
che è aperto a tutti i pacchetti.

**Introduzione, prima:**
> ... puoi farle apparire con il tuo dominio (es. info@tuosito.it). Questa funzionalità è dedicata ai clienti che hanno un pacchetto Elite o hanno acquistato una personalizzazione grafica extra.

**Introduzione, dopo:**
> ... puoi farle apparire con il tuo dominio (es. info@tuosito.it). Vale per le campagne email e per le Automazioni, e la puoi attivare con qualsiasi pacchetto.

**Passo 7, prima:**
> Potrebbero volerci fino a 24 ore per la propagazione del DNS, quindi in caso di ritardo aspetta un po' e premi di nuovo "Verifica".

**Passo 7, dopo:**
> La propagazione del DNS può richiedere dalle 24 alle 48 ore, quindi se il dominio non risulta ancora verificato aspetta un po' e premi di nuovo **"Verifica"**.

**Description:** «Guida passo-passo per i gestori…» resta uguale.

---

## 5. 30018 Cosa vedo nella sezione Impostazioni? [[cosa-vedo-nella-sezione-impostazioni]]

Verificato su: gestionale `SettingsPage.tsx:844` (Orario spegnimento solo con pacchetto Kiosk),
`:989` (WhatsApp con la funzione Whatsapp), `:995-1000` (RCH), `:1038-1041` (Dominio email per tutti),
`:1150-1154` (permessi amministratori solo se ci sono altri amministratori).

**Box «Non trovi un riquadro?», prima:**
> ... Chi ha la cassa collegata a RCH Cloud vede anche "ID Terminale RCH", chi ha un'app con il proprio marchio vede "Dominio email personalizzato" e chi ha più amministratori sullo stesso punto vendita vede "Gestisci i permessi degli amministratori".

**Box «Non trovi un riquadro?», dopo:**
> ... Chi ha la cassa collegata a RCH Cloud vede anche "ID Terminale RCH", e chi ha più amministratori sullo stesso punto vendita vede "Gestisci i permessi degli amministratori".

**Nuovo punto dopo «8. WhatsApp Business»** (il riquadro c'è per tutti e oggi l'elenco non lo nomina):
> 9. **Dominio email personalizzato:** Manda campagne email e Automazioni dal tuo indirizzo (es. info@tuosito.it) invece che da promo@unipiazza.it. Ti spieghiamo come in [Personalizza il Mittente delle Tue Campagne Email](https://supporto.unipiazza.it/it/articles/37235-personalizza-il-mittente-delle-campagne-email) [[personalizza-il-mittente-delle-campagne-email]].

«Modalità fun» diventa il punto 10. Il punto 1 (Modalità Vacanza) resta uguale.

---

## 6. 34556 Come attivare la Modalità Vacanza [[come-attivare-la-modalita-vacanza]]

Verificato su: gestionale `SettingsPage.tsx:780-843` (riquadro, date dal giorno prima in poi, Salva
grigio senza permesso), `app/containers/App/index.tsx:550-557, 1204-1225` (avviso giallo in cima al
Gestionale dal primo giorno di chiusura); backend `app/jobs/is_new_remover.ts:44-58` (finita la data
di fine la Modalità Vacanza si spegne da sola), `app/utils/automations/engine.ts` (salta solo le
Automazioni con una promozione, se la validità della promo tocca i giorni di chiusura),
`app/api_user/v1/templates/shops/partial.ts:180-190`; sito `app/components/ShopFinder/places.ts:82-87`
(«Chiuso fino al G/M»).

**«Cosa succede quando la attivi», prima:**
> I clienti vedranno la scritta "Chiuso fino al" nella pagina del tuo locale e non verranno inviate Promozioni Automatiche durante quel periodo.

**«Cosa succede quando la attivi», dopo:**
> 🏖️ **Sulla tua Vetrina**<br>Dal primo giorno di chiusura i clienti vedono la scritta **Chiuso fino al** con la data, al posto dell'orario di oggi.
>
> ⏸️ **Le Automazioni con una promozione si fermano**<br>Non partono se la promozione cadrebbe nei giorni in cui sei chiuso, così nessuno riceve un omaggio che non può ritirare. Le Automazioni senza promozione partono come sempre.
>
> 🔔 **Un promemoria nel Gestionale**<br>Finché sei in vacanza, in cima a ogni pagina del Gestionale vedi un avviso giallo con la data in cui la Modalità Vacanza si spegne.
>
> ✅ **Si spegne da sola**<br>Finite le date non devi ricordarti di toglierla, ci pensiamo noi. Se riapri prima, togli la spunta da **Attiva modalità vacanza** e premi **Salva**.

**Passo 3:** resta com'è («in "Al" il giorno in cui riapri») finché Lorenzo non risponde alla domanda
sotto, perché codice e Olivia non dicono la stessa cosa.

---

## 7. 27453 Cosa sono e come funzionano le Automazioni? (sezione Recensioni) [[cosa-sono-le-autopromo]]

Verificato su: gestionale `app/containers/AutomationsPage/catalog.ts:573-640` (piattaforme Google,
Tripadvisor, Facebook, blocco «Dove mandare la recensione», campo «La tua pagina»),
`components/ReviewLinkField.tsx:20-120` (per Google cerchi il nome del locale e il link si compila da
solo, per le altre piattaforme lo incolli), `payload.ts:579-584` (link obbligatorio, deve iniziare con
http:// o https://). La review diceva «link Google obbligatorio»: è obbligatorio il link, per qualunque
piattaforma.

**Paragrafo «📝 Recensioni», aggiunta in fondo:**
> In **Dove mandare la recensione** scegli la piattaforma e poi, in **La tua pagina**, il link dove i clienti scrivono la recensione. Con Google basta cercare il nome del tuo locale e il link lo troviamo noi. Con Tripadvisor e Facebook incolli il link della tua pagina. Il link è obbligatorio, e senza l'Automazione non si salva.

---

## Domande per Lorenzo

1. **Modalità Vacanza, il campo «Al».** Dal Gestionale le date si salvano come `YYYY-MM-DD`
   (`SettingsPage.tsx:336-347`), quindi «Al» vale come mezzanotte di quel giorno e la Vetrina torna
   aperta già quel giorno. L'azione di Olivia invece salva la fine giornata (`2030-08-20T21:59:59.999Z`
   nel test `assistant_shop_update_action.test.js`) e mostra «Dal … al … (inclusi)». Quale dei due è
   giusto? «Al» è il giorno in cui riapri o l'ultimo giorno di chiusura? L'articolo 34556 oggi dice
   «il giorno in cui riapri».
2. **Colore Vetrina & Chiosco.** Il campo compare solo con `custom_theme.active` (200 locali, sparsi
   fra Digital, Kiosk, KioskPlus e KioskElite). Chi lo attiva e per chi? Si può chiedere?
3. **Possibile bug Vetrina in vacanza.** In `app/api_user/v1/templates/shops/partial.ts:187` c'è
   `shop.holday = {}` (refuso di `holiday`). Se `shop.holiday` era già valorizzato, una vacanza salvata
   per il futuro potrebbe comparire sulla Vetrina prima del primo giorno. In più `openingStatus` sul
   sito (`places.ts:82`) guarda solo `holidayTo > now`, non la data di inizio.
