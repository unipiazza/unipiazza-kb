# Audit Knowledge Base Unipiazza

> Analisi completa degli articoli KB: aggiornamenti necessari, duplicati, ottimizzazioni copy, immagini e gap.
> Contesto progetto: BRIEF.md [[BRIEF]] · CLAUDE.md [[CLAUDE]]

**Data analisi:** 2026-06-16 · **Autore:** Claude (per Edoardo)

## Come ho lavorato

- **Lettura** di tutti i ~60 articoli `.md` locali in `articles/`.
- **Pull da Customerly** (`list_kb_articles` su tutte le collezioni) per confrontare locale vs remoto e trovare articoli mancanti.
- **Verifica nel gestionale reale** (`unipiazza-partner-v2.herokuapp.com`, loggato come Edoardo) dei fatti contestati o sospetti.
- **Confronto con la skill `unipiazza-copy`** (regole brand + glossario + `kb-articles.md`).

> ⚠️ **Scoperta trasversale che cambia il quadro:** il repo locale è un **sottoinsieme parziale** del remoto. Molte collezioni e articoli pubblicati su Customerly **non sono mai stati importati in locale** (vedi §E e Appendice). Prima di qualsiasi sync in scrittura, fai un **pull completo** per non sovrascrivere/perdere allineamento.

Le priorità: 🔴 alta · 🟡 media · ⚪ bassa.

---

## A. Articoli da aggiornare (info sbagliate o non aggiornate)

### 🔴 A1 — Riepilogo: mancano due metriche (verificato nel gestionale)
[cosa-vedo-nella-sezione-riepilogo](articles/02-riepilogo/cosa-vedo-nella-sezione-riepilogo.md) [[cosa-vedo-nella-sezione-riepilogo]]
La dashboard reale mostra **6 metriche**: Visite Totali, Clienti Totali, **Premi & Promo ritirate**, Ricavi Totali, **Ricavi Autopromo**, Scontrino medio. L'articolo ne elenca solo 4: mancano *Premi & Promo ritirate* e *Ricavi Autopromo*. Anche lo screenshot è di agosto 2025. → Aggiungere le due metriche + screenshot nuovo.

### 🔴 A2 — Wallet & GiftCard: numeri di tagli e limite credito errati/incoerenti (verificato)
Nel gestionale: **Wallet = fino a 5 tagli**, **GiftCard = fino a 6 tagli**. Inoltre esiste un'opzione nuova **"importo personalizzato / Altro importo"** non documentata da nessuna parte.
- [cosa-sono-e-come-si-attivano-i-wallet](articles/08-wallet-e-gift-card/cosa-sono-e-come-si-attivano-i-wallet.md) [[cosa-sono-e-come-si-attivano-i-wallet]] dice "fino a sei tagli" per il Wallet → reale **5**.
- [impostazioni-wallet-gift-card](articles/08-wallet-e-gift-card/impostazioni-wallet-gift-card.md) [[impostazioni-wallet-gift-card]] dice "fino a sei diversi tagli" (Wallet) e tagli "fino a 200€".
- **Incoerenza limite credito**: "200€" in impostazioni vs "250€" in [cosa-sono-e-come-si-attivano-i-wallet](articles/08-wallet-e-gift-card/cosa-sono-e-come-si-attivano-i-wallet.md) e [qual-e-la-differenza-fra-wallet-e-giftcard](articles/08-wallet-e-gift-card/qual-e-la-differenza-fra-wallet-e-giftcard.md) [[qual-e-la-differenza-fra-wallet-e-giftcard]]. → Uniformare al valore reale del campo "Limite credito" e documentare l'importo personalizzato.

### 🔴 A4 — Nota collezione Olivia ERRATA + collezione di fatto non documentata in locale
[15-olivia-ai/_collection.md](articles/15-olivia-ai/_collection.md) contiene la nota *"questa collezione non esiste ancora su Customerly. Va creata prima della sync."* → **Falso**: la collezione `12061` esiste già e ha **2 articoli pubblicati** (`Olivia, la tua Consulente Fedeltà AI` 61975 + `Come usare Olivia per creare e migliorare le campagne` 61976). Rimuovere la nota e pullare i 2 articoli (vedi §E1).

### 🟡 A5 — Campagne: video con interfaccia vecchia
[cosa-sono-le-campagne-marketing-e-come-si-creano](articles/05-campagne-autopromo-whatsapp/cosa-sono-le-campagne-marketing-e-come-si-creano.md) [[cosa-sono-le-campagne-marketing-e-come-si-creano]] ha già il disclaimer *"⚠️ Il video mostra l'interfaccia precedente"*. Il testo è aggiornato al nuovo flow, ma il **video YouTube va ri-registrato**. TODO aperto.

### 🟡 A6 — Modello "asporto" obsoleto (era COVID)
[campagna-per-comunicare-che-effettui-servizio-da-asporto](articles/06-modelli-campagne/campagna-per-comunicare-che-effettui-servizio-da-asporto.md) [[campagna-per-comunicare-che-effettui-servizio-da-asporto]] parla di *zona arancione/rossa, autocertificazione, "congiunti"* (2021). → Riscrivere come generico asporto/delivery o archiviare.

### 🟡 A7 — Modelli stagionali datati
[campagna-di-san-valentino](articles/06-modelli-campagne/campagna-di-san-valentino.md), [campagna-di-carnevale](articles/06-modelli-campagne/campagna-di-carnevale.md), [campagna-di-pasqua](articles/06-modelli-campagne/campagna-di-pasqua.md), [campagna-festa-della-donna](articles/06-modelli-campagne/campagna-festa-della-donna.md), [campagna-festa-del-pap](articles/06-modelli-campagne/campagna-festa-del-pap.md), [campagna-festa-della-mamma](articles/06-modelli-campagne/campagna-festa-della-mamma.md): testi del 2021-2022, codici sconto datati (es. "DONNA21"). Da svecchiare + immagini rotte (vedi §D1).

### ⚪ A8 — App Operatore Android: link e testo copiati dall'articolo Windows
[come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android](articles/11-integrazioni/come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android.md) [[come-installare-l-app-operatore-unipiazza-sul-tuo-dispositivo-android]]: il link "Vai su unpz.it/android" punta in realtà a `https://unpz.it/desktop`; e dice "Apri il browser del tuo **PC**" invece che del dispositivo Android. → Correggere link e testo.

### ⚪ A9 — Link nudo senza protocollo
[come-visualizzo-lo-storico-dei-pagamenti-e-le-fatture](articles/10-pagamenti-e-fatturazione/come-visualizzo-lo-storico-dei-pagamenti-e-le-fatture.md): `[partner.unipiazza.it](partner.unipiazza.it)` è un link relativo rotto (manca `https://`). Stesso problema sul mailto in [l-app-unipiazza-e-sparita-cosa-faccio](articles/01-guida-introduttiva/l-app-unipiazza-e-sparita-cosa-faccio.md): `[partner@unipiazza.it.](partner@unipiazza.it)`.

### ⚪ A10 — Costo Stripe da verificare
[come-collegare-stripe](articles/13-eshop/come-collegare-stripe.md): "0.25 cent + 1,4% a transazione". Da confermare con le commissioni Stripe IT attuali.

### ℹ️ A11 — Dominio link KB obsoleto (trasversale, verificato)
Il dominio ufficiale KB è **`supporto.unipiazza.it`** (lo usano i link del gestionale). Tutti gli articoli vecchi linkano ancora a **`unipiazza.customerly.help/it/...`** (e alcuni con vecchi token `?preview=...`). → Migrare tutti i cross-link al nuovo dominio. (Vedi anche §C.)

---

## B. Articoli da unire (duplicati / ripetizioni)

### 🔴 B1 — eShop: due articoli quasi identici
[come-comunicare-ai-tuoi-clienti-che-hai-un-eshop](articles/13-eshop/come-comunicare-ai-tuoi-clienti-che-hai-un-eshop.md) (6994) e [come-promuovere-il-proprio-eshop](articles/13-eshop/come-promuovere-il-proprio-eshop.md) (7855) hanno **lo stesso testo** (negozio / WhatsApp / social / Instagram). Il secondo ha `description: "prova"` e un titolo che dice "Come comunicare..." in conflitto con lo slug "promuovere". → Unire in un solo articolo, eliminare l'altro.

### 🟡 B2 — eShop: articoli pubblicati vuoti
[carica-i-tuoi-prodotti](articles/13-eshop/carica-i-tuoi-prodotti.md) (body = "Vendi online") e [crea-codici-sconto](articles/13-eshop/crea-codici-sconto.md) (body = "ciao a tutti") sono **segnaposto pubblicati senza contenuto**. → Scrivere il contenuto o riportare a `draft`. (Anche gap, §E6.)

### 🟡 B3 — Collezioni legacy duplicate su Customerly (non in locale)
Su Customerly esistono 5 collezioni "storiche" tutte in `draft` che duplicano temi già coperti dalle collezioni attuali: **540 Clienti**, **1830 Primi passi**, **677 App Partner**, **678 Poynt**, **4495 Unipiazza Lite** (booster, abbonamenti, modalità vacanza, premi, autopromo, iscrizione…). → Valutare archiviazione/eliminazione per ridurre confusione e carico sull'AI.

### ⚪ B4 — "Suggerimenti campagna perfetta" in doppio
Esiste sia `27452` (collezione Campagne, published) sia `9472` (collezione 1830 legacy, draft). Consolidare.

### ⚪ B5 — "Dove scaricare immagini" in doppio
[siti-per-scaricare-immagini-gratuiti](articles/06-modelli-campagne/siti-per-scaricare-immagini-gratuiti.md) (modelli) e `30013` "Dove si possono scaricare immagini gratuite per le Campagne" (campagne) trattano lo stesso tema in collezioni diverse. Unire o cross-linkare.

---

## C. Ottimizzazioni copy (vs skill unipiazza-copy)

### Glossario (violazioni di termine obbligatorio)
- 🔴 **"Tessere Fedeltà"** non "carte fedeltà": [e-arrivato-il-kit-unipiazza-cosa-devo-fare](articles/01-guida-introduttiva/e-arrivato-il-kit-unipiazza-cosa-devo-fare.md) [[e-arrivato-il-kit-unipiazza-cosa-devo-fare]] usa "Carta Fedeltà" / "carta fedeltà" (titoli passi 6 e 9).
- 🟡 **"Gettoni"** non "punti": [come-creare-una-lista-premi-perfetta](articles/04-premi-e-gettoni/come-creare-una-lista-premi-perfetta.md) [[come-creare-una-lista-premi-perfetta]] usa "raccogliere punti" più volte.
- 🟡 **"Profilo"** non "account": [come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password](articles/02-riepilogo/come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password.md) ("quando hai creato il tuo account").

### Formato e punteggiatura
- 🟡 **Em dash "—" vietato**: usato negli articoli nuovi [filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti](articles/03-clienti/filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti.md) [[filtra-clienti-come-segmentare-e-analizzare-i-tuoi-clienti]] e [come-creare-e-gestire-le-liste-clienti](articles/03-clienti/come-creare-e-gestire-le-liste-clienti.md) (es. "intervallo da — a", "valore minimo e massimo —"). → Sostituire con "a", virgola o parentesi.
- ⚪ **`?!` interrobang vietato**: in più articoli eShop ("scattarne una?!", "Cosa aspetti?!", "Pronto per iniziare?!").
- ⚪ **Bullet con trattino**: la skill chiede numeri/emoji, mai trattini. Diffuso (eShop, dispositivi-compatibili, e anche i nuovi articoli clienti). Da decidere se applicare in modo rigido o accettare come convenzione markdown.

### Tono
- 🔴 **Tutta la collezione eShop** è fuori tono brand: usa "voi/vostra/inserite/selezionate", "Ciao Gestore", latinismi ("Verba volant scripta manent"). La skill impone sempre **"tu"** e tono spiritoso/diretto. → Riscrittura completa eShop con unipiazza-copy.

### Refusi / errori puntuali
- ⚪ "proponimi i vantaggi del Wallet" → "proponi" in [15-idee-per-segmentare-i-clienti-con-i-filtri](articles/03-clienti/15-idee-per-segmentare-i-clienti-con-i-filtri.md) [[15-idee-per-segmentare-i-clienti-con-i-filtri]].
- ⚪ Link rotto/duplicato `[.](https://perfetto.Ecco)` in [promuovi-le-tue-giftcard](articles/06-modelli-campagne/promuovi-le-tue-giftcard.md) [[promuovi-le-tue-giftcard]].
- ⚪ "Apparià" → "Apparirà" e frase duplicata ("il pulsante che trovi in alto a sinistra… il pulsante che trovi in alto alla tua sinistra") in [e-arrivato-il-kit-unipiazza-cosa-devo-fare](articles/01-guida-introduttiva/e-arrivato-il-kit-unipiazza-cosa-devo-fare.md).
- ⚪ "verrà automaticamente aggiungo" → "aggiunto" in [come-creare-una-lista-premi-perfetta](articles/04-premi-e-gettoni/come-creare-una-lista-premi-perfetta.md); "in tutti iKit" → "i Kit" in [tablet-compatibili-con-app-chiosco](articles/01-guida-introduttiva/tablet-compatibili-con-app-chiosco.md).

---

## D. Articoli che avrebbero bisogno di immagini

### 🔴 D1 — Immagini su googleusercontent.com (link temporanei, quasi certamente rotti)
Tutti questi puntano a `lh*.googleusercontent.com` (host effimero di Google, non affidabile): i modelli stagionali ([campagna-di-san-valentino](articles/06-modelli-campagne/campagna-di-san-valentino.md), carnevale, pasqua, festa-della-donna, festa-della-mamma) e gli eShop [imballo-e-spedizione](articles/13-eshop/imballo-e-spedizione.md), [come-comunicare-ai-tuoi-clienti-che-hai-un-eshop](articles/13-eshop/come-comunicare-ai-tuoi-clienti-che-hai-un-eshop.md), [come-promuovere-il-proprio-eshop](articles/13-eshop/come-promuovere-il-proprio-eshop.md). → Ri-ospitare su `up-kb-assets` (S3) o rifare.

### 🔴 D2 — Immagini con path rotto/troncato
[come-scattare-una-foto-perfetta](articles/13-eshop/come-scattare-una-foto-perfetta.md): due immagini senza estensione e troncate (`6866_5eac1fb2adb6d30004c4cf95`, `6866_5eac218aadb6d30004c4cfaf`).

### 🟡 D3 — Guide "come si fa" senza alcuno screenshot
Sono procedure passo-passo nel gestionale che trarrebbero molto beneficio da screenshot:
- [come-si-resetta-il-chiosco](articles/01-guida-introduttiva/come-si-resetta-il-chiosco.md) (foto del retro tablet col tasto reset)
- [cosa-sono-i-gettoni-unipiazza](articles/04-premi-e-gettoni/cosa-sono-i-gettoni-unipiazza.md), [cos-e-la-lista-premi](articles/04-premi-e-gettoni/cos-e-la-lista-premi.md), [come-creo-un-premio](articles/04-premi-e-gettoni/come-creo-un-premio.md)
- [come-creo-e-attivo-un-booster](articles/07-booster-e-abbonamenti/come-creo-e-attivo-un-booster.md), [cosa-sono-gli-abbonamenti](articles/07-booster-e-abbonamenti/cosa-sono-gli-abbonamenti.md), [come-si-crea-un-abbonamento](articles/07-booster-e-abbonamenti/come-si-crea-un-abbonamento.md)
- [come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password](articles/02-riepilogo/come-accedere-al-gestionale-unipiazza-e-reimpostare-la-password.md)

### ℹ️ D4 — Verificare che le immagini dei nuovi articoli esistano
Gli articoli di giugno (clienti/campagne) referenziano `up-kb-assets.s3.eu-west-3.amazonaws.com/...`. Verificare che i file siano davvero caricati e non placeholder.

---

## E. Articoli mancanti (gap di copertura)

### 🔴 E1 — Olivia
I 2 articoli esistono su Customerly ma **non in locale** → pull. Inoltre manca un articolo dedicato al **sistema a crediti AI** (100 crediti mensili, ricarica il 1°, costo per interazione, dove vederli) descritto nel draft feature ma non in un articolo a sé.

### 🔴 E2 — WhatsApp
Manca in locale `come-collegare-whatsapp-business-a-unipiazza` (61919) — **referenziato dai nuovi articoli** ma assente. Anche `come-verificare-il-tuo-account-whatsapp-business` (61640). Il vecchio `come-inserire-whatsapp-nelle-campagne` (37253) potrebbe essere **obsoleto** col canale WhatsApp nativo → rivedere/unire.

### 🔴 E3 — Campagne/Autopromo (articoli cardine non in locale)
Manca **`cosa-sono-le-autopromo`** (27453, centrale e linkato dalla guida introduttiva), `cosa-sono-gli-rcs` (43309), `suggerimenti-per-scrivere-una-campagna-marketing-perfetta` (27452, referenziato dai nuovi). Inoltre `posso-inviare-una-campagna-solo-ad-alcuni-clienti` (30681) e `posso-escludere-dei-gruppi` (31070) ora si sovrappongono a Liste/Filtri → aggiornare con rimando alle Liste.

### 🔴 E4 — Clienti
In locale ci sono solo i 3 articoli nuovi; su Customerly la collezione ne ha **21**. Mancano tutti gli storici (aggiungere/importare clienti, esportare dati, profilo cliente, analisi clienti, storico azioni, consensi privacy, correggere importo, scalare premio manuale…). Pull necessario.

### 🟡 E5 — Funzionalità note senza alcun articolo
- **Importo personalizzato del Wallet** (visto nel gestionale, vedi A2).
- **Multi-punto vendita / catene**: il gestionale gestisce più punti vendita ("Stai visualizzando punti vendita con differenti impostazioni"), accennato solo di sfuggita nel Wallet. Manca un articolo su gestione catene/multi-sede.
- `personalizza-il-mittente-delle-campagne-email` (37235) e `come-posso-evitare-che-le-mie-email-finiscano-in-spam` (37262): esistono remoto, non in locale.

### 🟡 E6 — eShop incompleto
[carica-i-tuoi-prodotti](articles/13-eshop/carica-i-tuoi-prodotti.md) e [crea-codici-sconto](articles/13-eshop/crea-codici-sconto.md) sono vuoti: contenuto da scrivere (vedi B2).

---

## Appendice — Allineamento locale ↔ Customerly

- Il locale copre ~15 collezioni in modo **parziale**: per Campagne e Clienti contiene quasi solo i nuovi articoli di giugno; le collezioni legacy (540, 1830, 677, 678, 4495) non sono mai state importate.
- **Prima di sincronizzare**: fai un **pull completo** (BRIEF §5.D). Il locale è un sottoinsieme del remoto, quindi una sync "secca" rischierebbe di non riflettere ciò che c'è online. Nessuna cancellazione automatica.
- I nuovi articoli locali hanno `is_ai_enabled: false`; molti remoti sono `trained`. Valuta se abilitarli all'AI così Olivia li usa come fonte.

## Priorità consigliata (top 5)
1. 🔴 Pull completo da Customerly (sblocca E1-E4 e l'allineamento).
2. 🔴 Correggere Riepilogo (A1) e Wallet (A2) — fatti sbagliati verificati.
3. 🔴 Rimuovere nota errata collezione Olivia + portare in locale i 2 articoli (A4/E1).
4. 🔴 eShop: unire i due duplicati, riempire i vuoti, riscrivere nel tono brand (B1, B2, C).
5. 🟡 Migrare tutti i cross-link a `supporto.unipiazza.it` (A11) e svecchiare i modelli campagne (A6, A7, D1).
