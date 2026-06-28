# Analisi gap funzionale — Cliento × Unipiazza

*Analisi generata con Claude (accesso alla KB Unipiazza). Base di lavoro da rivedere a mano.*

---

## Contesto

[cliento.school](https://app.clientoschool.com/) è un'azienda italiana che fa formazione a retailer indipendenti. Stiamo valutando una partnership in cui Cliento consiglia la nostra piattaforma ai propri clienti. Elena (Cliento) ha inviato un documento con richieste e aspettative. Di seguito l'analisi punto per punto rispetto alle funzionalità Unipiazza attuali.

Il modello di Cliento è diverso dal nostro target tradizionale: lavorano con il **singolo retailer autonomo**, senza logiche di network/marketplace condiviso. I loro programmi fedeltà si basano su **livelli di spesa** e **benefit fissi per livello**, non su gettoni/premi da riscattare.

---

## 🔥 Punti caldi (richieste principali di Elena)

### 1. Tasso gettoni configurabile (X€ = 1 punto)

**Stato attuale:** fisso 1€ = 10 gettoni per tutti i merchant. Non configurabile.

**Gap:** grande. Unipiazza nasce come ecosistema condiviso con tasso uniforme. Cliento lavora con retailer di settori molto diversi (gioielleria vs caffetteria hanno scontrini medi opposti) e ha bisogno di configurare il tasso per ogni cliente.

**Workaround:** nessuno reale. Si può compensare indirettamente impostando i premi a soglie di gettoni diverse, ma il tasso 1€=10 rimane fisso e visibile al cliente sul chiosco.

**Modifica necessaria:** media — aggiungere un'impostazione per merchant del tasso/moltiplicatore gettoni. Da decidere se vale solo per merchant "standalone" o anche per chi partecipa al network condiviso.

---

### 2. Usare Unipiazza senza premi fisici / comunicazioni libere

**Stato attuale:** le autopromo esistono con testo offerta configurabile (fino a 80 caratteri). Il template del messaggio intorno è fisso e contiene riferimenti a gettoni/premi. Non c'è obbligo tecnico di creare un premio fisico, ma la comunicazione lo presuppone.

**Gap:** parziale. Il benefit può essere gestito offline dal retailer, ma il messaggio template parla di "premi" e "gettoni" — linguaggio fuori contesto per un programma a livelli.

**Workaround:** già oggi possibile. Si configura il testo offerta come "Vieni a ritirare il tuo regalo 🎂" e il retailer gestisce il benefit fisicamente. Il limite è il testo fisso intorno.

**Modifica necessaria:** piccola — testi autopromo completamente personalizzabili (**già in sviluppo**). Quando arriva questa feature, il punto si risolve del tutto.

---

### 3. Livelli del programma fedeltà

**Stato attuale:** non esiste alcuna funzionalità di livelli.

**Gap:** grande. Manca tutto:
- Definizione soglie di spesa per livello
- Passaggio automatico al superamento della soglia
- Comunicazione automatica "Hai raggiunto il Livello X"
- Benefit diversi per livello
- Nome personalizzabile dei livelli
- Automazioni dedicate per livello

**Workaround (parziale, non elegante):**
1. Filtri clienti per euro spesi → salvare come lista → campagna manuale al segmento
2. Via Make: trigger "Nuovo Accredito Gettoni" → se totale euro > soglia → aggiungi nota al cliente (es. "livello_2") → filtrare per nota e inviare campagna

Problema: è tutto manuale, non scala e non è elegante da presentare al cliente.

**Modifica necessaria:** grande — feature set completo da costruire. Per il test pilota con Cliento, il workaround Make+filtri è l'unica strada attuale, da comunicare come soluzione temporanea.

---

### 4. Automazioni personalizzate

**Stato attuale:** 8 autopromo fisse con trigger non configurabili. Nessuna logica basata su tag, categorie prodotto, importo speso, frequenza acquisto, soglie custom.

**Gap:** medio-grande per le richieste più avanzate.

**Cosa è già possibile via Make:**
- Trigger "Nuovo Cliente" → workflow onboarding custom (es. WhatsApp il giorno dopo l'iscrizione)
- Trigger "Nuovo Accredito Gettoni" → logiche su ogni acquisto (post-acquisto, avanzamento soglie)
- Azione "Aggiungi Nota" → sistema rudimentale di tag/livelli

**Limite di Make:** richiede competenze tecniche, account separato, costi propri (~9€/mese per retailer con buon volume; il piano free da 1000 ops/mese può bastare per volumi bassi). Per retailer senza competenze tech, Make deve essere gestito da Unipiazza as-a-service o tramite template di scenario pre-configurati.

**Modifica necessaria:** media — un builder di automazioni interno con condizioni configurabili è la soluzione pulita. Nel breve termine: template Make as-a-service.

---

## Altre richieste

### RCS e fallback WhatsApp

**Stato attuale:** RCS gratuiti su tutti i piani. Solo il 35% degli utenti li riceve (no iPhone, no Vodafone). Il fallback attuale è email — non WhatsApp. La logica attuale è l'opposto di quella richiesta: WhatsApp è il canale *prioritario* se collegato, poi fallback su Email/RCS.

**Richiesta Elena:** RCS come canale primario → se non recapitato → WhatsApp automaticamente ai soli non raggiungibili.

**Risposta su costi:** gli RCS sono gratuiti per Unipiazza e per il retailer. ✅

**Modifica necessaria:** media — logica di routing avanzata con rilevamento consegna RCS e fallback selettivo su WhatsApp.

---

### SMS

**Stato attuale:** non disponibili.

**Modifica necessaria:** media/grande — integrazione con provider SMS. Con RCS + WhatsApp disponibili, priorità bassa nel breve termine.

---

### Integrazioni Make — costi e gestione

- **Costi:** Make ha un piano gratuito (1000 operazioni/mese), poi da ~9€/mese. Per retailer semplici il free può bastare.
- **Competenze:** richiede configurazione tecnica — i retailer di Cliento non possono gestirlo da soli.
- **Soluzione proposta:** template di scenario Make pre-configurati + gestione as-a-service da Unipiazza per i clienti del pacchetto Cliento.
- **Sincronizzazione:** in tempo reale (webhook-based).

---

### Valuta CHF

**Stato attuale:** non supportata (sistema euro-centrico).

**Modifica necessaria:** piccola/media — configurazione valuta nel profilo merchant.

---

### Personalizzazioni branding

**Stato attuale:** non risulta disponibile dalla KB.

**Richiesta:** nome programma fedeltà personalizzabile, nome punti personalizzabile (es. "Kiss"), nome livelli (non applicabile finché i livelli non esistono).

**Modifica necessaria:** piccola — campi configurabili per nome programma e nome punti nel gestionale.

---

### Gift Card — scadenze differenziate

**Stato attuale:** scadenza unica per tutte le GC.

**Richiesta:** GC regalo = 12 mesi, GC premio/coupon = 3 mesi.

**Workaround coupon:** i coupon dell'eShop sono per lo shop online, non sostituibili alle GC nel contesto fisico.

**Modifica necessaria:** piccola — configurazione scadenza per tipo di GC o per batch.

---

## Le 10 Automation Cliento — stato attuale

| # | Automation | Stato | Note |
|---|-----------|-------|------|
| 1 | Benvenuto | ✅ Esiste | Testo offerta configurabile (80 char), template fisso intorno |
| 2 | Salva numero WhatsApp (gg dopo iscrizione) | ❌ Non esiste | Workaround: Make → trigger "Nuovo Cliente" + delay 24h → WA |
| 3 | Post acquisto | ⚠️ Parziale | "Prima Visita" solo per il 1° acquisto. Per ogni acquisto serve Make (trigger "Nuovo Accredito Gettoni") |
| 4 | Richiesta recensione Google | ✅ Esiste | Trigger: 2h dopo ritiro premio (non dopo acquisto generico). Link personalizzabile. |
| 5 | Avanzamento punti / "ti mancano X" | ❌ Non esiste | Solo con Make molto complesso; non nativo |
| 6 | Sblocco livello | ❌ Non esiste | I livelli non esistono in piattaforma |
| 7 | Compleanno | ✅ Esiste | Timing fisso: 3gg prima + reminder. Non configurabile. |
| 8 | Post-Natale (follow-up esperienza) | ❌ Non esiste | Workaround: campagna manuale programmata nel periodo |
| 9 | Inattività / riattivazione | ✅ Parziale | "A Rischio" (30gg) e "Dormienti" (90gg) esistono ma timing non configurabili |
| 10 | Scadenza punti | ❌ Non esiste | I gettoni non scadono in Unipiazza |

---

## Riepilogo gap per priorità

### 🔴 Grandi (sviluppo significativo)
- **Sistema livelli** — richiesta più impattante; Unipiazza e Cliento differiscono su questo a livello filosofico
- **Tasso gettoni configurabile per merchant**

### 🟡 Medi
- Testi autopromo completamente personalizzabili *(già in sviluppo)*
- Builder automazioni custom / ampliamento trigger
- Fallback RCS → WhatsApp

### 🟢 Piccoli (quick win, alto impatto percepito)
- Personalizzazione nome punti e nome programma
- Gift Card scadenze differenziate
- Valuta CHF

### ✅ Già possibili oggi
- Comunicazioni automatiche base (benvenuto, compleanno, inattività, recensioni) con benefit gestito offline
- Segmentazione clienti avanzata (filtri molto ricchi)
- Post acquisto / onboarding avanzato via Make
- RCS gratuiti su tutti i piani
- Campagne manuali a segmenti personalizzati

---

## Proposta per il test pilota

Portare i primi clienti Cliento su un **programma semplificato** (senza livelli), usando:
- Le autopromo native per le comunicazioni base
- Make gestito da Unipiazza as-a-service per le automazioni extra (post acquisto, onboarding avanzato)
- Comunicare chiaramente cosa è già disponibile e cosa è in roadmap

Il gap principale non è tecnico ma concettuale: Unipiazza nasce come ecosistema multi-merchant con regole condivise; Cliento vuole uno strumento CRM/comunicazione per singolo retailer autonomo. Molte cose già ci sono, ma la logica di progressione/livelli manca del tutto.
