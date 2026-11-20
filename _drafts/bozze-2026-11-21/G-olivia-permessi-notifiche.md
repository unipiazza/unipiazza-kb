# Gruppo G — Olivia, lucchetti e catene, permessi, notifiche, Offerte Partner (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Verificate sul codice del gestionale
(`unipiazza-web-partner-v2`, `master` al commit `2146b46` del 20/11/2026), sul backend
`unipiazza-api` (via `gh api`) e su MongoDB per i tipi di notifica e le Offerte Partner.

Righe della review coperte: sezione 1 #14, sezione 2 #13, #14, #15, #16, #17.

---

## 1. 61975 Olivia, la tua Consulente Fedeltà AI [[olivia-la-tua-consulente-fedelta-ai]]

Verificato su: `app/containers/AssistantPage/AssistantPage.tsx:74-76, 112-130, 238-267, 293-345, 452-575`,
`hooks/useAssistantScope.ts` (catena), `components/AssistantActionCard.tsx:60-150`,
`components/BoosterAction.tsx:36-75`, `components/SubscriptionProductAction.tsx:50-70`,
`components/MarketingCampaignDraftAction.tsx`, `components/WhatsappCampaignDraftAction.tsx`,
`components/ShopUpdateAction.tsx` (anche il commit `2146b46` sul nome del locale),
`components/MessageFeedbackWidget.tsx:31-35`, `components/CopyMessageButton.tsx`,
`components/SessionListItems.tsx`, `assistantActions.ts:446-470`; backend
`app/classes/assistant/actions/` (`create_booster.ts`, `create_subscription_product.ts`, `update_shop.ts`, bozze campagne).

Sei modifiche, il resto resta uguale (crediti, Automazioni, consulenza con Roberta).

**«Come si accede», aggiunta in fondo alla sezione:**
> Olivia lavora su un punto vendita alla volta. Se hai più punti vendita e nel menu in alto hai scelto **Tutti**, ti chiede di sceglierne uno. Fanno eccezione le catene che condividono lo stesso programma fedeltà, dove puoi parlarle di tutti i punti vendita insieme. In quel caso in cima alla pagina vedi **Stai parlando con Olivia su tutti i punti vendita della catena selezionata**.

**Nuova sezione, dopo «Olivia e le Automazioni»:**
> ## Cosa può creare per te
>
> Oltre a consigliarti, Olivia può preparare alcune cose al posto tuo. Te le mostra in una scheda dentro la chat, con i dettagli di quello che farà, e tu scegli se confermare o premere **Annulla**.
>
> 📣 **Bozze di campagne Marketing e WhatsApp**<br>Ti prepara testo, destinatari e una proposta di programmazione. Premendo **Crea bozza** la campagna finisce tra le tue bozze e non parte nessun invio. La apri con **Apri campagna**, la controlli e la mandi tu quando vuoi.
>
> 🚀 **Booster**<br>Qui non c'è nessuna bozza. Premendo **Conferma** il Booster viene creato subito e parte da solo alla data di inizio proposta, che è sempre nel futuro. Lo ritrovi nella sezione Booster ma non viene promosso sul Chiosco Unipiazza.
>
> 🎟️ **Abbonamenti**<br>Anche l'abbonamento viene creato subito, appena premi **Crea abbonamento**. Lo vedi nel Gestionale, ma non viene promosso sul Chiosco.
>
> 🏪 **Dati della tua Vetrina**<br>Può proporti di cambiare descrizione, indirizzo, Instagram, numero WhatsApp, nome sul Chiosco, colore, orari e chiusura per ferie. Premendo **Conferma modifica** le modifiche vanno subito online. Occhio al nome, perché cambiandolo cambia anche l'indirizzo della tua Vetrina. Se hai una catena, il titolo della scheda ti dice quale punto vendita stai modificando.
>
> ⏳ **Proposta scaduta?**<br>Se una scheda ti dice **Proposta scaduta** o che la modifica non è stata applicata, chiedi a Olivia di rifartela. Ti prepara una proposta nuova con i dati aggiornati.

**«Prepara, tu decidi», prima:**
> Olivia ti propone idee, scrive i testi, prepara le bozze delle campagne e le modifiche alle Automazioni. Senza la tua conferma non parte niente.

**«Prepara, tu decidi», dopo:**
> Olivia ti propone idee, scrive i testi, prepara le bozze delle campagne e le modifiche alle Automazioni. Senza la tua conferma non parte niente. Ricorda però che Booster, abbonamenti e modifiche alla Vetrina partono appena confermi, non restano in bozza.

**«È un'AI, e te lo dice», aggiunta in fondo:**
> Olivia è ancora in beta e può sbagliare, quindi controlla sempre i numeri più importanti prima di prendere una decisione.

**«Dove ritrovi le conversazioni», prima:**
> Le conversazioni con Olivia restano salvate. Nella sua pagina passa il mouse sulla colonna a sinistra e si apre l'elenco **Conversazioni recenti**. Premi su una conversazione per riprenderla da dove l'avevi lasciata, oppure su **Nuova conversazione** per cominciarne un'altra.

**«Dove ritrovi le conversazioni», dopo:**
> Le conversazioni con Olivia restano salvate. Nella sua pagina le trovi nella colonna **Conversazioni** a sinistra. Premi su una conversazione per riprenderla da dove l'avevi lasciata, oppure su **Nuova conversazione** per cominciarne un'altra. Se una conversazione non ti serve più, la togli con **Elimina conversazione**. La colonna si chiude con l'icona in alto, e dal telefono la apri con l'icona dei messaggi in alto a sinistra.
>
> Ogni punto vendita ha le sue conversazioni, quindi se cambi locale dal menu in alto vedi solo quelle di quel locale.
>
> 👍 **Dicci se la risposta ti è servita**<br>Sotto ogni risposta trovi **Risposta utile** e **Risposta non utile**. Se scegli la seconda puoi dirci cosa non ha funzionato (**Non ha capito la domanda**, **Informazioni non corrette** o **Altro**) e aggiungere un dettaglio. Leggiamo tutto e ci serve per far crescere Olivia. Con **Copia la risposta** invece copi il testo per incollarlo dove vuoi.

**«Quando ti serve una persona», prima:**
> Per i problemi tecnici (il Chiosco Unipiazza offline, WhatsApp bloccato, un pagamento, i crediti finiti) scrivici dalla chat dell'assistenza, il pulsante in basso a destra nel Gestionale, oppure su WhatsApp al **388 8665987**.

**«Quando ti serve una persona», dopo:**
> Per i problemi tecnici (il Chiosco Unipiazza offline, WhatsApp bloccato, un pagamento, i crediti finiti) scrivici dalla chat dell'assistenza, il pulsante in basso a destra nel Gestionale, oppure su WhatsApp al **388 8665987**. Nella pagina di Olivia il pulsante della chat non c'è, per lasciare spazio al campo dove scrivi. Ti basta passare a un'altra sezione e lo ritrovi al suo posto.

Domanda per Lorenzo: quando diventa «scaduta» una proposta di Olivia? Nel backend lo stato `expired`
esiste nel modello (`assistant_action_proposal.ts`) ma non ho trovato chi lo imposta, né una durata.
Se c'è una scadenza a tempo, nell'articolo la scriviamo.

Fuori dal mio gruppo, da sistemare in 61976: l'ultimo paragrafo rimanda a «Inviare una campagna senza
approvazione» (61971), che va riscritto perché l'invio diretto è spento.

---

## 2. NUOVO — Perché vedo un lucchetto o una pagina «Scegli un punto vendita»?

Verificato su: `app/components/Drawer/index.tsx:260-285, 486-497, 584-608` (lucchetti nel menu e
funzioni sommate con «Tutti»), `app/components/SectionDisabled/SectionDisabled.tsx` (bottone
«Contattaci in chat»), `app/containers/Boosters/BoostersPage.tsx:309-330`,
`app/containers/Subscriptions/SubscriptionsPage.tsx:326-340`,
`app/containers/AutomationsPage/components/ScopeGate.tsx`, `app/containers/Wallets/WalletsPage.tsx:510, 714-735`,
`app/containers/Wallets/SettingsPage.tsx:186-198`, avvisi `SelectShopNotice` in
`AssistantPage.tsx:250`, `PrizesPage.tsx:165`, `ShopPage.tsx:786`, `SettingsPage.tsx:766`,
`Invoices/InvoicesPage.tsx:207`, `DevicesPage.tsx:613`, `PartnerTokenPage.tsx:152`,
`CalendarioEventiPage.tsx:365`, `CustomerPage/MyUserGenericInfo.tsx:302-306`.

**Frontmatter proposto:**
```yaml
collection_id: 7179
collection: 🏠 Riepilogo
title: Perché vedo un lucchetto o la pagina «Scegli un punto vendita»?
slug: perche-vedo-un-lucchetto-o-scegli-un-punto-vendita
description: Niente di rotto! Ti spieghiamo cosa vuol dire il lucchetto nel menu e perché alcune sezioni vogliono un punto vendita alla volta.
status: published
written_by: 2961
keywords:
  - lucchetto
  - sezione bloccata
  - upgrade
  - pacchetto
  - punto vendita
  - catena
  - tutti i punti vendita
  - pagina vuota
```

**Testo:**

Hai aperto una sezione del Gestionale e l'hai trovata con un lucchetto, oppure al posto dei dati c'è solo un invito a scegliere un punto vendita? Tranquillo, non si è rotto niente. Sono due cose diverse e ti spieghiamo come funzionano. 😊

## Il lucchetto 🔒

Nel menu a sinistra **Abbonamenti**, **Automazioni** e **Booster** possono comparire con un lucchetto davanti. Vuol dire che quella funzione non è inclusa nel tuo pacchetto.

Puoi aprire la sezione lo stesso. Dentro trovi una pagina che ti racconta cosa potresti fare con quella funzione, con il bottone **Contattaci in chat**. Il Wallet non ha il lucchetto nel menu, ma se non è attivo la sua pagina funziona allo stesso modo e ti invita ad attivarlo.

🔓 **Come si sblocca**<br>Basta aggiungere la funzione al tuo pacchetto. Scrivici in chat o chiedi al tuo referente commerciale, ti diciamo noi costi e tempi.

🏪 **Hai più punti vendita?**<br>Con **Tutti** selezionati nel menu in alto, il lucchetto sparisce se almeno uno dei tuoi locali ha quella funzione. Per sapere quali la hanno davvero, scegli i punti vendita uno alla volta.

## «Scegli un punto vendita»

Se hai più punti vendita e nel menu in alto hai scelto **Tutti**, alcune sezioni non ti mostrano i dati e ti chiedono di sceglierne uno. Succede perché lì si lavora un locale alla volta, così non rischi di cambiare per sbaglio le impostazioni di tutti.

Ecco dove ti succede:

1. **Premi**, che si vedono e si modificano locale per locale.
2. **Vetrina** e **Impostazioni**.
3. **Impostazioni del Wallet**, tranne che nelle catene (vedi sotto).
4. **Piano & Consumi**, con piano, consumi e fatture.
5. **Dispositivi**, per generare il codice di collegamento.
6. **Integrazioni API**, per creare le chiavi.
7. **Calendario eventi**.
8. **Olivia**, tranne nelle catene che condividono lo stesso programma fedeltà.
9. **Automazioni**, tranne quando i tuoi locali formano un brand o una catena con le stesse Automazioni.
10. **Profilo cliente**, dove con **Tutti** selezionati il bottone **Azioni** resta grigio.

Ti basta scegliere il locale dal menu in alto e la sezione si riempie.

🔁 **Il caso del Wallet nelle catene**<br>Se i tuoi punti vendita formano una catena con lo stesso Wallet, le sue impostazioni sono uguali dappertutto. Qui è il contrario, per modificarle devi scegliere **Tutti** i punti vendita.

## Bottoni grigi e «Non hai i permessi»

Se un bottone è grigio e passandoci sopra leggi **Non hai i permessi per questa funzionalità**, la sezione c'è ma il tuo utente non può usarla. I permessi li decide il titolare del locale, come spieghiamo in [Come gestire i permessi degli amministratori](LINK-DA-CREARE) [[come-gestire-i-permessi-degli-amministratori]].

Non ti torna qualcosa? Scrivici su WhatsApp al **388 8665987**, siamo qui per aiutarti!

---

## 3. NUOVO — Come gestire i permessi degli amministratori

Verificato su: `app/containers/SettingsPage/SettingsPage.tsx:164-177, 222-230, 423-546, 1150-1182`
(riquadro, sezioni, colonne, salvataggio), backend `app/api_partner/v1/controllers/admin.js:68-82`
(la lista amministratori arriva solo a chi ha `admins_permission_code == 10`, esclusi gli utenti
Unipiazza e i super admin), `app/containers/CustomerPage/MyUserGenericInfo.tsx:136-186`
(permessi delle azioni sul cliente), `app/containers/AutomationsPage/components/ScopeGate.tsx:50-56`,
`app/containers/Invoices/InvoicesPage.tsx:291` (fatture), 21 tooltip «Non hai i permessi per questa
funzionalità» in Booster, Abbonamenti, Clienti, Vetrina, Cover Chiosco, Impostazioni, Wallet.

**Frontmatter proposto:**
```yaml
collection_id: 7257
collection: ⚙️ Impostazioni
title: Come gestire i permessi degli amministratori
slug: come-gestire-i-permessi-degli-amministratori
description: Decidi tu cosa può vedere e cosa può modificare ogni persona del tuo team nel Gestionale.
status: published
written_by: 2961
keywords:
  - permessi
  - amministratori
  - collaboratori
  - dipendenti
  - non hai i permessi
  - bottone grigio
  - accesso gestionale
  - ruoli
```

**Testo:**

Nel tuo locale il Gestionale lo usano anche altre persone? Magari il responsabile di sala che accredita i gettoni, o la socia che segue le campagne. Con i permessi decidi tu cosa può vedere e cosa può cambiare ognuno, sezione per sezione. 🔐

## Dove si trovano

**1. Scegli il punto vendita**<br>Se hai più punti vendita, selezionane uno dal menu in alto, perché le Impostazioni si aprono un locale alla volta.

**2. Vai in Impostazioni**<br>Scorri fino al riquadro **Gestisci i permessi degli amministratori**.

**3. Apri il nome della persona**<br>Premi sul nome e si apre la tabella dei suoi permessi.

**4. Spunta quello che può fare**<br>Per ogni sezione hai due caselle. **Visualizzazione** vuol dire che la vede, **Modifica** che può anche cambiarla.

**5. Premi Salva**<br>Quando compare **Permessi salvati con successo** è fatta.

💡 Il riquadro lo vede solo il titolare del profilo, e compare solo se sul punto vendita ci sono altri amministratori.

## Le sezioni che puoi controllare

📋 **Visite in Storico Azioni**<br>Con Modifica può accreditare gettoni e correggere le visite.

🎁 **Premi in Storico Azioni**<br>Con Modifica può scaricare i premi ai clienti.

👥 **Clienti**<br>Con Modifica può inserire numero, email e compleanno ed eliminare un cliente.

📝 **Note Clienti**, **Lista Premi**, **Abbonamenti**, **Campagne**, **Wallet**, **GiftCard**, **Booster**<br>Ognuna con la sua Visualizzazione e la sua Modifica.

⚙️ **Autopromo**<br>Sono le Automazioni. Senza Visualizzazione, aprendo la sezione legge **Non hai i permessi per vedere le automazioni**.

🏪 **Vetrina e Impostazioni**<br>La Visualizzazione è sempre attiva, puoi decidere solo se può modificarle.

🧾 **Piano & Consumi**<br>Qui c'è solo Visualizzazione. Senza, non vede le fatture.

## Cosa vede chi non ha un permesso

I bottoni delle azioni che non può fare restano grigi. Passandoci sopra legge **Non hai i permessi per questa funzionalità**, così sa subito che non è un errore del Gestionale e che deve chiedere a te.

## Aggiungere una persona nuova

Dal Gestionale gestisci i permessi delle persone che hanno già un accesso. Per dare l'accesso a una persona nuova, scrivici con nome ed email e la aggiungiamo noi.

Hai un dubbio su chi deve vedere cosa? Scrivici su WhatsApp al **388 8665987**, ti aiutiamo a organizzare il tuo team!

Domande per Lorenzo prima di pubblicare:
1. Chi ha `admins_permission_code == 10`? Ho scritto «il titolare del profilo». È giusto, e un locale può averne più di uno?
2. I permessi valgono per il punto vendita selezionato o per tutti i locali della persona? Il salvataggio passa `currentShop.id`, ma `admin_shop_permissions` sull'utente è un oggetto solo.
3. Un nuovo amministratore si aggiunge solo tramite assistenza? Nel gestionale non ho trovato un comando per invitarlo.
4. «Campagne» copre anche le campagne WhatsApp e il Calendario eventi?

Refuso da segnalare: nella tabella dei permessi la riga si chiama ancora **Autopromo** (`SettingsPage.tsx:478`), va rinominata **Automazioni**. Stessa cosa nella pagina upsell «Sblocca le Autopromo» (`ScopeGate.tsx:26`) e nella scheda di Olivia «Sto aggiornando l'Autopromo...» (`AutopromoStatusAction.tsx`).

Da collegare dopo la pubblicazione: 30018 [[cosa-vedo-nella-sezione-impostazioni]] (riquadro
«Gestisci i permessi degli amministratori» nel box «Non trovi un riquadro?») e il nuovo articolo sul lucchetto.

---

## 4. NUOVO — Le notifiche del Gestionale

Verificato su: `app/containers/App/index.tsx:588-625` (dove porta ogni notifica), `:923-990`
(pannello «Notifiche» con il nome del locale), `:1040-1055, 1160-1180` (campanella con il numero),
`:1005-1010, 1101` (bottone delle push accanto al selettore del locale),
`app/components/PushNotificationButton/index.tsx` (stati e testi), backend `app/utils/notifier.ts:265-300`
(`push_partner` salva la notifica e la manda ai browser registrati), MongoDB `notifications`
(scope `shop`, settembre-novembre 2026) per i tipi più frequenti.

**Frontmatter proposto:**
```yaml
collection_id: 7179
collection: 🏠 Riepilogo
title: Le notifiche del Gestionale
slug: le-notifiche-del-gestionale
description: Nuovi clienti, campagne inviate, Booster usati. Ecco dove li trovi e come farteli arrivare anche a Gestionale chiuso.
status: published
written_by: 2961
keywords:
  - notifiche
  - campanella
  - notifiche push
  - avvisi
  - nuovo cliente
  - notifiche bloccate
```

**Testo:**

Il Gestionale ti avvisa quando succede qualcosa di importante nel tuo programma fedeltà. Un cliente nuovo, una campagna partita, un Booster che sta andando forte... e anche le cose da sistemare. 🔔

## Dove trovi le notifiche

In alto a destra c'è la **campanella delle notifiche**, con un numero blu quando ce ne sono di nuove. Premila e si apre il pannello **Notifiche**, con le più recenti in cima. Sotto il titolo vedi a quale punto vendita si riferiscono, oppure tutti, se nel menu in alto hai scelto **Tutti**.

Premi su una notifica e il Gestionale ti porta dritto alla sezione giusta.

## Cosa ti segnaliamo

👋 **Nuovi clienti**<br>Quando qualcuno si iscrive, anche da **Invita un Amico**, e quando raggiungi l'obiettivo iscritti del mese.

🎯 **Campagne**<br>Quando una campagna parte, quando arrivano i risultati e quando è un po' che non scrivi ai tuoi clienti.

⭐ **Booster**<br>Quanti clienti lo hanno usato e i risultati finali.

📱 **Dispositivi**<br>Quando un dispositivo chiede di collegarsi al tuo locale e quando viene collegato.

## Le notifiche push

Vuoi ricevere gli avvisi anche quando il Gestionale è chiuso? Attiva le notifiche push del browser, ti arrivano le stesse notifiche della campanella.

**1. Trova la campanellina accanto al nome del locale**<br>Dal computer è vicino al menu dei punti vendita, dal telefono in alto a sinistra accanto al menu. Passandoci sopra leggi **Attiva notifiche push**.

**2. Premila e dai il permesso**<br>Il browser ti chiede se vuoi ricevere le notifiche da Unipiazza. Rispondi di sì.

**3. Fatto!**<br>Compare **Notifiche push attivate!** e la campanellina sparisce, perché non serve più.

🚫 **La campanellina è grigia?**<br>Se leggi **Notifiche bloccate dal browser**, in passato hai detto di no alle notifiche. Riattivale dalle impostazioni del sito nel tuo browser (di solito dal lucchetto accanto all'indirizzo) e ricarica la pagina.

🍏 **Hai un iPhone o un iPad?**<br>Lì le notifiche push arrivano solo se apri il Gestionale dall'icona sulla Home. Premendo la campanellina ti mostriamo come aggiungerla, ed è la stessa procedura che trovi in [Il gestionale sulla Home del telefono](https://supporto.unipiazza.it/it/articles/37647-come-accedere-velocemente-al-gestionale-partner-da-smartphone) [[come-accedere-velocemente-al-gestionale-partner-da-smartphone]].

Non ti arriva niente? Scrivici su WhatsApp al **388 8665987**, controlliamo insieme!

Refuso da segnalare: con tutti i punti vendita selezionati il pannello dice «Di tutti i 3 i punti vendita», con una «i» di troppo (`App/index.tsx:931`).

---

## 5. NUOVO — Le Offerte Partner

La pagina è raggiungibile dal menu laterale per tutti i pacchetti (voce **Offerte Partner**,
`Drawer/index.tsx:656-664`, nessuna condizione), quindi la riga non si scarta.

Verificato su: `app/containers/ConvenzioniPage/ConvenzioniPage.tsx` (titolo, sottotitolo, filtri
«Mostra» e «Adatte a», scheda con «🎁 Offerta» e «📃 Condizioni»), MongoDB `partner_conventions`
(13 offerte al 21/11/2026, tipologie Formazione & Consulenza, Contabilità & Amministrazione,
Strumenti Digitali, Pagamenti & Cassa).

**Frontmatter proposto:**
```yaml
collection_id: 7179
collection: 🏠 Riepilogo
title: Cosa sono le Offerte Partner?
slug: cosa-sono-le-offerte-partner
description: Sconti e vantaggi riservati a chi usa Unipiazza, su servizi e strumenti utili per la tua attività.
status: published
written_by: 2961
keywords:
  - offerte partner
  - convenzioni
  - sconti
  - vantaggi
  - partner
```

**Testo:**

Usare Unipiazza ha un vantaggio in più. Nella sezione **Offerte Partner** trovi sconti e condizioni speciali che abbiamo concordato per te con aziende e professionisti che lavorano con le attività come la tua. 🎁

## Cosa trovi

Le offerte sono divise per tipologia, per esempio **Formazione & Consulenza**, **Contabilità & Amministrazione**, **Strumenti Digitali** e **Pagamenti & Cassa**. Ogni tanto ne aggiungiamo di nuove, quindi passa a dare un'occhiata.

## Come si usa

**1. Apri Offerte Partner**<br>La trovi nel menu a sinistra.

**2. Filtra quello che ti interessa**<br>Con **Mostra** scegli la tipologia, con **Adatte a** il tipo di attività. Se non esce niente, prova con un'altra combinazione.

**3. Premi su un'offerta**<br>Si apre la scheda con la descrizione del partner, cosa ti offre (**🎁 Offerta**) e come ottenerlo (**📃 Condizioni**).

Le offerte sono gestite dai partner, quindi per attivarle segui le condizioni scritte nella scheda. Se qualcosa non ti è chiaro, scrivici su WhatsApp al **388 8665987** e ti aiutiamo noi!

Domanda per Lorenzo (o Dodo): le condizioni spiegano sempre come riscattare l'offerta, oppure in
qualche caso bisogna passare da noi? Se c'è un passaggio con l'assistenza, lo scriviamo al punto 3.
