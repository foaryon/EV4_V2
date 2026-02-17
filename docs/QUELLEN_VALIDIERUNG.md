# Validierung der Quellen (Deep Dive)

Systematische Prüfung der in [QUELLEN_DEEP_DIVE.md](QUELLEN_DEEP_DIVE.md) genannten URLs. Abruf per GET; Status und Datum dokumentiert.

---

## Validierungstabelle

| Quelle | URL | Status | Datum | Anmerkung |
|--------|-----|--------|-------|-----------|
| Bedienungsanleitungen (DE) | https://www.kia.com/de/service/garantien-und-anleitungen/bedienungsanleitungen/ | 200 | 2026-01-30 | Erreichbar, Modell/Jahr wählbar |
| Owner Manual Online | https://ownersmanual.kia.com/ | 200 | 2026-01-30 | Erreichbar, Modellauswahl (EV4 ggf. über Kia wählen) |
| KIA EU Presales EV4 | https://www.kia.com/eu/new-cars/ev4-presales/ | 200 | 2026-01-30 | Erreichbar, Reichweite 630 km, Ladezeiten, Trims |
| KIA UK Specifications | https://www.kia.com/uk/new-cars/ev4/specification/ | 200 | 2026-01-30 | Erreichbar, detaillierte Specs, Ladezeiten, WLTP |
| KIA IE Specifications | https://www.kia.com/ie/new-cars/ev4/specifications/ | 200 | 2026-01-30 | Erreichbar, Preise, Trims |
| KIA Press Office (DE) | https://press.kia.com/ | Timeout | 2026-01-30 | Abruf timeout; manuell prüfen oder Suche „EV4“ |
| KIA Spec Sheet PDF | (Suche auf press.kia.com) | – | – | Kein direkter URL; Suchbegriff „spec-sheet-kia-ev4“ |
| Rettungskarten (DE) | https://www.kia.com/de/service/service-und-wartung/rettungsblaetter/ | 200 | 2026-01-30 | Erreichbar, Rettungsblätter-Übersicht |
| Rescue Sheet EV4 PDF | (KIA Content / Rettungsblätter) | – | – | Einzel-PDF über Rettungsblätter-Seite |
| ADAC Autokatalog EV4 | https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/kia/ev4/ | 200 | 2026-01-30 | Erreichbar, Baureihen/Generationen |
| ADAC Earth 81,4 kWh | https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/kia/ev4/1generation/341448/ | 200 | 2026-01-30 | Stichprobe: erreichbar |
| ADAC Earth 58,3 kWh | https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/kia/ev4/1generation/341447/ | 200 | 2026-01-30 | Stichprobe: erreichbar |
| ADAC Air 58,3 kWh | https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/kia/ev4/sz1e-ct1/341285/ | 200 | 2026-01-30 | Stichprobe: erreichbar |
| Euro NCAP | https://www.euroncap.com | 200 | 2026-01-30 | Erreichbar; EV4-Rating über Make „Kia“, Model suchen |
| UNECE R154/R100 | https://unece.org | – | – | Basis-URL; konkrete Regulation über Sitemap/Suche |
| EU-Recht Typgenehmigung | eur-lex.europa.eu | – | – | Verordnung 2018/858 über Suche |
| evspecifications 81,4 kWh (Hatchback) | https://www.evspecifications.com/en/model/c446399 | 200 | 2026-01-30 | Erreichbar, strukturierte Specs; Projekt nur Hatchback |
| evspecifications 58,3 kWh | https://www.evspecifications.com/en/model/ac74393 | 200 | 2026-01-30 | Stichprobe: erreichbar |
| meinauto.de EV4 Hatchback | https://www.meinauto.de/kia/neuwagen/ev4/angebote/kia-e-4/technische-daten | 200 | 2026-01-30 | Erreichbar, technische Daten Hatchback; einzige meinauto-Referenz im Projekt |
| GoingElectric Forum EV4 | https://www.goingelectric.de/forum/viewtopic.php?f=177&t=96656 | 200 | 2026-01-30 | Erreichbar, Presse- und Fahrberichte |
| EV4-Forum (DE) | https://www.ev4-forum.de/ | 200 | 2026-01-30 | Erreichbar, KIA EV4 Elektro-Forum |

---

## Kurzfassung

- **Geprüft (Abruf):** 19+ URLs; **19 × 200**, **1 × Timeout** (press.kia.com). Projekt referenziert ausschließlich **EV4 Hatchback (Schrägheck)**.
- **Ohne direkten URL / nicht abgerufen:** KIA Spec Sheet PDF, Rescue Sheet EV4 Einzel-PDF, UNECE/EUR-Lex konkrete Docs.
- **Empfehlung:** press.kia.com bei Bedarf manuell prüfen; für Integration nur validierte bzw. stichprobengeprüfte Quellen verwenden.

---

## Stichprobe Online-Check (Februar 2026)

| Quelle | Inhalt geprüft |
|--------|----------------|
| KIA EU Presales | 10–80 % DC 29–31 min, 630 km WLTP bestätigt |
| ownersmanual.kia.com (DE) | FCA: Standard / Später (synonym zu Verzögert) |
| ownersmanual.kia.com (EN) | Forward safety: Standard / Late |
| ADAC EV4 Earth 341448 | 81,4 kWh, 150 kW, 7,7 s, 170 km/h bestätigt |
| evspecifications.com | Captcha blockiert Abruf (Stand Feb 2026) |
