# Designverbesserungspotenzial – HTML (forensisch & heuristisch)

**Stand:** Januar 2026  
**Gegenstand:** [index.html](../index.html) – wo Design über Markup verbessert werden kann und welches grundsätzliche Potenzial besteht.  
**Fokus:** Struktur, Konsistenz, Skalierbarkeit, Kopplung zu CSS, keine inhaltlichen Änderungen.

---

## Umsetzungsstand (umgesetzt)

| Maßnahme | Status |
|----------|--------|
| TOC als `<section>`, `aria-labelledby="toc-heading"`, `h2 id="toc-heading"` | ✅ |
| Methodology: `class="content-section"` | ✅ |
| Alle 9 Detail-Sektionen: `class="detail-section"` | ✅ |
| Section-Back-Links vereinheitlicht („↑ Zur Profil-Checkliste“, „↑ Die 3 Szenarien“) | ✅ |
| Icons einheitlich `<span class="material-symbols-outlined" aria-hidden="true">` | ✅ |
| Footer-Anker (`#impressum`, `#datenschutz`) entfernt | ✅ |
| Doppelte helper-text: Preisliste + Quellen zusammengeführt | ✅ |
| Tote CSS-Klassen (.profiles, .profile-card, …) entfernt | ✅ |
| `<details>`: spezifische `aria-label` (Begründung, Technische Funktion, Auswirkungsanalyse) | ✅ |
| Komponenten-Übersicht (siehe 2.1) | ✅ |
| Section h2: responsive `clamp()` für Mobile (≤480px) | ✅ |
| Nav-Link „Erstkauf-Checkliste“ (#checkliste-uebersicht) in Haupt-Nav | ✅ |
| quellen-methodik-ref, preisliste-disclaimer: role="note" | ✅ |
| body.lightbox-open: overflow hidden (Konsistenz mit Nav/Suche) | ✅ |
| Container-Gutter ≤360px: 0.75rem für sehr kleine Viewports | ✅ |

---

## 1. Wo wir konkret ansetzen können

### 1.1 Sektionen: Einheitliche Landmarks und Klassen

| Thema | Aktuell | Empfehlung | Nutzen |
|-------|---------|------------|--------|
| **TOC als Section** | `<div class="toc" id="toc">` | `<section class="toc" id="toc" aria-labelledby="toc-heading">` mit `<h2 id="toc-heading">` | Einheitlicher Landmark, bessere Outline/Navigation für AT. |
| **Methodology ohne Section-Class** | `<section id="methodology">` | `<section id="methodology" class="content-section">` (oder `methodology-section`) | Gleiche Stil-/Layout-Optionen wie andere Inhaltssektionen (z. B. Abstände, max-width) ohne ID-Selektoren. |
| **Detail-Sektionen ohne gemeinsame Klasse** | `<section id="drive-mode">` etc. – nur `id` | `<section id="drive-mode" class="detail-section">` für alle 9 | Ein Ort für Styling (z. B. `scroll-margin-top`, Abstand nach Breadcrumb, evtl. dezenter Hintergrund) und für JS (z. B. Scroll-Spy, „Auf dieser Seite“). |

**Priorität:** Mittel. Sofort umsetzbar, keine Inhaltsänderung.

---

### 1.2 Konsistenz im Markup

| Thema | Befund | Empfehlung |
|-------|--------|------------|
| **Icon-Element** | Section-H2: `<i class="material-symbols-outlined">`. Galerie-Group-Headings: `<span class="material-symbols-outlined">`. | Einheitlich `<span class="material-symbols-outlined" aria-hidden="true">` (semantisch neutral, kein „i“). Oder überall `<i>` belassen und in CSS einheitlich ansprechen. |
| **Section-Back-Link Formulierung** | Mal „↑ Zur Profil-Checkliste (18 × 3)“, mal „↑ Zurück zur Profil-Checkliste“, mal „↑ Die 3 Szenarien“ vs. „Die 3 Szenarien“ (ohne Pfeil). | Ein einheitliches Muster: z. B. immer „↑ Zur Profil-Checkliste“ in Detail-Sektionen, in Überblickssektionen einheitlich „↑ …“ für alle Links. |
| **Doppelte helper-text** | Z. B. Preisliste: zwei aufeinanderfolgende `<p class="helper-text">`. | Entweder in einen Absatz zusammenführen oder in ein kleines Wrapper-Element (z. B. `<div class="helper-block">`) für klare visuelle Gruppe. |

**Priorität:** Niedrig bis Mittel. Verbessert Lesbarkeit und Wartung.

---

### 1.3 Überflüssiges Markup

| Thema | Befund | Empfehlung |
|-------|--------|------------|
| **Footer-Anker** | `<span id="impressum">` und `<span id="datenschutz">` mit `visually-hidden` und `aria-hidden="true"`. Links zeigen auf `href="#"`. | Spans entfernen – sie werden nicht mehr angesprungen und bringen keinen Mehrwert. Bei späteren echten Impressum/Datenschutz-Seiten: normale Links auf neue URLs. |

**Priorität:** Niedrig. Reduziert tote Anker und leichte Verwirrung bei Inspektion.

---

### 1.4 Tote CSS-Klassen (HTML nutzt sie nicht)

Im aktuellen HTML **nicht vorkommend**, im CSS aber definiert:

- `.profiles` (Grid für ehemalige Profil-Karten)
- `.profiles-intro`
- `.profile-card` (inkl. `.profile-card h3`, `.profile-card .icon`, `.profile-card .profile-settings` etc.)
- `.profile-checklist-cta`
- `.checkliste-profile-links`

**Empfehlung:** Diese Regeln in `main.css` entweder **entfernen** (Design-Bereinigung) oder nur dann behalten, wenn ihr sie an anderer Stelle (z. B. Druckansicht oder eine alternative Ansicht) gezielt wieder nutzen wollt. Sonst: tote Last und unklares Design-System.

**Priorität:** Mittel. Kein HTML-Change nötig; Verbesserung durch CSS-Bereinigung.

---

## 2. Grundsätzliches Verbesserungspotenzial

### 2.1 Kein explizites Design-System im Markup

- Komponenten wie **Card** (TOC-Item, Profil-Szenario-Karte), **Box** (recommended-box, source-inline-box), **Back-Link**, **Table-Wrapper** sind implizit über Klassen da, aber nicht als wiedererkennbare Bausteine dokumentiert oder per Konvention benannt.
- **Nutzen einer leichten Systematisierung:**  
  - Gemeinsame Basisklasse (z. B. `.card`, `.content-box`) + Modifier (`.card--toc`, `.content-box--recommended`) erleichtern einheitliches Spacing, Schatten, Radius und Responsive.  
  - Dokumentation (z. B. in README oder einer kleinen Komponenten-Übersicht) hilft beim Erweitern ohne Stil-Drift.

**Vorschlag:**  
- Entweder schrittweise BEM-artige Modifier einführen (z. B. `.content-box--recommended`, `.content-box--source`) und in CSS die gemeinsamen Werte aus `:root`/Tokens nutzen.  
- Oder nur intern dokumentieren: „TOC-Karten = .toc .toc-item a, Szenario-Karten = .profile-szenario-card, Empfehlungsbox = .recommended-box“ usw., damit Erweiterungen konsistent bleiben.

**Komponenten-Übersicht (intern):**

| Komponente | Markup | Verwendung |
|------------|--------|------------|
| TOC-Karte | `.toc .toc-item a` (+ `.toc-icon`, `.toc-text`) | Inhaltsverzeichnis-Links |
| Szenario-Karte | `.profile-szenario-card` (+ `.profile-szenario-icon`, `.profile-szenario-dl`) | Die 3 Szenarien in #empfohlene-einstellungen |
| Empfehlungsbox | `.recommended-box` | Profil-Empfehlung in Detail-Sektionen |
| Quellen-Inline-Box | `.source-inline-box` | Externe Quelle (B/C) in Detail-Sektionen |
| Section-Back-Link | `.section-back-link` | Zurück zur Profil-Checkliste / Methodik / Quellen |
| Tabellen-Wrapper | `.responsive-table-wrapper` | Alle Tabellen (overflow-x, aria-label am table) |

---

### 2.2 Lange Einzelseite und Wiederverwendung

- Die **9 Detail-Sektionen** folgen dem gleichen Muster: Breadcrumb → H2 (Nummer + Icon + Titel) → H3/H4 → Optionen → details/summary → recommended-box → ggf. source-inline-box → section-back-link.
- **Potenzial:**  
  - **Kurzfristig:** Gemeinsame Klasse `.detail-section` (siehe 1.1) + ggf. `data-section-index="1"` … `"9"` für evtl. Scroll-Spy oder Nummerierung aus Daten.  
  - **Mittelfristig:** Wenn weitere „Detail“-Kapitel dazukommen: Inhalte aus einem strukturierten Datensatz (z. B. JSON/Markdown) generieren und ein gemeinsames Template (Build-Schritt oder kleines JS) nutzen – dann bleibt das Layout konsistent und die Datei überschaubar.

---

### 2.3 „Auf dieser Seite“ ohne JS

- Die Sidebar „Auf dieser Seite“ und die Nav-Liste werden per **Scroll-Spy (JS)** mit `.is-active` / `aria-current="location"` versehen.
- **Ohne JS** gibt es keine visuelle „aktueller Abschnitt“-Anzeige.
- **Low-Cost-Verbesserung im Markup:**  
  - Links in der Sidebar so belassen, dass sie auf `#drive-mode`, `#regen` usw. verweisen.  
  - Im CSS einen **:target**-Zustand nutzen: z. B. `aside .page-nav-list a[href="#drive-mode"]:target` ist nicht möglich (target ist das angezielte Element), aber man kann `section:target` nutzen und in der Sidebar den passenden Link z. B. über ein kleines Script oder über `:has()` (wo unterstützt) hervorheben.  
  - Einfacher: Für **ohne JS** reicht, dass die Links funktionieren; die Hervorhebung bleibt ein Enhancement. Optional in der Sidebar einen kurzen Hinweis „Aktueller Abschnitt wird beim Scrollen hervorgehoben“ (nur sichtbar, wenn JS aktiv).

---

### 2.4 Barrierefreiheit und Design

- Skip-Link, Fokus-Styles, ARIA und semantische Überschriften sind bereits gut genutzt.
- **Weiteres Potenzial:**  
  - Bei **details/summary** (Begründung, Technische Funktion, Auswirkungsanalyse): Einheitliches `aria-label` oder `aria-labelledby` auf den `<details>`, wo es die Überschrift eindeutig macht.  
  - **Reduced Motion:** Bereits in JS berücksichtigt; im HTML können `data-reduced-motion` oder Klassen vermieden werden – CSS `prefers-reduced-motion` reicht, sofern alle Animationen dort abhängig sind.

---

### 2.5 Tabellen und responsive Verhalten

- Durchgehend `.responsive-table-wrapper` + Tabellen mit `aria-label` / `aria-describedby` – gut.
- **Potenzial:**  
  - Sehr breite Tabellen (z. B. Preisliste-Varianten, 18×3-Checkliste) könnten auf kleinen Viewports mit **priorisierten Spalten** (z. B. erste Spalte + eine Profil-Spalte sichtbar, Rest horizontal scrollbar) oder mit einer **Karten-Ansicht** (CSS oder kleines JS) angeboten werden. Das wäre vor allem eine **CSS/JS-Erweiterung**; im HTML reicht die aktuelle Struktur (table in wrapper), ggf. mit `data-break="cards"` o. Ä. für eine spätere Umsetzung.

---

## 3. Priorisierte Handlungsliste

| Priorität | Maßnahme | Aufwand | Art |
|-----------|----------|---------|-----|
| **M** | Detail-Sektionen: gemeinsame Klasse `detail-section` ergänzen | Gering | HTML |
| **M** | TOC: von `div` zu `section` + `aria-labelledby` | Gering | HTML |
| **M** | Methodology: Section-Class (z. B. `content-section`) setzen | Gering | HTML |
| **M** | Tote CSS-Klassen (.profiles, .profile-card, .profile-checklist-cta, .checkliste-profile-links, .profiles-intro) entfernen oder dokumentieren | Mittel | CSS |
| **N** | Section-Back-Link Texte vereinheitlichen | Gering | HTML |
| **N** | Icons einheitlich `<span class="material-symbols-outlined" aria-hidden="true">` (oder einheitlich `<i>`) | Gering | HTML |
| **N** | Footer: `<span id="impressum">` und `id="datenschutz"` entfernen | Gering | HTML |
| **N** | Doppelte helper-text Absätze (z. B. Preisliste) gruppieren oder zusammenführen | Gering | HTML |
| **L** | Leichtes Design-System: Basisklassen + Modifier dokumentieren oder schrittweise einführen | Mittel | HTML + CSS + Docs |
| **L** | Bei Wachstum: Detail-Inhalte aus Daten generieren, gemeinsames Template | Hoch | Architektur |

**Legende:** M = mittel, N = niedrig, L = langfristig.

---

## 4. Kurzfassung

- **Sofort umsetzbar (HTML):** Einheitliche Sektionen (TOC als `section`, Methodology + Detail-Sektionen mit Klassen), einheitliche Section-Back-Link-Texte, einheitliches Icon-Markup, Entfernen der Footer-Anker, Zusammenfassen doppelter helper-text.
- **Ohne HTML-Änderung:** Tote CSS-Klassen (.profiles, .profile-card, …) in `main.css` entfernen oder dokumentieren.
- **Grundsätzlich:** Gemeinsame Klasse für Detail-Sektionen und leichte Design-System-Dokumentation bringen das größte Nutzen/Kosten-Verhältnis; mittelfristig lohnt sich eine datengetriebene Generierung der Detail-Abschnitte, wenn die Seite weiter wächst.

Alle genannten Punkte sind **Design- und Strukturverbesserungen**; inhaltliche Empfehlungen (Profil-Checkliste) bleiben unberührt.

---

## 5. Verwandte Audits

- **[AUDIT_REDUNDANZEN_HTML_2026.md](AUDIT_REDUNDANZEN_HTML_2026.md)** – Forensisches Redundanz-Audit: P3–P6-Duplikation, page-nav-Duplikation, KIA-Preisliste-Referenzen, Terminologie
