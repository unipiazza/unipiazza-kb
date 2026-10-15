# Confronto KB e sito V3 — aggiornamenti da fare (14/10/2026)

Controllo degli articoli KB `published` contro i testi del nuovo sito. Al momento del controllo i testi erano letti dalla copia di lavoro nel vault (`copy-v3/pagine/`), **cancellata il 2026-10-15**: il sito vero sta nel repo in locale `C:\Users\dodo\dev\unipiazza-web-user-v2`, e le decisioni di copy in `Unipiazza.it/Note/copy-v3/decisioni-trasversali.md` [[decisioni-trasversali]]. I riferimenti a `copy-v3` e `sito-v3` qui sotto sono quindi storici. Mappa degli articoli in [[overview]], problemi già noti in [[AUDIT-KB]].

**Come è stato fatto.** Cinque revisori in parallelo, uno per area (prezzo e onboarding, fedeltà e Chiosco, Gestionale clienti, campagne e WhatsApp, Wallet/integrazioni/Olivia). Hanno letto i file `.md` locali, non Customerly dal vivo. Le citazioni più pesanti le ho ricontrollate nei file (disdetta 41683, cassa 41599, Profitti 27454/27456, 9 contro 8, 200€, soglie 30 giorni, "2 ore dopo", click nella description di 61970, eShop in 27444). **Nessun articolo è stato modificato.**

**Come leggere le etichette.** *Certa* vuol dire che la differenza è nei file e il sito ha una decisione scritta. *Da confermare* vuol dire che serve una tua risposta o una verifica nel Gestionale prima di toccare la KB.

## Stato al 15/10/2026

Le 16 correzioni della sezione 1 sono state applicate e sincronizzate su Customerly con altre modifiche decise con Edoardo: tagli di Wallet e Gift Card (6, o 5 con «Altro importo»), recesso dalla consegna del Kit, contatti solo WhatsApp e telefono (partner@ non esiste più), coexistence di WhatsApp, etichette della Lista Clienti, nuova guida del Kit (27438). In tutto 21 articoli. Senza vetrofania: tolta dalla guida del Kit, dal listino interno, dai Termini e condizioni del sito V3 e dalla base di conoscenza di Olivia (rigenerata con lo script del repo `unipiazza-api`, non ancora committata). Restano aperte la sezione 2 (parte non risolta), la collezione eShop (sezione 3), i gap (sezione 4) e la sezione 7.

---

## 1. Correzioni certe, da fare appena dai l'ok

| # | Articolo KB | Cosa non torna | Modifica |
|---|---|---|---|
| 1 | 41599 Il mio registratore di cassa è compatibile? | La description dice «Non abbiamo una risposta ma ci stiamo lavorando!». L'articolo 48446, aggiornato oggi, elenca già i registratori RCH (Atos RT, Asso 3 RT, Walle 8T, APE 3). Il sito parla di integrazione nativa con RCH già disponibile. | Riscrivere con l'elenco di 48446, la richiesta di marca e modello e un rimando. |
| 2 | 41683 Voglio disdire Unipiazza | Dice che il rimborso esclude il «costo di installazione». Il sito non ha un costo di installazione separato, esclude il **Kit Fedeltà**. | Sostituire con «costo una tantum del Kit Fedeltà (Lite o Full)». |
| 3 | 41683 (titolo del paragrafo) | «Diritto di recesso (entro 30 giorni)». Il sito usa ovunque «Il primo mese, soddisfatti o rimborsati» come formula unica. | Titolare «Soddisfatti o rimborsati (primo mese)» e tenere «recesso» nel testo. |
| 4 | 27438 È arrivato il Kit | Aggiornato il 12/01/2024. Descrive il kit precedente al 1° settembre 2025, con smartphone sempre incluso, iscrizione solo con nome, cognome ed email e tessera appoggiata al Chiosco. Non nomina Kit Lite e Full, l'installazione guidata in videochiamata, l'iscrizione col numero di telefono. | Riscrittura. Allineare anche il gesto «appoggia la tessera» in 44201 e 63765. |
| 5 | 27453 Autopromo, 63782 Comunicazioni automatiche | A Rischio «30 giorni», Dormienti «90 o più giorni», e «50-75%» senza fonte. Il sito e l'articolo 27444 dicono che le soglie dipendono dal settore e si modificano. | Togliere i giorni fissi, rimandare a 27444, togliere o fontare le percentuali. |
| 6 | 27453 e 63782 (invito recensione) | «Inviato 2 ore dopo che un cliente ha ritirato un premio». Il sito aggiunge **una sola volta per cliente**. | Aggiungere la precisazione. L'anteprima dice «Google», mentre la piattaforma è scelta dal gestore. |
| 7 | 61970 Dettaglio campagna | La description promette «chi ha cliccato». Sul sito nessun click è tracciato. | Riscrivere la description. Nel corpo spiegare che Incassi e Visite sono attribuiti nel periodo della campagna. |
| 8 | 27454 Booster, 27456 Abbonamenti | «Profitti generati: guadagni ottenuti». Il dato non sottrae i costi, il sito scrive «incassi». | Descrivere la colonna come importo intero degli acquisti, non guadagno netto. |
| 9 | 27456 Abbonamenti | Stesso esempio con «10 caffè al prezzo di 9» (r.19) e «di 8» (r.25). | Uniformare a 8, come il sito. |
| 10 | 28252 Impostazioni Wallet e Gift Card | Tagli «fino a 200€». Il sito (e altri articoli KB) danno 250€ per le Gift Card. | Correggere per le Gift Card. Il Wallet è alla voce 2.1. |
| 11 | 27444 Etichette | Inattivi «né acquistano dal tuo eShop». L'eShop è in dismissione e non si pubblicizza. | Togliere il riferimento. Controllare lo screenshot del Riepilogo (27442), che mostra la voce eShop. |
| 12 | 61972 Campagne WhatsApp | La FAQ dice che i messaggi partono con un limite basso che sale. Nel 61640 e sul sito è 250 che sale a 2.000 con la verifica. | Allineare la FAQ a 61640. |
| 13 | 61971 Invio senza approvazione | Sezione «Quando è disponibile?» di giugno, con «entro le prime due settimane dal lancio». | Togliere la sezione, se l'opzione è attiva. |
| 14 | 28249 Come si crea un Abbonamento | Manca l'opzione **omaggio** («Quanti sono in omaggio?», esempio 5+1), la scelta dei punti vendita, il prezzo pieno barrato nella lista Premi. | Aggiungere. «Vetrina» diventa «copertina sul Chiosco». |
| 15 | 28251 GiftCard | Manca «Altro importo» nell'acquisto, già segnalato dall'audit (E5) e confermato dal sito. | Documentarlo. |
| 16 | 28335 Tutto per iniziare | Dice solo «email e messaggi via App», senza WhatsApp, RCS, Olivia, Calendario. Non parla del primo mese accompagnato. | Aggiornare la frase e aggiungere «Il tuo primo mese» (chiamate al giorno 1, 15, 30 con Roberta, Customer Success). |

## 2. Da confermare prima di scrivere

### 2.1 Dati di prodotto, verificabili nel Gestionale
- **Quante etichette cliente esistono.** 27444 ne elenca cinque (con titolo da quattro: Nuovi, Vip, Ti seguono, Inattivi, più Archiviati). 28263 ne dà sei (Nuovi, Regolari, VIP, Ti seguono, Inattivi, A Rischio). 30018 cita Nuovi, Vip, Inattivi, Archiviati. Il sito ne mostra quattro più il totale.
- **Wallet, quanti tagli.** KB e sito dicono sei. L'audit verificato nel Gestionale aveva trovato cinque per il Wallet e sei per le Gift Card. Se il Wallet ha cinque tagli, sbaglia anche il sito.
- **Tetto dei tagli del Wallet** (200€ o 250€) e se «Altro importo» vale anche per la ricarica.
- **Credito Wallet in cassa.** 28251 dice «scalato in automatico». Il sito descrive un interruttore «Credito Wallet» nell'app operatore, con avviso se il credito non basta.
- **Nome della colonna** degli Abbonamenti: «Profitti generati» (KB) o «Incassi dagli Abbonamenti» (sito, che dice di usare «nomi veri»).
- **Riepilogo (27442).** Mancano nel testo le card «Premi & Promo ritirate» e «Ricavi Autopromo», visibili solo nello screenshot di agosto 2025. Serve uno screenshot nuovo.
- **Storico del cliente (28262, 27445).** Il sito cita campagne ricevute e lette con il canale, Booster e ricariche del Wallet. Il sito stesso ammette che le ricariche nello storico vengono solo da una tua indicazione.
- **Canali di Autopromo.** 27453 dice email e RCS. 61973 aggiunge la notifica app. Nove pagine settore del sito scrivono «Email, app o RCS» ma `app-mobile.md` dice che l'app non è canale delle promozioni automatiche.
- **RCS (43309).** «Gratuiti su tutti i piani» e «incompatibili con Apple e Vodafone, solo il 35%» sono dati di aprile 2025. Il sito dice che limiti e disponibilità cambiano secondo il piano.
- **Promemoria delle Autopromo.** 27453 li dà anche per Prima Visita, A Rischio e Dormienti. Il sito solo per il compleanno. 63782 li mostra per altre voci.
- **Cover del Chiosco (28259).** Il sito dice che si scelgono «anche per fascia oraria» e parla di video. La fonte è una call (Antico Forno, 25/09), non la KB.
- **Verso del QR** al Chiosco. 27438 dice che il cliente inquadra il QR sul Chiosco, 28260 che mostra il suo QR. Il copy di `app-mobile.md` lo lascia aperto.
- **Wi-Fi o SIM.** Il sito dice che si può usare una SIM dati. 48419 e 48446 parlano solo di Wi-Fi.

### 2.2 Decisioni tue
- **Da quando contano i 30 giorni di recesso.** La KB dice dall'attivazione, il sito dall'installazione, il contratto dalla consegna del Kit.
- **Impegno di 12 mesi, penale 350€ e preavviso di 15 giorni.** 41683 cita la penale e non l'impegno, il sito l'impegno e non la penale. Sono la stessa regola? Il contratto aggiunge la «chiamata di attivazione entro 5 giorni lavorativi» come condizione della garanzia, che non è né sul sito né in KB.
- **Indirizzo email di assistenza.** KB: partner@ (36905, 37647, 40682) e info@ (63774). Sito: info@, ma `assistenza.md` lascia la scelta aperta.
- **Prezzo dei messaggi WhatsApp.** La KB (61972, 61919) scrive 0,10€ a messaggio. Il sito non pubblica nessun prezzo. Se la scelta è non pubblicarlo, vale anche per la KB?
- **Statistiche senza fonte** ancora in KB: «tassi di apertura oltre il 90%» (61972), «50-75%» e «4 volte» (27453). Il sito le ha tolte.
- **SEO.** 28255 dice che la Vetrina è «ottimizzata per i motori di ricerca». Il sito evita ogni promessa di posizionamento.
- **«Dai gettoni per una recensione»** in 27447. Il sito dice «nessun Premio condizionato alla recensione».
- **Coexistence di WhatsApp.** Manca del tutto dalla KB. 61972 e 61919 consigliano ancora un numero dedicato e dicono che il numero collegato non può più fare broadcast. Il sito dice che con la coexistence non serve un secondo numero ed è gratuita. Il dato viene da te (06/10), ma il comportamento dei broadcast va verificato con Lorenzo.
- **Nome dei piani.** 63774 usa «Chiosco Elite» come esempio. Il sito non pubblica i nomi dei piani e l'offerta commerciale è «ancora da definire».
- **Tessere.** In 63774 e 4366 «Tessere Fedeltà incluse» sono le fisiche. Il sito promette Tessere virtuali illimitate.

## 3. Collezione eShop (13-eshop)

Il sito riporta una tua decisione del 05/07, «L'eShop è una funzionalità che Unipiazza vuole togliere e non pubblicizzare più». In KB sono 9 articoli `published`, tutti fermi al 2024-04-24. Due hanno solo un segnaposto nel corpo (6978 Carica i tuoi prodotti, 6977 Crea codici sconto). L'`overview.md` già li segnala come ❌.
**Proposta.** Mettere in draft almeno 6978 e 6977, e valutare gli altri sette dopo aver verificato se ci sono clienti con eShop attivo.

## 4. Articoli nuovi o sezioni da aggiungere (gap)

Priorità alta
- **Primo mese accompagnato e assistenza** (chi sono i Consulenti, canali in ordine WhatsApp → telefono → chat → Centro assistenza → email, orari lun–ven 9–18, Olivia come prima linea). Si può riscrivere il draft 1262, togliendo Facebook. Non aggiungere tempi di risposta umani, come da decisioni-trasversali.
- **Creare una campagna WhatsApp** (intestazione, pulsante Chiama ora, Disiscriviti, promozione con date, approvazione Meta) più la **coexistence** e le risposte dei clienti.
- **Tessera digitale standard** nel Wallet (gratuita, con visite e attività) contro la personalizzata (a pagamento, con saldo Gettoni). Toccano 28260 e 65545.

Priorità media
- **Pagamento annuale anticipato** (due mesi in omaggio), metodi di pagamento e mancato pagamento.
- **API dirette** per sviluppatori (GET utente e POST scontrini, documentazione su api.unipiazza.it), da aggiungere a 36692.
- **Schermata «Gettoni sbloccati»** dopo lo scontrino con integrazione nativa.
- **Reti, catene e franchising**: Gettoni condivisi, pagina della rete, accessi per ruolo.
- **Vetrina (28255)**: colori, schede Premi/Info/News, Premio di benvenuto con data di ritiro, disponibilità prima dell'arrivo del Kit.
- **Offerte Partner**: nessun articolo, il sito rimanda a una sezione del Gestionale il cui nome è da verificare.
- **Olivia** (61975): elenco delle fonti dati e riga sulle reti.
- **Suggerisci un'attività** (16629): dice «abbonamento annuale», il contratto no. Il `/consiglia/` dei clienti finali (100€ in Gettoni) non ha articolo.

## 5. Da NON recepire in KB per ora

Il sito anticipa il prodotto o ha il punto aperto.
- **Olivia proattiva** («La consulente AI che fa la prima mossa»). Il copy stesso dice «in programma, non ancora sviluppata».
- **Trigger personalizzabili** e maggiore tracciamento delle recensioni (direzione futura).
- **Sondaggi clienti**, solo bozza di luglio, «in arrivo».
- **Grafico Orari di punta** nel Booster. La funzione esiste, l'immagine del sito è un segnaposto.
- **Pulsanti nei messaggi: No** per i programmi non ufficiali, da confermare.

## 6. Terminologia da uniformare

| Sito | KB | Nota |
|---|---|---|
| Promozioni automatiche | Autopromo (a volte entrambi, 34556) | Una riga di raccordo in 27453 |
| Premio di benvenuto | Acquisizione Clienti, Promo Iscrizione | Mappa dei nomi |
| Gettoni di benvenuto | Gettoni Bonus Iscrizione | |
| Booster e Happy Hour | Booster, Moltiplicatore, Gettoni Bonus | Happy Hour per la KB è solo un esempio |
| App Operatore | «Smartphone Unipiazza» (30018, 35025, 28335), «App gestore» (33516), «Partner App» (40682) | Allineare. Attenzione, «Smartphone Unipiazza» è anche il dispositivo del Kit |
| Gestionale Clienti (funzione) | Gestionale Partner | Sono cose diverse |
| Gift Card | GiftCard | Scegliere una forma |
| Calendario Eventi | Calendario Eventi (il sito alterna anche «Calendario Marketing») | |
| copertine del Chiosco | cover, immagini copertina | |
| Tessere Fedeltà virtuali / fisiche (PVC) | «Tessere Fedeltà» senza specificare | |

Anche 28253 dice che la Gift Card «è come un buono regalo», mentre 28251 dice che non lo è. Il sito parla di credito da regalare che diventa Wallet al primo uso.

## 7. Dove sbaglia o è incoerente il sito (non la KB)

Da riportare a chi cura il copy del sito.
- `programma-fedelta-intrattenimento.md`: «Gettoni a ogni ingresso» contro la regola «premia gli acquisti, non le visite».
- `programma-fedelta-bar.md`: Premio esclusivo da 20 pasticcini a 2.500 Gettoni, mentre la tabella Bar di 30684 ha altri esclusivi (1.500 e 3.800). Va dichiarato esempio editoriale o allineato.
- `wallet-gift-card.md`: «fino a sei tagli» per il Wallet, da verificare (vedi 2.1).
- `olivia-consulente-fedelta-ai.md` dice «Calendario Marketing», `invio-promozioni-sconti.md` «Calendario Eventi».
- `gestionale-clienti.md` dice che la scheda nasce quando il cliente «si iscrive al Chiosco», mentre 28260 indica tre strade (Vetrina, Chiosco, app).

## 8. Articoli letti e coerenti (nessuna azione)

Guida: 48419, 48446 (ma vedi Wi-Fi/SIM), 4366, 41648. Riepilogo e impostazioni: 36905, 37647, 63781, 34556, 38701. Clienti: 28262, 35025, 61967, 61968, 61969, 30306, 40695, 65570, 27446, 63765, 44201, 33516, 41598. Premi: 27447, 27448, 28264, 41456, 30684 (le soglie dei settori coincidono). Campagne: 61640, 65381, 61974, 61976, 61919, 61973, 30681, 31070, 27452, 37262. Vetrina: 66239, 42911. Wallet e integrazioni: 28250, 28253, 36692, 48423, 61666. 63774 Piano e Consumi è coerente salvo i punti in 2.2.

## 9. Pulizia dei documenti interni

- `AUDIT-KB.md` A8 (link Android `unpz.it/desktop`) è probabilmente risolto dal commit di oggi, `last_synced` 14/10 su 61666 e 48423. Verificare online e aggiornare. Lo stesso vale per la nota in `overview.md` sulla collezione 11, che dice «da sincronizzare».
- `15-olivia-ai/_collection.md` dice che la collezione «non esiste ancora su Customerly», nota errata già nell'audit.
- Resta aperto il gap dell'audit sull'articolo dei crediti AI di Olivia (100 al mese, ricarica il 1°). Il sito non ne parla, quindi nessun contrasto.
