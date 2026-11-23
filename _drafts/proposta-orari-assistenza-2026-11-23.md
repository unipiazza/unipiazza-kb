# Proposta — Orari del team e Olivia fuori orario (23/11/2026)

← [[KB]]

Nella KB non c'è un articolo che dica quando risponde una persona del team Unipiazza. Questa
bozza propone un articolo nuovo e qualche ritocco agli articoli che rimandano all'assistenza.
**Niente è stato modificato né pubblicato.**

## Cosa ho trovato

1. **Nessun articolo pubblicato sull'assistenza.** L'unico è il 1262 «Hai bisogno di assistenza
   o informazioni commerciali?» [[hai-bisogno-di-assistenza-o-informazioni-commerciali]], in
   **draft** dal 2023. Contiene solo WhatsApp, l'email partner@ e la pagina Facebook. È
   scritto da un altro autore (2963) e sta nella collezione Pagamenti & Fatturazione.
2. **Gli orari 9-18 ci sono già, ma solo per la revisione delle campagne.** Li citano 70971,
   61971, 71245 e 70106 («un consulente Unipiazza controlla… dal lunedì al venerdì dalle 9:00
   alle 18:00»). Sono coerenti con la proposta e non vanno toccati.
3. **Circa 45 articoli chiudono con «scrivici su WhatsApp al 388 8665987, siamo qui per
   aiutarti!»** senza dire chi risponde né quando.
4. **Olivia 61975** [[olivia-la-tua-consulente-fedelta-ai]] ha la sezione «Quando ti serve una
   persona» senza orari. La description dice «disponibile 24 ore su 24», ed è giusta.
5. **Le regole ci sono già** in [[decisioni-trasversali]] (punti 8 e 9, copy del sito).
   Olivia è il nome di ogni AI Unipiazza, anche quella che risponde su chat e WhatsApp.
   Il claim è «Olivia risponde in meno di 15 secondi, a qualsiasi ora. Persone vere dal lunedì
   al venerdì, 9:00-18:00». **Non si pubblica un tempo di risposta umano.**
   Anche [[CONFRONTO-SITO-V3]] (§4) segnalava questo buco e proponeva di riscrivere il 1262.

## Proposta 1 — Riscrivere il 1262 e pubblicarlo (consigliata)

Meglio riusare il 1262 che crearne uno nuovo. Ha già un `article_id`, oggi è in bozza e non lo
linka nessun articolo. Lo sposterei in **Guida Introduttiva (7178)**, dove un cliente lo cerca,
con `written_by: 2961` e `is_ai_enabled: true`. Cambia anche lo slug, perché quello vecchio
parla di «informazioni commerciali».

```yaml
article_id: 1262
collection_id: 7178
title: "Come contattarci e quando risponde il team Unipiazza"
slug: come-contattarci-e-quando-risponde-il-team
description: "Il team ti risponde dal lunedì al venerdì, dalle 9:00 alle 18:00. Negli altri momenti c'è Olivia, sempre pronta."
status: published
written_by: 2961
keywords: [assistenza, orari, contatti, whatsapp, chat, olivia, supporto, team]
```

### Testo

Hai un dubbio, una domanda o qualcosa non va come dovrebbe? Scrivici! A seconda del giorno e
dell'ora ti risponde una persona del team Unipiazza oppure Olivia. In ogni caso non resti mai
senza risposta. 😊

## Quando trovi il team Unipiazza

🕘 **Dal lunedì al venerdì, dalle 9:00 alle 18:00**<br>In questi orari ti risponde una persona
del nostro team. Il sabato, la domenica e nei giorni festivi l'ufficio è chiuso.

## Negli altri momenti c'è Olivia

🤖 **Olivia ti risponde a qualsiasi ora**<br>La sera, nel fine settimana e nei festivi, in chat e
su WhatsApp ti risponde Olivia, la Consulente Fedeltà AI di Unipiazza. Conosce le nostre guide
e in pochi secondi ti aiuta con le domande più comuni.

🙋 **Serve una persona?**<br>Se Olivia non sa rispondere te lo dice, e la tua richiesta la
riprende il team appena torna in ufficio. Non serve riscriverci.

## Dove scriverci

💬 **Chat dell'assistenza**<br>È il pulsante in basso a destra nel Gestionale.

📱 **WhatsApp**<br>Scrivici o chiamaci al
[388 8665987](https://api.whatsapp.com/send/?phone=%2B393888665987&text&type=phone_number&app_absent=0).

📅 **Una chiacchierata più lunga**<br>Vuoi ripensare il tuo programma fedeltà? Prenota una
[consulenza gratuita con Roberta](https://cal.com/roberta-pignatelli-a74mds/30min), la nostra
Consulente Fedeltà.

## È sabato e qualcosa non funziona?

Molti problemi si risolvono in un paio di minuti, anche senza di noi. Prova prima queste guide.

🔄 [Il Chiosco è bloccato, come lo resetto?](https://supporto.unipiazza.it/it/articles/41648-come-si-resetta-il-chiosco)<br>
📲 [L'app Unipiazza è sparita dal Chiosco](https://supporto.unipiazza.it/it/articles/40682-l-app-unipiazza-e-sparita-cosa-faccio)<br>
🧾 [Il Chiosco non funziona? Carica gettoni, abbonamenti e Wallet dal Gestionale](https://supporto.unipiazza.it/it/articles/71250-come-caricare-gettoni-abbonamenti-e-wallet-dal-gestionale)<br>
💬 [WhatsApp non funziona o risulta bloccato](https://supporto.unipiazza.it/it/articles/70106-whatsapp-non-funziona-o-risulta-bloccato)

Siamo qui per aiutarti… e quando non ci siamo noi, c'è Olivia! 😉

---

## Proposta 2 — Ritocchi agli articoli che rimandano all'assistenza

Aggiungere orari + link al 1262 solo dove conta davvero, cioè dove il cliente ha un problema e
ci scrive. Non nei ~45 articoli, perché se un giorno cambiano gli orari andrebbero corretti
tutti.

| Articolo | Oggi | Proposta |
|---|---|---|
| 61975 Olivia, sezione «Quando ti serve una persona» | chat + WhatsApp, senza orari | Aggiungere: «Il team ti risponde dal lunedì al venerdì, dalle 9:00 alle 18:00. Negli altri momenti, in chat e su WhatsApp, ti risponde Olivia.» + link al 1262 |
| 28335 Tutto quello che devi sapere per iniziare | nessun contatto | Nuova riga: «💬 **Come contattarci:** chi ti risponde e quando» con link al 1262 |
| 41648 Chiosco bloccato | «chiamaci o scrivici su WhatsApp…» | Stessa chiusura + «Il team c'è dal lunedì al venerdì, 9:00-18:00. Negli altri orari ti risponde Olivia.» |
| 40682 App sparita | idem | idem |
| 65542 App Operatore assente | «ti aiutiamo subito» | idem, togliendo «subito» fuori orario |
| 70106 WhatsApp bloccato (chiusura finale) | chat + WhatsApp | idem |
| 1249 Password wifi | «contattaci al numero…» (minuscola dopo «?») | idem, sistemando la maiuscola |
| 63781 App Partner non funziona | «contattaci al 388» | idem |

**Proposta 3 — Aggiornare la skill `unipiazza-copy`.** In `kb-articles.md` la chiusura tipo
dei troubleshooting è «chiamaci o scrivici su WhatsApp al 388 8665987: siamo qui per
aiutarti!». Si può aggiungere la riga sugli orari, così gli articoli nuovi nascono già giusti.

## Risposte di Edoardo (23/11/2026), già applicate in locale

1. Sì, Olivia passa da sola la conversazione a Roberta.
2. Ufficialmente solo «lunedì-venerdì, 9-18». Fuori orario l'assistenza di una persona non è
   garantita. Tolto il riferimento ai festivi.
3. Niente email. I canali principali sono WhatsApp e la chat del Gestionale.
4. Sì, il 388 si può anche chiamare.

Il 1262 è stato riscritto e spostato in `01-guida-introduttiva/`
[[come-contattarci-e-quando-risponde-il-team]]. Ritoccati 41648, 40682, 65542, 70106, 1249,
63781, 61975 e 28335. Aggiornata anche la chiusura tipo nella skill `unipiazza-copy`.

## Domande iniziali (superate)

1. **Passaggio da Olivia al team.** Ho scritto che la richiesta la riprende il team e che non
   serve riscrivere. È così su Customerly (chat e WhatsApp 388)? Se non lo è, la frase va tolta.
2. **Festivi.** Hai detto lunedì-venerdì. Ho aggiunto che nei festivi l'ufficio è chiuso. Ok?
3. **Email.** L'ho lasciata fuori, perché è ancora aperta la scelta fra partner@ e info@
   ([[CONFRONTO-SITO-V3]] §2.2). Se ne scegli una, la aggiungo in fondo a «Dove scriverci».
4. **Telefono.** Il 388 si può anche chiamare? Molti articoli dicono «chiamaci», io l'ho
   mantenuto.
