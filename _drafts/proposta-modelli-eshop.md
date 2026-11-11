# Proposta per Modelli Campagne ed eShop

Bozza del 2026-11-11, da far decidere a Dodo. Nessun articolo è stato toccato.
Riferimenti: [AUDIT-KB.md](../AUDIT-KB.md) [[AUDIT-KB]] (sezioni A6, A7, B1, B2, B5, D1, D2, E6) e [overview.md](../overview.md) [[overview]].

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
