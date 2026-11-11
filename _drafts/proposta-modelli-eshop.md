# Proposta per Modelli Campagne ed eShop

Bozza del 2026-11-11, decisa da Dodo e eseguita lo stesso giorno (vedi «Esito» in fondo).
Riferimenti: [AUDIT-KB.md](../AUDIT-KB.md) [[AUDIT-KB]] (sezioni A6, A7, B1, B2, B5, D1, D2, E6) e [overview.md](../overview.md) [[overview]].

## Decisioni di Dodo (2026-11-11)

1. **eShop.** Non c'è una decisione ufficiale. Non si propone in vendita e oggi nessun cliente lo ha
   attivo. Se qualcuno lo chiede si valuta caso per caso, e dal sito è già stato tolto. Il modulo non
   si elimina, perché potrebbe tornare. Per la KB vuol dire che gli articoli eShop si **nascondono**
   (passano a `draft`) senza riscriverli, e i file `.md` restano nel repo per un eventuale ritorno.
2. **Modelli stagionali.** Si fa **un articolo unico** con un paragrafo per festa e il rimando al
   Calendario Eventi.
3. **Articoli tolti.** Si **nascondono** (`draft`), non si cancellano.
4. **Collezione Modelli Campagne (3911).** Si **chiude**. L'articolo unico e «Promuovi le tue
   GiftCard!» passano nella collezione Campagne (7182).

## Cosa ho trovato prima di proporre

1. **L'eShop nel gestionale di oggi non c'è più come sezione di lavoro.** Nel codice del gestionale
   (`Prodotto/Gestionale Partner/.pr-vetrina-qr`, commit del 28/09/2026) la rotta `/eshop` apre solo la
   pagina `NoEshop`, che invita ad attivare il modulo. Le pagine Prodotti, Ordini e Ordini abbandonati
   esistono nel codice ma non hanno una rotta. Prima di riscrivere qualsiasi articolo eShop serve sapere
   se il modulo si vende ancora.
2. **I modelli stagionali hanno già un sostituto nel gestionale.** Esiste il **Calendario Eventi**
   (`/campagne/calendario-eventi`) con le idee per ogni festività e per settore, e c'è la pagina
   **Template** (`/template`). In KB c'è già l'articolo 61974 «Il Calendario Eventi».
3. **Gli articoli dei Modelli sono scritti dall'autore 2963**, non da 2961. Se li ripubblichiamo
   vanno passati a 2961 come da regola del progetto.
4. Immagini rotte su googleusercontent: 22 nei Modelli (San Valentino, Carnevale, Pasqua, Festa della
   Donna, Festa della Mamma) e 16 nell'eShop (6994, 7855, 6975). In più 6866 ha due immagini col
   percorso troncato.

## Modelli Campagne (collezione 3911)

| ID | Articolo | Proposta | Perché |
|---|---|---|---|
| 8883 | Campagna di San Valentino | **Unire** | Testi 2021, 4 immagini rotte. |
| 8931 | Campagna di Carnevale | **Unire** | Testi 2021, 4 immagini rotte. |
| 8932 | Campagna Festa della Donna | **Unire** | Codice «DONNA21», 4 immagini rotte. |
| 8933 | Campagna di Pasqua | **Unire** | Testi 2022, 4 immagini rotte. |
| 8968 | Campagna Festa del Papà | **Unire** | Testi 2021, immagini da ricontrollare. |
| 9571 | Campagna Festa della Mamma | **Unire** | Testi 2022, 6 immagini rotte. |
| 9156 | Campagna servizio da asporto | **Archiviare** | Linguaggio COVID (zona rossa, autocertificazione). Il tema asporto può stare come esempio nel nuovo articolo unico. |
| 25651 | Promuovi le tue GiftCard! | **Tenere e riscrivere** | È l'unico modello legato a una funzione viva. Va allineato ai Wallet appena corretti, tolto il link rotto `[.](https://perfetto.Ecco)` e riscritto con unipiazza-copy. Lo linkano 28252 e 28250. |
| 8969 | Siti per scaricare immagini gratuiti | **Archiviare** | Doppione di 30013 nella collezione Campagne (B5). Prima vanno cambiati i link che lo citano: tutti i modelli stagionali e 27452 «Suggerimenti per scrivere una Campagna Marketing perfetta» (devono puntare a 30013). |

**Gli 8 modelli stagionali diventano un articolo solo**, per esempio «Idee di campagna per le
festività», con un paragrafo breve per ogni ricorrenza (testo d'esempio senza codici con l'anno, una
sola immagine nuova su S3) e il rimando al Calendario Eventi per le idee per settore. Gli altri
articoli passano a `draft`. Così la collezione resta con 2 articoli (festività + GiftCard), e
si può valutare di spostarli nella collezione Campagne (7182) e chiudere la 3911.

In alternativa, più leggera: si tengono gli articoli separati ma si tolgono le immagini rotte e i
codici con l'anno. Costa meno subito ma lascia 8 articoli da rinfrescare ogni anno.

## eShop (collezione 3416)

La proposta dipende dalla risposta alla domanda 1 qui sotto.

**Se l'eShop non si vende più** (quello che fa pensare il codice): tutta la collezione passa a `draft`
e resta un solo articolo pubblicato, breve, che dice cosa è successo al modulo e a chi rivolgersi.
Nessuna riscrittura.

**Se l'eShop si vende ancora:**

| ID | Articolo | Proposta | Perché |
|---|---|---|---|
| 6994 | Come comunicare ai tuoi clienti che hai un eShop! | **Unire con 7855** e riscrivere | Testo identico a 7855 (B1). 8 immagini rotte. |
| 7855 | Come comunicare ai tuoi clienti che hai un eShop | **Archiviare** dopo l'unione | Doppione, `description: "prova"`, slug in conflitto col titolo. |
| 6977 | Crea codici sconto | **Riportare a draft** finché non c'è il contenuto | Corpo pubblicato «ciao a tutti». |
| 6978 | Carica i tuoi prodotti | **Riportare a draft** finché non c'è il contenuto | Corpo pubblicato «Vendi online». |
| 7003 | Come collegare Stripe | **Tenere e riscrivere** | Da verificare le commissioni Stripe citate (A10). |
| 7026 | Come organizzare le informazioni dei prodotti | **Tenere e riscrivere** | Contenuto valido, tono «voi» da portare a «tu». |
| 6866 | Come scattare una foto perfetta! | **Tenere e riscrivere** | Due immagini col percorso troncato (D2). |
| 6975 | Imballo e Spedizione | **Tenere e riscrivere** | 3 immagini rotte. |
| 11870 | Esempi vetrina eShop | **Archiviare** | 4 link a demo del 2021 con token di anteprima. Da verificare se le demo esistono ancora. |

## Cosa deve decidere Dodo

1. L'eShop si vende ancora a nuovi clienti, o ci sono clienti attivi che lo usano?
2. Modelli stagionali, articolo unico (proposta) o articoli separati ripuliti?
3. Archiviare vuol dire passare a `draft` o cancellare su Customerly? Proposta: `draft`, così i
   link esterni non si rompono di colpo e si può tornare indietro.
4. I due articoli rimasti dei Modelli restano nella collezione 3911 o passano nella collezione Campagne?

## Piano di esecuzione (preparato il 2026-11-11, da approvare)

**Articoli nuovi o riscritti, in locale e non ancora pubblicati**
1. **Nuovo** «Idee di campagna per le feste dell'anno», nella collezione Campagne (7182), file
   [idee-di-campagna-per-le-feste.md](../articles/05-campagne-autopromo-whatsapp/idee-di-campagna-per-le-feste.md) [[idee-di-campagna-per-le-feste]].
   Ha due testi per ognuna delle 6 feste e uno per l'asporto, senza codici con l'anno, e rimanda al Calendario Eventi (61974).
2. **25651** «Promuovi le tue GiftCard!», spostato nella collezione Campagne (7182), file
   [promuovi-le-tue-giftcard.md](../articles/05-campagne-autopromo-whatsapp/promuovi-le-tue-giftcard.md) [[promuovi-le-tue-giftcard]].
   Il tono è riscritto, il link rotto è tolto, i campi hanno i nomi di oggi (Messaggio principale) e i testi non parlano più solo di Natale.
3. **28252**, un link solo. Il rimando a 25651 usava l'indirizzo della collezione Modelli e adesso usa `/it/articles/25651-promuovi-le-tue-giftcard`.

**Articoli da nascondere (status `draft`, i file restano nel repo)**

| ID | Articolo | Collezione |
|---|---|---|
| 8883 | Campagna di San Valentino | 3911 |
| 8931 | Campagna di Carnevale | 3911 |
| 8932 | Campagna Festa della Donna | 3911 |
| 8933 | Campagna di Pasqua | 3911 |
| 8968 | Campagna Festa del Papà | 3911 |
| 9571 | Campagna Festa della Mamma | 3911 |
| 9156 | Campagna servizio da asporto | 3911 |
| 8969 | Siti per scaricare immagini gratuiti | 3911 |
| 6866 | Come scattare una foto perfetta! | 3416 |
| 6975 | Imballo e Spedizione | 3416 |
| 6977 | Crea codici sconto | 3416 |
| 6978 | Carica i tuoi prodotti | 3416 |
| 6994 | Come comunicare ai tuoi clienti che hai un eShop! | 3416 |
| 7003 | Come collegare Stripe | 3416 |
| 7026 | Come organizzare le informazioni dei prodotti | 3416 |
| 7855 | Come comunicare ai tuoi clienti che hai un eShop | 3416 |
| 11870 | Esempi vetrina eShop | 3416 |

**Link da correggere prima di nascondere**
Nessun articolo pubblicato punta a 8969 o agli articoli eShop. L'unico link a 8969 sta in 9472, che è
già in bozza. L'unico link verso la collezione Modelli è quello del 28252 (punto 3 qui sopra).

**Collezioni**
1. **3911 Modelli Campagne.** Quando è vuota si cancella su Customerly (`delete_kb_collection`).
   Va fatto dopo lo spostamento del 25651, se no l'articolo si perde.
2. **3416 eShop.** Senza articoli pubblicati resta vuota. Per ora non la cancello, così se il modulo
   torna si ripubblica tutto com'era. Va deciso se va bene vederla vuota nel centro assistenza.

**Da segnalare all'altra sessione (cura `overview.md`)**
Le righe delle collezioni 06 e 13 nell'overview, l'articolo nuovo e lo spostamento del 25651 nella collezione 05.

**Da segnalare a parte**
L'articolo 27450 «Cosa sono le Campagne Marketing e come si creano» al passo 3 cita ancora «una
selezione manuale di clienti» fra i destinatari, ma oggi quella voce non c'è più (verificato per il 30681).

## Esito (2026-11-11)

1. Pubblicato il nuovo articolo **70276** «Idee di campagna per le feste dell'anno» nella collezione 7182.
2. **25651** spostato nella collezione 7182 e ripubblicato riscritto.
3. **28252** ripubblicato con il link nuovo verso il 25651.
4. I 17 articoli dell'elenco sono passati a `draft`, con `is_ai_enabled: false` (così Olivia e l'AI di
   Customerly non rispondono più con contenuti vecchi) e `written_by: 2961`. Il body non è cambiato.
5. **Collezioni 3911 e 3416 non cancellate.** Senza articoli pubblicati Customerly non le mostra più
   (home del centro assistenza verificata, `/it/modelli-campagne` e `/it/eshop` danno 404). La
   cancellazione è definitiva e potrebbe portarsi via le bozze, quindi l'ho lasciata. Se si vuole
   cancellare la 3911, prima vanno spostate le sue 8 bozze in un'altra collezione.
6. Segnalati all'altra sessione gli aggiornamenti per `overview.md` e l'errore nel 27450.
