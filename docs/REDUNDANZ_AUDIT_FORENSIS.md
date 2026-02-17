# Forensische Redundanz-Analyse index.html

**Stand:** Januar 2026 · Keine Beschönigung, nur Befunde.

---

## 1. Methodik

- **Forensisch:** Jede inhaltliche Aussage und jede Struktur auf Vorkommen im DOM verfolgt.
- **Heuristisch:** Muster (wiederholte Phrasen, gleiche Daten in anderer Form) gezählt und bewertet.
- **Detailtief:** Zeilen-/Stellenangaben, Kontext, Bewertung (Redundanz ja/teilweise/strukturell).

---

## 2. Befunde: Inhaltliche Redundanz (hoch)

### 2.1 Die 18×3-Werte werden 18+ mal wiederholt

| Quelle (Single Source) | Wiederholungen |
|------------------------|----------------|
| **Profil-Checkliste (18×3)** in `#profile-checklist`: 18 Zeilen × 3 Spalten (Standard, Regen, Winter) | **Einmal** (korrekt) |

| Wo dieselben Werte erneut stehen | Anzahl | Zeilen (Beispiele) |
|----------------------------------|--------|---------------------|
| **recommended-box** in Detailabschnitten mit Liste „Standard: X, Regen: Y, Winter: Z“ | **18** | 956, 1046, 1124, 1198, 1295, 1373, 1451, 1530, 1606, 1699, 1789, 1877, 1961, 2049, 2129, 2211, 2279, … |
| **#profiles** – 3 Profile-Karten mit „Kerneinstellungen“ (DRIVE MODE, Reku, i-Pedal, SCC, LFA, Beleuchtung …) | **1** (pro Karte eine Teilmenge der 18 Zeilen) | 836–898 |

**Bewertung:** Die **faktischen Empfehlungswerte** (z. B. „Standard: ECO“, „Regen: NORMAL“, „Winter: SNOW“) stehen in der **18×3-Tabelle genau einmal**. Dasselbe inhaltliche Faktum erscheint aber in **jeder** der 18+ „✓ Optimale Einstellungen“-Boxen erneut als Bullet-Liste. Zusätzlich fassen die **3 Profil-Karten** eine **Teilmenge** derselben Werte (Kerneinstellungen) nochmals zusammen.

**Konsequenz (streng „Inhalt nur 1×“):** Die 18×3-Tabelle wäre die **einzige** Stelle für Standard/Regen/Winter-Werte. In den Detailabschnitten stünde nur: Verweis auf Zeile N der Profil-Checkliste + Begründung (details/summary). Die 18 recommended-boxes würden die Werte nicht wiederholen, sondern nur referenzieren. Die Kerneinstellungen in #profiles würden ebenfalls nur auf die Tabelle verweisen (oder entfallen).

---

## 3. Befunde: Strukturelle Redundanz

### 3.1 Zwei TOC-Einträge für eine Sektion

| TOC-Eintrag | Ziel | Sektion |
|-------------|------|---------|
| „Empfohlene Einstellungen & Checkliste (18×3)“ | `#empfohlene-einstellungen` | Sektion „Empfohlene Einstellungen“ |
| „Erstkauf-Checkliste & Allgemeine Einstellungen“ | `#checkliste-uebersicht` | **Dieselbe** Sektion (Unterbereich) |

**Bewertung:** Zwei Klickziele im Inhaltsverzeichnis verweisen in **dieselbe** Sektion. Inhaltlich gibt es nur **eine** „Checklisten-/Einstellungs-Sektion“. Redundanz: doppelte Einstiege für denselben Kontext.

**Mögliche Bereinigung:** Ein TOC-Eintrag „Empfohlene Einstellungen, Checkliste & Allgemeine Einstellungen“ → `#empfohlene-einstellungen`. Der Anker `#checkliste-uebersicht` bleibt für direkte Links (Nav, Sidebar, Verweise im Text).

---

### 3.2 „Auf dieser Seite“-Liste doppelt im DOM

| Vorkommen | Ort | Inhalt |
|-----------|-----|--------|
| 1 | `nav .nav-on-this-page .page-nav-list` (Zeilen 90–111) | 15 Links (Inhalt, Empf. Einstellungen, Erstkauf-Checkliste, Methodik, … 1.–9. Detail) |
| 2 | `aside.page-nav .page-nav-list` (Zeilen 2343–2364) | **Exakt dieselben** 15 Links |

**Bewertung:** Die gleiche Navigationsliste existiert **zweimal** im Markup (Nav für Menü, Aside für Sidebar). Redundanz ist **strukturell** (gleicher Inhalt, zwei Stellen). UX-Grund: unterschiedliche Darstellung (Dropdown vs. Sidebar); inhaltlich 1:1-Duplikat.

---

### 3.3 section-back-link: einheitliches Muster, viele Vorkommen

Der Block „↑ Zurück zur Profil-Checkliste“ (bzw. „↑ Zur Profil-Checkliste“) erscheint **12×** (Zeilen 355, 412, 496, 577, 828, 986, 1221, 1633, 1726, 1816, 1900, 2072, 2155, 2304).

**Bewertung:** Keine inhaltliche Redundanz (es ist ein Navigationslink). Redundanz ist **musterhaft**: derselbe Link-Text an jedem Sektionsende. Akzeptabel für Konsistenz; könnte bei Bedarf per Komponente/Referenz einmal definiert werden.

---

## 4. Befunde: Formulierungs-Redundanz (gering)

### 4.1 „Einstellungen, die unabhängig vom Profil gelten“

- Zeile 333 (helper-text unter „Erstkauf-Checkliste & Allgemeine Einstellungen“): „Darunter: **Einstellungen, die unabhängig vom Profil gelten.**“
- Zeile 336 (helper-text unter „Allgemeine Einstellungen“): „**Einstellungen, die unabhängig vom Fahrprofil gelten.**“

**Bewertung:** Dieselbe Aussage zweimal in direkt benachbarten Blöcken. Eine Formulierung reicht.

---

### 4.2 Bezeichnung „Profil-Checkliste (18 Einstellungen × 3 Szenarien)“

Vorkommen: u. a. in h3 (290), in Link-Text (333, 355, 891).

**Bewertung:** Erwartbare Wiederholung für Überschrift und Verweise; keine inhaltliche Redundanz.

---

## 5. Keine Redundanz (klar abgegrenzt)

- **Meta/JSON-LD:** Nennung „Standard, Regen, Winter“ und „3 Fahrprofile“ – einmal pro Kontext (description, og, twitter, schema). Sinnvoll für SEO/Sharing.
- **Quellenangabe „KIA EV4 Bedienungsanleitung 2026“:** Mehrfach als Zitat/Begründung. Referenz, keine inhaltliche Doppelung der Empfehlungswerte.
- **Detail-Begründungen (details/summary):** Pro Einstellung eigene Argumentation. Einmalig pro Thema.

---

## 6. Zusammenfassung (ehrlich)

| Kategorie | Schwere | Vorkommen | Handlungsempfehlung |
|-----------|---------|-----------|---------------------|
| **18×3-Werte in recommended-boxes** | **Hoch** | 18+ Listen wiederholen Tabelle | Werte nur in 18×3; in Details nur Verweis + Begründung |
| **Kerneinstellungen in #profiles** | **Mittel** | 3 Karten mit Teilmenge der 18×3 | Entweder nur Verweis auf Tabelle oder bewusst als Kurzfassung kennzeichnen |
| **Zwei TOC-Einträge für eine Sektion** | **Mittel** | 2 Einträge → 1 Sektion | TOC auf einen Eintrag reduzieren |
| **„Auf dieser Seite“ doppelt** | **Strukturell** | 2× gleiche Linkliste | Dokumentieren; ggf. eine Quelle (z. B. Template) für beide |
| **Helper-Text „unabhängig vom Profil“** | **Gering** | 2× fast identisch | Eine Formulierung streichen oder zusammenführen |

---

## 7. Durchgeführte Bereinigung (nach Audit)

- **TOC:** Der zweite Eintrag „Erstkauf-Checkliste & Allgemeine Einstellungen“ wurde entfernt. Es gibt nur noch einen TOC-Eintrag für die Sektion: „Empfohlene Einstellungen & Checkliste (18×3)“ → `#empfohlene-einstellungen`. Der Anker `#checkliste-uebersicht` bleibt erhalten (Nav, Sidebar, inhaltliche Verweise).
- **Helper-Text:** Die doppelte Formulierung „Einstellungen, die unabhängig vom Fahrprofil gelten“ unter dem h4 „Allgemeine Einstellungen“ wurde entfernt (Aussage steht bereits im Absatz darüber).
- **Pilot Verweis auf Single Source:** In der ersten recommended-box (Fahrmodus) wurde der Satz ergänzt: „Werte wie in der Profil-Checkliste (18×3), Zeile 1.“ Damit ist die Tabelle als kanonische Quelle in mindestens einem Detailabschnitt explizit referenziert.

Die übrigen empfohlenen Schritte (alle recommended-boxes auf reine Verweise umstellen, Kerneinstellungen in #profiles nur referenzieren, „Auf dieser Seite“ aus einer Quelle speisen) sind optional und im Dokument als Nächste Schritte beschrieben.

---

## 8. Nächste Schritte (optional)

1. **TOC:** Einen Eintrag „Empfohlene Einstellungen, Checkliste & Allgemeine Einstellungen“; zweiten TOC-Eintrag für #checkliste-uebersicht entfernen (Anker für Deep-Links beibehalten).
2. **Helper-Text:** Doppelte Formulierung „unabhängig vom Profil“ in einem der beiden Blöcke entfernen.
3. **Recommended-boxes:** Pilot in einem Detailabschnitt (z. B. Fahrmodus): Werte-Liste durch einen Satz „Wie in der <a href="#profile-checklist">Profil-Checkliste (18×3)</a>, Zeile 1.“ ersetzen; Rest nur Begründung. Bei positivem Nutzer-Feedback auf alle 18 Unterabschnitte ausrollen.
4. **Profil-Karten:** Entweder Kerneinstellungen durch „Siehe Profil-Checkliste, Spalte Standard/Regen/Winter“ ersetzen oder klar als „Kurzfassung (Auszug)“ kennzeichnen.
