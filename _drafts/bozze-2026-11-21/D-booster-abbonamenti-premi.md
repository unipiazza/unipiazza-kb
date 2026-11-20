# Gruppo D — Booster, Abbonamenti e Premi (21/11/2026)

← [[review-funzionalita-gestionale-2026-11-20]] · [[KB]]

Bozze da approvare prima della pubblicazione su Customerly. Verificate sul codice del gestionale
(`unipiazza-web-partner-v2`, `master` al commit `2146b46`) e del backend (`unipiazza-api`, letto con
`gh api` il 21/11/2026). Righe della review coperte: sezione 2 #5 e #6, minori della sezione 1 su
27455 e 41597, voci di sezione 2 #18 su premi e gettoni.

---

## 1. 27455 Come creo e attivo un Booster? [[come-creo-e-attivo-un-booster]]

Verificato su: `app/containers/Boosters/BoosterForm.tsx:421-444` (Attiva/Disattiva solo dentro il periodo),
`:470-525` (x1,5 / x2 / x3, Gettoni Bonus minimo 10), `:580-596` (Clienti a cui è rivolto il Booster),
`:658-676` (Dettagli, vetrina Chiosco bloccata dopo il salvataggio e con le liste), `:325-331` e `:747-765`
(Elimina booster senza finestra di conferma), `BoostersPage.tsx:108-116` (colonna Stato).

**Punto 2, Moltiplicatore Gettoni, prima:**
> Ad esempio, se di solito guadagnano 10 gettoni per ogni euro speso, con un moltiplicatore x2, ne guadagneranno 20. Se scegli x3, per ogni euro speso riceveranno 30 gettoni.

**Punto 2, Moltiplicatore Gettoni, dopo:**
> Puoi scegliere x1,5, x2 o x3. Se di solito guadagnano 10 gettoni per ogni euro speso, con x1,5 ne guadagnano 15, con x2 ne guadagnano 20 e con x3 ne guadagnano 30.

**Punto 2, Gettoni Bonus, aggiunta in fondo:**
> Il minimo è 10 gettoni bonus.

**Nuovo punto 3, dopo il Tipo di Booster (i punti successivi scalano di un numero):**
> 3.  **Scegli a chi è rivolto:** Nel riquadro **Clienti a cui è rivolto il Booster** puoi riservarlo a una o più liste di clienti, per esempio i tuoi VIP. Se lasci il campo su **Tutti i clienti**, vale per tutti. Ti spieghiamo come funziona in [Come riservare Premi e Booster a una lista di clienti](https://supporto.unipiazza.it/it/articles/<id>-come-riservare-premi-e-booster-a-una-lista-di-clienti) [[come-riservare-premi-e-booster-a-una-lista-di-clienti]].

**Punto Dettagli (diventa 6), aggiunta in fondo:**
> L'opzione della vetrina Chiosco si sceglie solo quando crei il Booster, dopo il primo salvataggio non si cambia più. Se hai riservato il Booster a una lista resta spenta, perché il Chiosco lo vedrebbero anche i clienti che non possono usarlo.

**Nuova sezione, prima del riquadro «Ricordati di promuovere i Booster!»:**

> ## Come metto in pausa o elimino un Booster
>
> Vai in **Booster vendite** e premi sul Booster che vuoi cambiare.
>
> ⏸️ **Metterlo in pausa**<br>Sotto il nome trovi **🚫 Disattiva booster**. Premilo e il Booster smette di dare gettoni extra, e nella lista lo vedi come **Non attivo**. Quando vuoi farlo ripartire premi **✅ Attiva booster**. Il bottone compare solo fra la data di inizio e quella di fine del Booster.
>
> ✏️ **Cambiare le impostazioni**<br>Nome, tipo, valore, clienti, date, giorni e orari li modifichi quando vuoi, poi premi **Salva**. L'unica cosa che non cambia più è l'opzione per pubblicizzarlo sulla vetrina Chiosco.
>
> 🗑️ **Eliminarlo per sempre**<br>In fondo alla pagina premi il bottone rosso **Elimina booster**. Occhio, perché il Gestionale non ti chiede conferma e il Booster sparisce subito. Se pensi di riusarlo più avanti, meglio metterlo in pausa.
>
> Se **Salva** ed **Elimina booster** sono grigi, il tuo utente non ha il permesso di modificare i Booster, e te lo può dare il titolare del locale.

---

## 2. 28249 Come si crea un Abbonamento? [[come-si-crea-un-abbonamento]]

Verificato su: `app/containers/Subscriptions/SubscriptionForm.tsx:458-479` (Attiva/Disattiva abbonamento),
`:505-720` (nome, offerta, prezzi e quantità `disabled={!!subscriptionToUpdate}`), `:282-285` e `:812-833`
(punti vendita, stesso rapporto gettoni per euro, non si tolgono quelli già scelti tramite
`CreateCampaignPage/components.tsx:484-490`), `:835-841` (Dettagli), `:924-950` (Elimina con conferma),
`SubscriptionsPage.tsx:140-148` e `:270-277` (Stato e messaggio «Abbonamento disattivato»),
`CustomerPage/ModalSubscriptionDischarge.tsx:242-245` (si aggiungono ai clienti solo gli abbonamenti attivi,
quelli già comprati restano nel profilo), backend `app/api_partner/v2/controllers/subscription_products.js:250`
(disattivato, la cover sul Chiosco si spegne).

**Punto Prezzo e Quantità, aggiunta in fondo:**
> Sceglili con calma, perché dopo il salvataggio nome, offerta, prezzi e quantità non si possono più cambiare.

**Nuovo punto, dopo Anteprima Abbonamento (solo con più punti vendita):**
> -   **Punti vendita:** Se hai più punti vendita, scegli dove sarà attivo l'abbonamento. Devono dare tutti gli stessi gettoni per euro, altrimenti il Gestionale non ti fa salvare.

**Nuova sezione, prima del riquadro «Ricordati di promuoverli»:**

> ## Cosa posso cambiare dopo averlo salvato?
>
> Vai in **Abbonamenti** e premi sull'abbonamento che vuoi cambiare.
>
> 🔒 **Resta com'è**<br>Nome, tipo di offerta, prezzo singolo, quantità, prezzo scontato e prodotti in omaggio non si cambiano più. Se vuoi un prezzo o una quantità diversi, crea un abbonamento nuovo e disattiva quello vecchio.
>
> ✏️ **Si può cambiare**<br>L'icona, l'opzione per pubblicizzarlo sulla vetrina e, se hai più punti vendita, i punti vendita in cui è attivo. Puoi aggiungerne di nuovi, ma non togliere quelli già scelti.
>
> ## Come disattivo o elimino un Abbonamento
>
> ⏸️ **Toglierlo dalla vendita**<br>Sotto il nome premi **🚫 Disattiva abbonamento**. Nella lista lo vedi come **Non attivo**, non puoi più aggiungerlo ai clienti dal Gestionale e la sua pubblicità sul Chiosco si spegne. Chi l'ha già comprato lo trova ancora nel suo profilo, e da **Gestisci abbonamenti** continui a scalarlo come sempre. Per rimetterlo in vendita premi **✅ Attiva abbonamento**.
>
> 🗑️ **Eliminarlo**<br>In fondo alla pagina premi **Elimina abbonamento** e conferma con **Elimina**. Prima però controlla che nessun cliente lo stia ancora usando, perché chi ha ancora dei prodotti da ritirare non potrà più completarlo. Se hai dubbi, disattivalo e basta.

---

## 3. 41597 Come resetto i gettoni dei miei clienti? [[come-resettare-i-gettoni-dei-miei-clienti]]

Verificato su: `app/containers/SettingsPage/ResetLoyaltyBox.tsx:76-77` (grigio con tutti i punti vendita o
senza permesso), `:100-118` (catena con reset già programmato), `:215-235` (reset entro 24 ore senza
promemoria), `:238-265` (Annulla reset con promemoria già partiti), `:268-355` (regole dei promemoria a 14 e 2
giorni), `:380-525` (un reset alla volta, solo liste personalizzate, lista vuota), `:590-596` (avviso catena).

Nota per la pubblicazione: oggi l'articolo ha `written_by: 45263`. Con l'upsert va messo `2961` come da regola.

**Dopo «Cerca la sezione Resetta i gettoni clienti», aggiunta:**
> Se hai più punti vendita, selezionane uno dal menu in alto, perché con tutti selezionati i bottoni restano grigi. Serve anche il permesso di modificare le impostazioni del locale.

**Sezione per lista, punto 1, prima:**
> Nella sezione **"Resetta i gettoni per lista"**, seleziona la **lista** dal menu a tendina (vedrai anche quanti clienti ne fanno parte).

**Sezione per lista, punto 1, dopo:**
> Nella sezione **"Resetta i gettoni per lista"**, seleziona la **lista** dal menu a tendina (vedrai anche quanti clienti ne fanno parte). Puoi scegliere solo le liste che hai creato tu, non quelle preimpostate come Vip o Inattivi. Se la lista non ha clienti, il bottone resta grigio.

**Nuova sezione, dopo «In entrambi i casi il reset avverrà alle 23:59…» e prima delle immagini dei promemoria:**

> ## Quando partono i promemoria
>
> 📅 **Reset fra almeno 14 giorni**<br>Partono tutti e due i promemoria, 14 e 2 giorni prima. Prima di confermare il Gestionale ti mostra le date esatte.
>
> ⏰ **Reset fra meno di 14 giorni**<br>Il primo promemoria non fa in tempo, quindi parte solo quello a 2 giorni. Il Gestionale te lo segnala con **Manca il promemoria a 14 giorni**.
>
> ⚡ **Reset fra meno di 2 giorni**<br>Non parte nessun promemoria. Se il reset è entro 24 ore il Gestionale ti chiede di confermarlo, ricordandoti che i clienti non verranno avvisati.
>
> ## Da sapere
>
> 🔁 **Un reset alla volta**<br>Finché c'è un reset programmato, nel riquadro vedi data e ora (e, se è per lista, quale lista e quanti clienti coinvolge), e non puoi programmarne un altro. Per cambiarlo premi **Annulla reset** e rifallo da capo.
>
> 📨 **Annullare dopo i promemoria**<br>Puoi annullare anche dopo che è partito un promemoria, ma il messaggio ai clienti ormai è arrivato. Il Gestionale te lo ricorda prima di annullare, e ti conviene avvisarli tu che i gettoni restano.
>
> 🏪 **Se i tuoi punti vendita condividono i gettoni**<br>Il reset vale per tutta la catena, e il Gestionale te lo ricorda con **Questo reset dei gettoni coinvolgerà tutta la catena**. Per la catena c'è un solo reset programmato alla volta, quindi se un altro punto vendita l'ha già fissato, vedi **Esiste già un reset coins programmato per questa catena**.

---

## 4. 28264 Come creo un premio? [[come-creo-un-premio]]

Verificato su: `app/containers/PrizesPage/EditableTable.tsx:450-461` (colonna Clienti), `:470-505`
(cestino, «Vuoi eliminare questo Premio?», «Devi lasciare almeno un premio visibile»), `:368` e `:769-776`
(la modifica resta solo con Salva). La riga «visibili a tutti» oggi è falsa per i premi riservati a una lista
(backend `app/api_user/v1/controllers/shops.ts:683-689`).

**Prima:**
> Tieni a mente: i premi che crei saranno visibili a tutti, sul sito, sull'App e sul Chiosco nel tuo locale.

**Dopo:**
> Tieni a mente che i premi che crei li vedono tutti, sulla tua Vetrina, sull'App e sul Chiosco nel tuo locale. Se vuoi un premio solo per alcuni clienti, per esempio i VIP, scegli la lista nella colonna **Clienti**, come spieghiamo in [Come riservare Premi e Booster a una lista di clienti](https://supporto.unipiazza.it/it/articles/<id>-come-riservare-premi-e-booster-a-una-lista-di-clienti) [[come-riservare-premi-e-booster-a-una-lista-di-clienti]].

**Nuova sezione, prima del riquadro Suggerimento:**

> ## Come elimino un premio
>
> **1. Premi Modifica premi**<br>Lo trovi in alto a destra nella Lista Premi.
>
> **2. Premi il cestino accanto al premio**<br>Si apre **Vuoi eliminare questo Premio?**. Premi **Elimina**.
>
> **3. Premi Salva**<br>Finché non salvi, il premio non sparisce davvero. Se cambi idea premi **Annulla**.
>
> Nella Lista Premi deve restare sempre almeno un premio. Se provi a eliminare l'ultimo, il Gestionale ti avvisa con **Devi lasciare almeno un premio visibile**.

Fuori scope ma da sistemare quando si tocca: il Suggerimento di 28264 e di 27448 linka ancora il vecchio
dominio `unipiazza.customerly.help`.

---

## 5. NUOVO — Come riservare Premi e Booster a una lista di clienti [[come-riservare-premi-e-booster-a-una-lista-di-clienti]]

Verificato su: `app/containers/PrizesPage/PrizesPage.tsx:92-101` (colonna Clienti, «Tutti i clienti»),
`EditableTable.tsx:450-461`, `app/components/AudienceListSelect/index.tsx:36-68` (testo di aiuto, «non valida per
tutti i punti vendita»), `AudienceListSelect/useAudienceLists.ts:64` (liste valide solo se includono tutti i punti
vendita), `Boosters/BoosterForm.tsx:138-174`, `:580-596`, `:666-674`, `:705-716` (Riepilogo «Riservato a N
liste di clienti»), `SettingsPage/PresetListsBox.tsx:504-505` e `:615-660` (criteri della lista Vip);
backend `app/api_user/v1/controllers/shops.ts:683-689` (Vetrina e App mostrano il premio solo ai membri),
`app/api_partner/v1/controllers/prizes.js:226-232` (ritiro rifiutato con «Premio non disponibile per questo
cliente»), `test/tests/api-partner-v1/audience_boosters.test.js:58-63` (chi non è nella lista riceve i gettoni
senza Booster), `app/utils/user_lists/default_lists.ts` (nomi delle liste preimpostate). Criteri Vip per
categoria letti da MongoDB `categories.user_list_defaults.vip`.

**Frontmatter proposto:**

```yaml
collection_id: 7181
collection: 🏆 Premi e Gettoni
title: Come riservare Premi e Booster a una lista di clienti
slug: come-riservare-premi-e-booster-a-una-lista-di-clienti
description: Un premio solo per i VIP o un Booster per chi non passa da un po'? Scegli la lista giusta e il gioco è fatto.
status: published
written_by: 2961
keywords:
  - premi riservati
  - premio vip
  - booster vip
  - lista clienti
  - clienti vip
  - premio solo per alcuni clienti
  - booster riservato
locale: it
```

Cartella: `articles/04-premi-e-gettoni/`.

**Testo:**

Vuoi coccolare i tuoi clienti più affezionati con un premio tutto per loro, o dare un Booster solo a chi non passa da un po'? Puoi riservare premi e Booster a una o più liste di clienti, e gli altri non li vedranno nemmeno. 😉

## Come riservare un premio

**1. Apri la Lista Premi**<br>Vai in **Lista Premi** e premi **Modifica premi**, in alto a destra.

**2. Scegli i clienti**<br>Ogni premio ha la colonna **Clienti**, che di partenza dice **Tutti i clienti**. Aprila e scegli una o più liste.

**3. Salva**<br>Premi **Salva** in fondo alla pagina. Nella Lista Premi, sotto **Clienti**, ora vedi il nome delle liste a cui è riservato il premio.

## Come riservare un Booster

**1. Crea o apri il Booster**<br>Vai in **Booster vendite** e premi **Crea booster**, oppure apri un Booster che hai già.

**2. Scegli le liste**<br>Nel riquadro **Clienti a cui è rivolto il Booster** scegli una o più liste. Se lasci **Tutti i clienti**, il Booster vale per tutti.

**3. Controlla il riepilogo e salva**<br>Nel riquadro **Riepilogo** leggi **Riservato a 1 lista di clienti** (o al numero di liste che hai scelto). Poi premi **Salva**.

Tutto il resto del Booster te lo spieghiamo in [Come creo e attivo un Booster?](https://supporto.unipiazza.it/it/articles/27455-come-creo-e-attivo-un-booster) [[come-creo-e-attivo-un-booster]].

## Cosa succede ai clienti

👥 **Basta essere in una lista**<br>Se scegli più liste, il premio o il Booster vale per chi fa parte di almeno una.

👀 **Gli altri non lo vedono**<br>Sulla tua Vetrina e nell'App Unipiazza il premio riservato compare solo ai clienti della lista. Se qualcuno che non ne fa parte prova comunque a ritirarlo, il ritiro non va a buon fine.

🚀 **Il Booster vale solo per la lista**<br>All'accredito, chi non è nella lista riceve i suoi gettoni normali, senza il bonus del Booster.

📺 **Niente pubblicità sul Chiosco**<br>Un Booster riservato a una lista non si può pubblicizzare sulla vetrina del Chiosco, e nel riquadro **Dettagli** l'opzione resta spenta. Così nessuno vede un'offerta che non può usare.

## Quali liste puoi usare

⭐ **Le liste preimpostate**<br>Sono **Vip**, **Nuovi**, **Ti seguono**, **Inattivi** e le altre che il Gestionale crea per te. Si aggiornano da sole in base a come si comportano i tuoi clienti.

✍️ **Le tue liste**<br>Quelle che hai creato tu, come spieghiamo in [Come creare e gestire le Liste Clienti](https://supporto.unipiazza.it/it/articles/61968-come-creare-e-gestire-le-liste-clienti) [[come-creare-e-gestire-le-liste-clienti]].

🏪 **Con più punti vendita**<br>Per un Booster attivo in più punti vendita puoi scegliere solo liste che li comprendono tutti. Le liste preimpostate valgono per un punto vendita alla volta, quindi in questo caso non si possono usare. Le liste che non vanno bene le vedi grigie, con la scritta **non valida per tutti i punti vendita**.

## Chi sono i miei clienti VIP?

Dipende da come è impostata la tua lista **Vip**. I criteri di partenza cambiano a seconda del tipo di attività, e li puoi cambiare quando vuoi da **Impostazioni**, nel riquadro **Liste preimpostate**. Lì trovi la regola scritta per intero, per esempio «Un cliente che ti ha visitato almeno una volta negli ultimi 150 giorni e ti ha visitato almeno 5 volte». Se preferisci, al posto delle visite puoi contare gli euro spesi. Per capire meglio le etichette dei clienti leggi [Cosa sono le etichette clienti "Nuovi", "Vip", "Ti seguono" e "Inattivi"?](https://supporto.unipiazza.it/it/articles/27444-cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi) [[cosa-sono-le-etichette-clienti-nuovi-vip-ti-seguono-e-inattivi]].

<table><tbody><tr><td colspan="1" rowspan="1"><p><strong>💡Suggerimento: </strong>Un premio riservato ai VIP fa sentire speciali i tuoi clienti più affezionati. Faglielo sapere con una campagna mandata proprio alla lista Vip!</p></td></tr></tbody></table>

Hai un dubbio? Scrivici su WhatsApp al **388 8665987**, siamo qui per aiutarti!

---

## Domande per Lorenzo (da questo gruppo)

1. Un abbonamento **disattivato** si può ancora vendere dal Chiosco o dall'App Operatore? Dal Gestionale no
   (`ModalSubscriptionDischarge.tsx:244` filtra `visible === true`), e la cover sul Chiosco si spegne. La bozza
   dice solo queste due cose.
2. **Elimina booster** cancella subito, senza finestra di conferma (`BoosterForm.tsx:325-331`, `:747-765`),
   mentre abbonamenti e premi la chiedono. È voluto? Anche **Disattiva booster** non controlla il permesso
   `boosters.write` (`:421-444`), a differenza di **Disattiva abbonamento**.

## Scartato

- «Link al vecchio slug» in 41597: l'articolo non contiene link vecchi. Il gestionale linka
  `41597-voglio-resettare-i-gettoni-come-posso-fare` (`ResetLoyaltyBox.tsx:369` e `:455`) e il 27455 con un
  percorso vecchio (`BoosterForm.tsx:541`, `:555`), ma il 21/11/2026 entrambi i link rimandano all'articolo giusto
  (redirect 307/308 di Customerly). Non serve correggere niente.
