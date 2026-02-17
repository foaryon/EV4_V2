# Audit index.html – Stimmigkeit, Korrektheit, Integration, Formatierung

**Datum:** Januar 2026  
**Geprüft:** index.html (KIA EV4 Systemanalyse, 3 Profile Standard/Regen/Winter)

---

## 1. Durchgeführte Prüfungen

| Bereich | Prüfung | Ergebnis |
|--------|---------|----------|
| **IDs / Anker** | Alle `id`-Attribute und `href="#..."` abgeglichen | Keine toten Links; alle Anker vorhanden (profile-checklist, checkliste-uebersicht, drive-mode, regen, adas, scc, hda, lka, fca, bca, climate, lighting, parking, battery, navigation, personalization, methodology, quellen, galerie, preisliste, profiles, toc, etc.) |
| **Tabellen** | 18×3-Checkliste, Erstkauf-Checklisten (Standard/Regen/Winter), Methodik, Preisliste | 18 Zeilen in 18×3; alle Checklisten 20 Zeilen, 3 Spalten; thead/tbody/scope="col" korrekt |
| **Profil-Konsistenz** | Bezeichnungen Standard/Regen/Winter in Meta, JSON-LD, Tabellen, #profiles, Detailabschnitten | Einheitlich umgesetzt |
| **details/summary** | Paarigkeit und Einrückung | 153 Vorkommen; keine ungeschlossenen Tags gefunden |
| **Redundanzen** | Doppelte Aussagen zwischen Übersicht und Detail | Inhaltlich gewollt (Kurzfassung vs. Begründung); keine unnötigen Duplikate |
| **Formatierung** | Einrückung TOC, Umbrüche, CTA | Siehe behobene Punkte unten |

---

## 2. Behobene Mängel

### 2.1 Formatierung / UX

- **TOC (Detail 1–9):** Einrückung der `<li>`/`<a>` vereinheitlicht (vorher wechselnde 4/8/12 Leerzeichen).
- **#profiles CTA:** Zwischen den beiden Links ein Trennzeichen **·** ergänzt für bessere Lesbarkeit.
- **Sidebar „Auf dieser Seite“:** Link **Erstkauf-Checkliste** (#checkliste-uebersicht) ergänzt (war nur in der Nav, nicht in der Sidebar).

### 2.2 Inhaltliche Stimmigkeit mit 18×3 / kia_ev4

- **Intelligente Rekuperation:** Empfehlung von „Alle Profile: EIN“ auf profilbasiert geändert: **Standard: AUTO**, **Regen: Manuell Level 1**, **Winter: Manuell Level 1 (KEIN AUTO)** – abgestimmt mit 18×3 und Erstkauf-Checklisten.
- **Beleuchtung:** Empfehlung von „Alle Profile: AUTO-Licht EIN, Matrix-Fernlicht EIN“ auf **Standard / Regen / Winter** wie in der Checkliste angepasst (Fernlicht/Nebelscheinwerfer profilabhängig). Begründungstext „Matrix-Fernlicht IMMER EIN“ durch profilabhängige Formulierung ersetzt.
- **i-Pedal:** Begründung angepasst: Klarstellung **Standard: EIN** (nach Eingewöhnung), **Regen/Winter: AUS**; Begründung bezieht sich explizit auf Regen/Winter und Empfehlung Standard EIN.

---

## 3. Keine Änderung (bewusst so belassen)

| Thema | Befund |
|-------|--------|
| **„Wetter“** | Einmalig in „bei mildem Wetter“ (Klima) – Bedeutung „Witterung“, kein Profilname; unverändert. |
| **Footer** | Enthält keine Sprungliste wie Nav/Sidebar; nur Inhalt, Quellen, Hinweise – strukturell so gewollt. |
| **Preisliste** | `</thead><tbody>` teils in einer Zeile – nur Formatierung, semantisch korrekt. |
| **Doppelte „Auf dieser Seite“-Listen** | Nav (Mobil) und Aside (Sidebar) – bewusst für Kontext; nach Fix gleicher Inhalt inkl. Erstkauf-Checkliste. |

---

## 4. Kurz-Checkliste (Plan)

- Meta/SEO und JSON-LD: Standard, Regen, Winter.
- 18×3-Tabelle: Spalten Standard/Regen/Winter, Zellinhalte aus kia_ev4; gleiche Struktur/Classes.
- #profiles: Drei Karten Standard/Regen/Winter mit Texten und Kerneinstellungen aus kia_ev4.
- Detailabschnitte: Alle Profil-Bezeichnungen auf Standard/Regen/Winter; Empfehlungsboxen und Begründungen abgestimmt.
- Preisliste, Galerie, Quellen, Methodik: unverändert und konsistent.
- Kein neues CSS von kia_ev4; Responsivität über index.html/main.css.

---

## 5. Empfehlung

- **HTML:** Keine weiteren strukturellen oder inhaltlichen Fehler gefunden; Linter ohne Meldungen.
- **Optional:** Preisliste-Tabellen bei Gelegenheit mit Zeilenumbruch nach `</thead>` für einheitliche Formatierung.
- **Optional:** Einmaliges W3C-Validator-Check (z. B. Nu Html Checker) für strikte Konformität.
