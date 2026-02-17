# Forensisches Redundanz-Audit – HTML & Aufbau

**Stand:** Februar 2026  
**Gegenstand:** [index.html](../index.html) – Redundanzen, Duplikate, strukturelle Problematiken  
**Methodik:** Heuristisch, forensisch, detailtief

---

## Executive Summary

| Kategorie | Befund | Priorität |
|-----------|--------|-----------|
| **Daten-Duplikation** | P3–P6 Paket-Tabelle in Quellen und Preisliste identisch | Hoch |
| **HTML-Duplikation** | „Auf dieser Seite“-Liste zweimal (Nav + Sidebar) | Hoch |
| **Quellenangabe** | KIA Preisliste PDF 3× referenziert, 2 verschiedene URLs | Mittel |
| **Navigation** | Drei Systeme (Nav, TOC, page-nav) mit überlappenden Links | Mittel |
| **Terminologie** | „Galerie“ vs. „Fahrzeugbilder“ inkonsistent | Niedrig |
| **TOC vs. H2** | „Beleuchtung“ (TOC) vs. „Beleuchtungssysteme“ (H2) | Niedrig |

---

## 1. Daten-Redundanz: P3–P6 Paket-Tabelle

### Befund

Die **vier Pakete P3–P6** (Upgrade, Technology, Winter-Connect, DriveWise-Park) erscheinen in **zwei Tabellen** mit nahezu identischem Inhalt:

| Ort | Zeilen | Tabelle | Spalten |
|-----|--------|---------|---------|
| **Quellen** (#quellen-fahrzeugdaten-earth) | 511–522 | `specs-packages-table` | Paket, Bezeichnung, Kurzbeschreibung (Highlights), Preis (EUR, UVP) |
| **Preisliste** (#preisliste-pakete-earth) | 752–782 | `preisliste-table--pakete` | Paket, Bezeichnung, Voraussetzung, Inhalt (Kurz), Preis (€) |

**Vergleich P3–P6 (Inhalt):**

| Paket | Quellen (Kurzbeschreibung) | Preisliste (Inhalt) | Preis |
|-------|----------------------------|---------------------|-------|
| P3 | Privacy-Verglasung; BCA/RCCA/SEA; … | identisch | 1.350 € |
| P4 | Heckklappe elektrisch; Adaptive Dual-LED; … | identisch | 1.190 € |
| P5 | Wärmepumpe; V2L; V2X; … | identisch | 1.300 € |
| P6 | FCA 2.0; HDA 2.0; PCA; … | identisch | 1.390 € |

**Fazit:** Vollständige inhaltliche Duplikation. Die Preisliste enthält zusätzlich P7–P9; die Quellen-Tabelle dient nur der Kontextualisierung „Earth 81 kWh (P3–P6)“.

### Empfehlung

| Option | Aufwand | Risiko | Beschreibung |
|--------|---------|--------|--------------|
| **A** | Gering | Niedrig | Quellen-Tabelle entfernen, stattdessen Verweis: „Definition P3–P6 siehe [Preisliste → Earth](#preisliste-pakete-earth).“ |
| **B** | Mittel | Mittel | Quellen-Tabelle auf P3–P6 reduzieren und per `data-*` oder JS aus einer gemeinsamen Quelle (JSON) füllen – Single Source of Truth. |
| **C** | Gering | Niedrig | Quellen-Tabelle belassen, aber explizit als „Auszug aus Preisliste“ kennzeichnen und auf #preisliste-pakete-earth verlinken. |

**Priorität:** Hoch – Wartungsaufwand bei Preisänderungen verdoppelt sich.

---

## 2. HTML-Duplikation: „Auf dieser Seite“-Navigation

### Befund

Die **gleiche 16-Link-Liste** erscheint an **zwei Stellen**:

| Ort | Zeilen | Kontext | Sichtbarkeit |
|-----|--------|---------|--------------|
| **Nav (Hamburger)** | 91–111 | `div.nav-on-this-page.page-nav` innerhalb `#nav-menu` | Mobile (Drawer) |
| **Sidebar** | 2328–2352 | `aside.page-nav` als Grid-Kind von `main.container` | Desktop (sticky) |

**Inhalt identisch:**
- Inhalt, Einstellungen & Profile, Erstkauf-Checkliste, Methodik, Quellen, Fahrzeugbilder, Preisliste
- 1. Fahrmodus … 9. Personalisierung

### Empfehlung

| Option | Aufwand | Risiko | Beschreibung |
|--------|---------|--------|--------------|
| **A** | Mittel | Mittel | **Single DOM:** Ein `aside.page-nav` mit `position: sticky`; per CSS `@media` im Mobile-Modus in den Nav-Drawer verschieben (z. B. `order`, `position`, oder JS-Klon). |
| **B** | Gering | Niedrig | **JS-Klon:** Eine Quelle im DOM, zweite Instanz per JS klonen – Redundanz bleibt, aber Single Source im HTML. |
| **C** | Gering | Niedrig | **Belassen:** Responsive-Design rechtfertigt Duplikation (Drawer vs. Sidebar). Dokumentieren und bei Änderungen beide Stellen pflegen. |

**Priorität:** Hoch – Änderungen an der Linkliste müssen an zwei Stellen erfolgen.

---

## 3. Quellenangabe KIA Preisliste: Dreifache Referenz

### Befund

Die **KIA EV4 Preisliste (PDF)** wird an **drei Stellen** genannt:

| Zeile | Klasse | Inhalt | URL |
|-------|--------|--------|-----|
| 508 | `quellen-methodik-ref` | Quelle: KIA EV4 Preisliste (PDF) · Preisliste | `docs/Kia-Germany-EV4-Preisliste.pdf` |
| 629 | `quellen-methodik-ref` | Unverbindlich, 19% MwSt. Quelle: … Stand: 1. Februar 2026 | `https://www.kia.com/.../Kia-Germany-EV4-Preisliste.pdf` |
| 873 | `preisliste-disclaimer` | Hinweis: Preisliste unverbindlich … Stand: 1. Februar 2026, Modelljahr 2026 | `https://www.kia.com/.../Kia-Germany-EV4-Preisliste.pdf` |

**Problematiken:**
1. **Zwei verschiedene URLs:** Lokal `docs/` vs. extern `kia.com` – Inkonsistenz, evtl. unterschiedliche Versionen.
2. **Redundanter Text:** „Unverbindlich, inkl. 19% MwSt.“ in Zeile 629 und 873 nahezu identisch.
3. **Zeile 631** (`preisliste-key-facts-intro`): „Grundpreise (unverbindlich, inkl. 19% MwSt.):“ – dritte Nennung des MwSt.-Hinweises.

### Empfehlung

| Maßnahme | Priorität |
|----------|------------|
| **URL vereinheitlichen:** Entweder durchgehend `docs/Kia-Germany-EV4-Preisliste.pdf` (lokal) oder `kia.com` (offiziell). Bei lokal: Hinweis „Stand: …“ beibehalten. | Mittel |
| **Disclaimer konsolidieren:** Zeile 629 und 873 zusammenführen – ein `preisliste-disclaimer` am Ende der Preisliste-Sektion, Verweis von Quellen aus. | Mittel |
| **key-facts-intro:** „Grundpreise:“ reicht; MwSt.-Hinweis nur im Disclaimer. | Niedrig |

---

## 4. Navigation: Drei überlappende Systeme

### Befund

| System | Ort | Links | Zweck |
|--------|-----|------|-------|
| **Haupt-Nav** | 76–113 | Inhalt, Einstellungen, Checkliste, Methodik, Quellen, Galerie, Preisliste | Grobe Orientierung |
| **TOC** | 177–270 | Überblick (5) + Detail 1–9 (9) | Strukturierte Dokumentnavigation |
| **page-nav** | 91–111, 2328–2352 | 16 Links (Überblick + Detail 1–9) | „Auf dieser Seite“ (sticky/sidebar) |

**Überlappung:**
- Nav und page-nav verlinken dieselben 7 Hauptsektionen + 9 Details.
- TOC bietet zusätzlich Icons und längere Labels (z. B. „Rekuperation & Bremssystem“ vs. „2. Rekuperation“).

### Bewertung

- **Keine echte Redundanz:** Verschiedene Kontexte (Nav = global, TOC = Inhaltsverzeichnis, page-nav = Abschnitts-Sprung).
- **Potenzielle Verwirrung:** Drei Wege zum gleichen Ziel können Nutzer verwirren; für Barrierefreiheit und Keyboard-Navigation jedoch vorteilhaft.

### Empfehlung

| Maßnahme | Priorität |
|----------|------------|
| **Belassen** – unterschiedliche Nutzungskontexte. | – |
| **Optional:** Nav auf 5–7 Hauptlinks reduzieren, Detail-Links nur in TOC und page-nav. | Niedrig |

---

## 5. Terminologie-Inkonsistenzen

### 5.1 Galerie vs. Fahrzeugbilder

| Kontext | Bezeichnung | Ziel |
|---------|-------------|------|
| Nav | „Galerie“ | #galerie |
| page-nav | „Fahrzeugbilder“ | #galerie |
| TOC | „Fahrzeugbilder (Galerie)“ | #galerie |
| H2 | „Fahrzeugbilder (Galerie)“ | – |

**Empfehlung:** Einheitlich „Fahrzeugbilder (Galerie)“ oder kurz „Galerie“ in Nav und page-nav. Aktuell: Nav „Galerie“, page-nav „Fahrzeugbilder“ – vereinheitlichen.

### 5.2 Beleuchtung vs. Beleuchtungssysteme

| Kontext | Bezeichnung |
|---------|-------------|
| TOC | „Beleuchtung“ |
| page-nav | „5. Beleuchtung“ |
| H2 (#lighting) | „Beleuchtungssysteme“ |

**Empfehlung:** TOC und page-nav können „Beleuchtung“ beibehalten (Kurzform); H2 „Beleuchtungssysteme“ ist präziser. Kein Handlungsbedarf, nur dokumentieren.

---

## 6. Weitere strukturelle Befunde

### 6.1 Section-Back-Links: Uneinheitliche Muster

| Sektion | Back-Links |
|---------|------------|
| Methodik | ↑ Profil-Checkliste · ↑ Die 3 Szenarien |
| Quellen | ↑ Methodik · ↑ Die 3 Szenarien · ↑ Preisliste |
| Galerie | ↑ Quellen · ↑ Preisliste · ↑ Einstellungen & Profile |
| Preisliste | (kein section-back-link) |
| Detail 1–9 | variabel: ↑ Profil-Checkliste · ↑ Die 3 Szenarien |

**Befund:** Galerie hat 3 Links, andere 2; Preisliste hat keinen. Keine klare Konvention.

### 6.2 TOC-Markup: Uneinheitliche Einrückung

- Zeilen 183–188: `toc-item` mit 16 Leerzeichen
- Zeilen 189–194: `toc-item` mit 8 Leerzeichen
- Kein funktionaler Einfluss, aber Wartbarkeit.

### 6.3 PDF-URL-Inkonsistenz

- Quellen (508): `docs/Kia-Germany-EV4-Preisliste.pdf` (relativ)
- Preisliste (629, 873): `https://www.kia.com/.../Kia-Germany-EV4-Preisliste.pdf` (absolut)

**Risiko:** Lokale Kopie vs. Live-URL können divergieren.

---

## 7. Priorisierte Handlungsliste

| Prio | Maßnahme | Art | Aufwand |
|------|----------|-----|---------|
| **P1** | P3–P6-Tabelle: Quellen-Tabelle entfernen oder auf Verweis reduzieren | HTML | Gering |
| **P1** | page-nav: Single Source (ein DOM-Element, CSS/JS für Drawer+Sidebar) | HTML+CSS | Mittel |
| **P2** | KIA Preisliste: URL vereinheitlichen, Disclaimer konsolidieren | HTML | Gering |
| **P2** | Galerie/Fahrzeugbilder: Bezeichnung in Nav und page-nav vereinheitlichen | HTML | Gering |
| **P3** | Section-back-link: Konvention dokumentieren, Preisliste ergänzen | HTML | Gering |
| **P3** | TOC-Einrückung bereinigen | HTML | Gering |

---

## 8. Validierung & Rollback

- **P3–P6:** Nach Entfernung: Alle Verweise auf `#quellen-fahrzeugdaten-earth` prüfen; ggf. auf `#preisliste-pakete-earth` umstellen.
- **page-nav:** Nach Single-Source-Änderung: Mobile Drawer und Desktop Sidebar visuell und per Tastatur testen.
- **URL-Konsolidierung:** Beide PDF-URLs testen (lokal + extern).

---

## 9. Changelog (Audit)

| Datum | Änderung |
|-------|----------|
| Feb 2026 | Initiales forensisches Redundanz-Audit |
| Feb 2026 | **Umsetzung:** P3–P6-Tabelle entfernt, Verweis auf Preisliste; page-nav Single Source (JS-Klon); KIA-Preisliste URL vereinheitlicht, Disclaimer konsolidiert; Galerie/Fahrzeugbilder vereinheitlicht; TOC-Einrückung bereinigt |
