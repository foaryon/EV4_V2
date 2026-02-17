# Forensischer Audit – Schwachstellen, Logikfehler, Typos, Bugs

**Datum:** 2026-01-30  
**Scope:** index.html, css/main.css, js/main.js, changelog.json, 404.html, manifest.json, sitemap.xml

---

## 1. Behoben (durch diesen Audit)

| # | Kategorie | Befund | Fix |
|---|-----------|--------|-----|
| 1 | **Datenkonsistenz** | `changelog.json` fehlte v2.2.0 und v2.3.0; bei Nutzung über HTTP zeigte das Changelog-Modal veraltete Einträge (Fallback auf Inline-JSON nur bei file://). | v2.2.0 und v2.3.0 in `changelog.json` ergänzt. |
| 2 | **A11y** | Scroll-Spy setzte `aria-current="true"` bzw. `"false"`; für aktuelle Sektion ist `aria-current="location"` semantisch korrekter; `"false"` sollte nicht gesetzt werden (Attribut entfernen). | `aria-current="location"` bei aktivem Link; bei inaktiv `removeAttribute('aria-current')`; gleiches für Sidebar-Links. |
| 3 | **Formatierung** | 404.html nutzte Inline-Style (`style="padding: 3rem; text-align: center;"`), entgegen Projektvorgabe (Styles in main.css). | Klasse `.page-404` in main.css, Inline-Style entfernt. |
| 4 | **HTML-Struktur** | TOC-Item „Fahrmodus“ (drive-mode): Schließ-Tags `</a>` / `</li>` falsch eingerückt (inkonsistent mit restlichen toc-items). | Einrückung angeglichen. |
| 5 | **Logik/Feature** | `initDetailsState()` speicherte nur `details` mit `id`; alle aktuellen `<details class="justification-collapsible">` haben keine `id` → Session-Persistenz der Aufklapp-Zustände war wirkungslos. | Persistenz über Schlüssel `sectionId-index` (z. B. `drive-mode-0`); Lade-/Speicherlogik nutzt `getDetailsKey()` / `findDetailsByKey()`; alle details werden beobachtet. |

---

## 2. Geprüft – kein Handlungsbedarf

| # | Bereich | Befund |
|---|---------|--------|
| 1 | **IDs** | Keine doppelten `id` in index.html; alle Anker (#toc, #empfohlene-einstellungen, #profile-checklist, #methodology, #profiles, #drive-mode, #regen, #adas, #scc, #hda, #lka, #fca, #bca, #climate, #lighting, #parking, #battery, #navigation, #personalization, #impressum, #datenschutz) existieren. |
| 2 | **Changelog-Link** | `href="#"` + `data-action="open-changelog"` – `preventDefault()` im Handler verhindert Scroll nach oben. |
| 3 | **Scroll-Spy** | Nav-Links und Sidebar-Links (inkl. „Auf dieser Seite“ im Hamburger) werden korrekt mit `.is-active` und `aria-current` versorgt; Sidebar-Selector `.page-nav a[href^="#"]` deckt aside und .nav-on-this-page ab. |
| 4 | **Suche** | Strg+K, Escape, Enter, Pfeiltasten, Fokusfalle; Mindestlänge 2 Zeichen; Fallback auf Inline-Daten bei fehlgeschlagenem fetch. |
| 5 | **sitemap.xml / manifest.json** | Struktur und Platzhalter-URLs konsistent; Deployment-Hinweise in README. |

---

## 3. Optionale Verbesserungen (nicht umgesetzt)

| # | Kategorie | Befund | Empfehlung |
|---|-----------|--------|------------|
| 1 | **Inhalt** | „Anschlusspunkt Gefälle“ (i-Pedal, index.html) – möglicher Tippfehler für „bei Gefälle“ (Handbuch-Kontext: i-Pedal bei Steigungen/Gefälle). | Redaktionell prüfen; ggf. „bei Gefälle“. |
| 2 | **A11y** | `role="listbox"` auf `#search-results-list` mit `role="option"` auf Items – für Kombination mit `aria-activedescendant` könnte aktiver Eintrag geführt werden; aktuell wird Fokus auf das Link-Element gesetzt (ebenfalls gültig). | Optional: `aria-activedescendant` auf listbox setzen. |
| 3 | **Performance** | Scroll-Spy nutzt `throttle(100)`; bei sehr langen Seiten könnte `IntersectionObserver` statt scroll-basiert weniger Reflows erzeugen. | Bei Bedarf refactoren. |
| 4 | **SEO/Struktur** | JSON-LD in index.html enthält kein `url`; für klare Zuordnung könnte `"url": "https://example.com/ev4/"` ergänzt werden (bei Deployment anpassen). | Bei Deployment ergänzen. |

---

## 4. Typos / Formatierung (inhaltlich)

- Keine weiteren Typos in Überschriften, Nav, TOC oder zentralen UI-Strings gefunden.
- Einheitliche Schreibweise: „Handbuch-verifiziert“, „Empf. Einstellungen“, „Profil-Checkliste“ konsistent.

---

## 5. CSS

- Design-Tokens in `:root` konsistent genutzt; keine nackten px/rem außer in :root oder Media Queries (Audit-Kommentar vorhanden).
- Print: Skip-Link, Back-to-Top, Search-Overlay, Page-Nav, Nav-Menu-Trigger, Section-Quick-Nav ausgeblendet.
- `!important` nur für Print und `prefers-reduced-motion` (dokumentiert in README).

---

## 6. JavaScript – Randfälle

- **Changelog:** Bei `fetch('changelog.json')` Fehler (z. B. 404) → Fallback auf Inline-JSON; bei leerem oder ungültigem JSON wird Fehlermeldung angezeigt. Ausreichend.
- **initNavMenu:** Backdrop-Klick und Klick außerhalb schließen; Fokus zurück auf Trigger; Escape schließt. Keine Fokusfalle im Dialog vergessen (Fokus geht in Menü beim Öffnen).
- **Suche:** Bei 0 Treffern `selectedIndex = -1`; Pfeiltasten wrappen korrekt (modulo). Kein Zugriff auf nicht existierende `currentResults[selectedIndex]` bei Enter ohne Ergebnisse (Enter-Handler prüft `currentResults.length > 0 && selectedIndex >= 0`).

---

## 7. Zusammenfassung

- **Kritisch behoben:** Changelog-Datenkonsistenz, aria-current, Details-Session-Persistenz (ohne id), 404 Inline-Style, TOC-Einrückung.
- **Weitere Schwachstellen:** Keine kritischen Bugs oder Logikfehler; optionale Verbesserungen und eine inhaltliche Prüfung („Anschlusspunkt Gefälle“) dokumentiert.
