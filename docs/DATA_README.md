# Datenebene – Quellen und Deep-Dive-Inhalte

Kurzbeschreibung der strukturierten Daten für die HTML-Integration und redaktionelle Pflege.

## Zweck

- **Single Source of Truth** für Quellenangaben und technische Zusatzinhalte (Reichweite, Ladezeiten etc.), ohne Hardcoding in HTML.
- **Evidenzhierarchie:** Jede Quelle hat eine Klassifikation (A/B/C); Inhalte können Sektionen zugeordnet und mit Badge angezeigt werden.

## Dateien

| Datei | Inhalt | Verwendung |
|-------|--------|------------|
| **data/sources.json** | Array von Quellen-Einträgen: `id`, `name`, `url`, `classification` (A\|B\|C), `type` (manual\|official\|neutral\|community), optional `lastChecked`, `notes`. | Quellenverzeichnis in der Sektion „Quellen und technische Daten“; optional per JS in DOM einspielen. |
| **data/deep-dive-content.json** | Optional: Array von Zusatzinhalten: `sectionId`, `classification`, `sourceId`, `snippet`, `url`, `label`. | Inline-Quellenboxen (z. B. Ladezeiten in #battery); Build-Schritt oder manuelles Einpflegen. |
| **data/ev4-earth-specs.json** | Strukturierte Fahrzeugdaten KIA EV4 Earth 81 kWh: Basisvariante (powertrain, battery, wltp, charging, dimensions) und Ausstattungspakete P3–P6 (id, name, description, price). | Sektion „Fahrzeugdaten KIA EV4 Earth 81 kWh (P3–P6)“ in #quellen; Referenz für Tabellen (HTML manuell oder aus JSON generiert). Quelle: KIA Germany EV4 Preisliste PDF, Handbuch, ADAC, evspecifications. |
| **data/gallery.json** | Array von Galerie-Einträgen: `id`, `src`, `alt`, `caption`, `category` (exterior\|interior\|trunk\|details). Optional `bodyStyle`: "hatchback". | Sektion #galerie (Fahrzeugbilder); **nur Hatchback (Schrägheck)**. Bilder in `img/ev4/`. Siehe [BILDQUELLEN_EV4_HATCHBACK.md](BILDQUELLEN_EV4_HATCHBACK.md) für Hatchback-URLs. |
| **data/preisliste.json** | KIA Germany EV4 Preisliste: `source`, `sourcePdf`, `stand`, `note`; `variants`; **packageByTrim** (Air: P1–P2, Earth: P3–P9, GT-Line: P10–P12); **optionGroups** (zubehör, lacke). | Sektion #preisliste: Pakete pro Ausstattungslinie (Air nur P1/P2, Earth P3–P9, GT-Line P10–P12). HTML aus scripts/build_preisliste_html.py. |

## Pflege

- **Wer:** Redaktion / Maintainer. Bei URL-Änderungen oder neuen Quellen Einträge in `sources.json` anpassen; bei neuen Snippets `deep-dive-content.json` erweitern.
- **Validierung:** Siehe [QUELLEN_VALIDIERUNG.md](QUELLEN_VALIDIERUNG.md). Nur validierte bzw. geprüfte URLs in `sources.json` aufnehmen.
- **HTML-Integration:** Die Sektion `#quellen` in index.html kann statisch aus diesen Daten befüllt werden; optional lädt `main.js` `sources.json` und rendert die Quellenliste (Fallback: statisches HTML bleibt).

## Schema-Referenz

- **sources.json:** Mindestfelder `id`, `name`, `url`, `classification`, `type`; optional `lastChecked` (ISO-Datum), `notes`.
- **deep-dive-content.json:** `sectionId` (z. B. battery, drive-mode), `classification`, `sourceId` (Referenz auf sources.json), `snippet`, `url`, `label`.
- **ev4-earth-specs.json:** Basis: `powertrain`, `battery`, `wltp`, `charging`, `dimensions`; Pakete: `id`, `name`, `description`/`highlights`, `price`. Quelle pro Kennzahl (A/B/C) dokumentieren.
- **gallery.json:** Pro Eintrag: `id`, `src` (Pfad zu img/ev4/…), `alt`, `caption`, `category`. Optional `srcset`/`sizes` für responsive Bilder.
- **preisliste.json:** `variants`; **packageByTrim** (Air, Earth, GT-Line: je Array von Paketen mit id, name, description, price, dependsOn); `packages` (optional, mit forTrim); **optionGroups** (zubehör, lacke). Pakete erscheinen nur einmal pro Linie. HTML: `python scripts/build_preisliste_html.py` bzw. `--file`.

## Bildquellen (Galerie)

- **Nur Hatchback (Schrägheck):** Die Galerie zeigt ausschließlich die **5-Türer Schrägheck-Variante** des KIA EV4. Alle Bilddateien in `img/ev4/` und Einträge in `data/gallery.json` sind darauf ausgerichtet (alt/caption: „KIA EV4 Hatchback“).
- Bilder stammen von **KIA UK** (kia.com/uk) bzw. **KIA Global Discover-Assets** (kia.com/content/dam/…); nicht von kiamedia.com. Nutzungsbedingungen (redaktionell) beachten. Hatchback-URLs und Zuordnung: [BILDQUELLEN_EV4_HATCHBACK.md](BILDQUELLEN_EV4_HATCHBACK.md).
- Keine Hotlinks; Bilder lokal in `img/ev4/` ablegen. Galerie-Fußzeile: „Quelle: KIA UK (kia.com/uk), Stand [Datum]“.
