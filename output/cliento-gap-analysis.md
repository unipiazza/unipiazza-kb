# Analisi gap funzionale — Cliento × Unipiazza

*Prima bozza generata con Claude (accesso alla KB Unipiazza), integrata con note interne di Edoardo. Base di lavoro da rivedere a mano con Tommaso.*

---

## Contesto

[cliento.school](https://app.clientoschool.com/) fa formazione a retailer indipendenti. La partnership prevede che Cliento consigli Unipiazza ai propri clienti. Elena (Cliento) ha condiviso richieste dettagliate su funzionalità e automazioni. Di seguito l'analisi punto per punto.

**Premessa importante:** il modello di Cliento è strutturalmente diverso dal nostro target tradizionale. Loro usano Unipiazza come strumento autonomo per il singolo retailer, senza logiche di network condiviso. Costruiscono programmi fedeltà a livelli di spesa con benefit fissi, non su gettoni/premi da riscattare. Questo crea un disallineamento che va oltre i singoli gap tecnici e tocca la direzione strategica di Unipiazza.

---

## 🔴 Gap grandi

### 1. Tasso gettoni configurabile (X€ = 1 punto)

**Stato attuale:** fisso 1€ = 10 gettoni per tutti i merchant. Non configurabile.

**Valutazione interna:** modificare il rapporto 1:10 su un singolo shop potrebbe toccare molti altri aspetti della piattaforma in modo non prevedibile. **Da ragionare con Lorenzo** per capire l'impatto tecnico reale. Non gestibile ad oggi, e probabilmente difficile da mantenere nel tempo.

**Workaround:** nessuno reale.

**Modifica necessaria:** non definita — serve valutazione tecnica con Lorenzo prima.

---

### 2. Usare Unipiazza senza gettoni / solo per comunicazioni

**Stato attuale:** le autopromo esistono con testo offerta configurabile (80 caratteri). Il template fisso intorno parla di gettoni/premi.

**Valutazione interna:** togliere i gettoni e i premi significa togliere una delle funzionalità chiave di Unipiazza. Usare la piattaforma solo per comunicazioni e campagne è limitativo, anche perché ad oggi le automazioni sono poche. **C'è il rischio di snaturare la nostra direzione:** stiamo andando sempre più verso il potenziamento del programma fedeltà e del chiosco — e il chiosco senza gettoni è molto limitato.

Detto questo, nei **prossimi 3 mesi** abbiamo in piano un sistema di automazioni flessibili che va esattamente nella direzione di Cliento (comunicazioni e promozioni attivabili al raggiungimento di obiettivi specifici). Questo cambierebbe molto il quadro.

**Workaround oggi:** il testo offerta nelle autopromo è configurabile — il benefit può essere gestito offline dal retailer. Ma il messaggio di contorno rimane quello standard.

**Modifica necessaria:** testi autopromo completamente personalizzabili → **già in sviluppo**, risolverebbe il problema del linguaggio.

---

### 3. Livelli del programma fedeltà

**Stato attuale:** non esiste alcuna funzionalità di livelli.

**Valutazione interna:** è in pipeline. Con le automazioni flessibili si potranno creare comunicazioni al raggiungimento di un livello fedeltà, e potremmo arrivare a costruire una funzionalità dedicata sui livelli. I workaround ci sono (filtri + Make + campagne manuali), ma aggiungono complessità a un'integrazione già non banale. Da valutare se il gioco vale la candela per il test pilota.

**Workaround oggi (parziale):**
- Filtri clienti per euro spesi → lista salvata → campagna manuale
- Make: trigger "Nuovo Accredito Gettoni" → se totale euro > soglia → aggiungi nota → filtra e invia campagna
*(manuale, non scalabile, non elegante da presentare)*

**Modifica necessaria:** grande — ma in roadmap con le automazioni flessibili.

---

### 4. Automazioni personalizzate

**Stato attuale:** 8 autopromo fisse, trigger non configurabili.

**Valutazione interna:** questo punto è direttamente legato ai punti 2 e 3. Senza le automazioni flessibili (in arrivo tra ~3 mesi) siamo limitati. Via Make si possono costruire logiche custom, ma con le stesse limitazioni tecniche e di competenza descritte nel punto Make qui sotto.

---

## 🟡 Gap medi

### 5. RCS e fallback WhatsApp

**Stato attuale:** RCS gratuiti e attivi su tutti i piani. ✅

**Identificare chi non ha ricevuto l'RCS?** Non abbiamo questa opzione. Se l'RCS non viene recapitato (iPhone o Vodafone), il cliente riceve comunque l'email se disponibile. Nessun fallback automatico su WhatsApp.

**SMS come alternativa:** non sono integrati e **non sono previsti in pipeline**.

**Modifica necessaria:** fallback RCS → WhatsApp non disponibile nel breve termine. SMS fuori scope.

---

### 6. Integrazioni Make

**Stato attuale:** Make è disponibile con un piano gratuito che dovrebbe coprire la stragrande maggioranza dei casi d'uso. Se si sfora: $9/mese.

**Gestione:** Unipiazza può aiutare con template di scenario pre-configurati e assistenza, ma **ad oggi non c'è un piano strutturato** — è qualcosa da costruire assieme a Cliento e ai loro retailer.

**Competenze retailer:** i retailer di Cliento non hanno competenze tecniche. Make dovrà essere gestito da Unipiazza (as-a-service) o tramite scenari chiavi in mano.

---

## 🟢 Gap piccoli

### 7. Valuta CHF

**Stato attuale:** solo euro.

**Valutazione interna:** non è chiaro quanto sia complessa la modifica tecnica. **Da ragionare con Lorenzo.** Punto piccolo ma da non ignorare se ci sono clienti Cliento in Svizzera.

---

### 8. Personalizzazioni branding (nome punti, nome programma)

**Stato attuale:** non disponibile.

**Valutazione interna:** **in pipeline** — previsto nei prossimi mesi, entro fine anno.

---

### 9. Gift Card — scadenze differenziate

**Stato attuale:** scadenza unica per tutte le GC.

**Richiesta:** GC regalo = 12 mesi, GC premio/coupon = 3 mesi.

**Valutazione interna:** ad oggi non c'è la possibilità. **Da ragionare su alternative valide** per simulare una scadenza a 3 mesi (es. coupon eShop? gestione manuale?). Punto aperto.

---

## Le 10 Automation Cliento — stato attuale

| # | Automation | Stato | Note |
|---|-----------|-------|------|
| 1 | Benvenuto | ✅ Esiste | Testo offerta configurabile (80 char); template fisso intorno (in sviluppo) |
| 2 | Salva numero WhatsApp (gg dopo) | ❌ Non esiste | Workaround: Make → "Nuovo Cliente" + delay 24h → WA |
| 3 | Post acquisto | ⚠️ Parziale | "Prima Visita" solo per il 1° acquisto. Ogni acquisto: serve Make |
| 4 | Richiesta recensione Google | ✅ Esiste | Trigger: 2h dopo ritiro premio. Link personalizzabile. |
| 5 | Avanzamento punti / "ti mancano X" | ❌ Non esiste | Solo con Make complesso; non nativo |
| 6 | Sblocco livello | ❌ Non esiste | Livelli non esistono; in roadmap con automazioni flessibili |
| 7 | Compleanno | ✅ Esiste | Timing fisso (3gg prima). Non configurabile. |
| 8 | Post-Natale | ❌ Non esiste | Workaround: campagna manuale nel periodo |
| 9 | Inattività / riattivazione | ✅ Parziale | "A Rischio" (30gg) e "Dormienti" (90gg): esistono ma timing fisso |
| 10 | Scadenza punti | ❌ Non esiste | I gettoni non scadono in Unipiazza |

---

## La domanda strategica

Il gap principale non è tecnico ma **concettuale e di timing**. Cliento vuole usare Unipiazza in un modo che oggi la piattaforma non supporta bene — ma che supporterà molto meglio tra 3 mesi con le automazioni flessibili e i livelli in roadmap.

Le opzioni sono due:

**A) Partire ora con un programma semplificato**
- Usare le autopromo native per le comunicazioni base
- Make gestito da Unipiazza as-a-service per le automazioni extra
- Presentarlo come "versione beta della partnership", con roadmap chiara
- Rischio: snaturare l'esperienza Unipiazza e frustare i primi retailer Cliento

**B) Aspettare le automazioni flessibili (~3 mesi)**
- Partire quando la piattaforma regge meglio il caso d'uso di Cliento
- Test pilota più solido e più vicino alla visione finale
- Rischio: perdere lo slancio commerciale con Elena

*Decidere tra A e B è la call più importante da fare con Tommaso (e forse con Lorenzo).*
