# -*- coding: utf-8 -*-
"""
Generate the Preisliste section HTML from data/preisliste.json.
Single source of truth: run this script and paste output into index.html
or use as part of a build step.
"""
from pathlib import Path
import json
import html

BASE = Path(__file__).resolve().parent.parent
DATA_PATH = BASE / "data" / "preisliste.json"


def format_price(value: (int, float)) -> str:
    """Format as German price: 37590 -> '37.590'."""
    if value == 0:
        return "0"
    s = str(int(value))
    if len(s) > 3:
        s = s[:-3] + "." + s[-3:]
    return s


def escape(s: str) -> str:
    return html.escape(s, quote=True)


def _group_packages_by_trim(packages: list) -> dict:
    """Fallback: group flat packages list by forTrim."""
    by_trim = {}
    for p in packages:
        trim = p.get("forTrim", "Earth")
        by_trim.setdefault(trim, []).append(p)
    order = ["Air", "Earth", "GT-Line"]
    return {k: by_trim[k] for k in order if k in by_trim}


def main() -> str:
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    variants = data["variants"]
    package_by_trim = data.get("packageByTrim")
    if not package_by_trim:
        package_by_trim = _group_packages_by_trim(data.get("packages", []))
    option_groups = data.get("optionGroups") or {}
    # Fallback: flat options if optionGroups not present
    if not option_groups and "options" in data:
        option_groups = {"optionen": data["options"]}

    out = []
    out.append('    <div class="preisliste-key-facts" role="region" aria-label="Preis-Überblick">')
    out.append('        <p class="preisliste-key-facts-intro">Grundpreise (unverbindlich, inkl. 19&nbsp;% MwSt.):</p>')
    out.append('        <ul class="preisliste-key-facts-list">')
    for v in variants:
        label = f"{v['trim']} {v['battery']}"
        price_str = format_price(v.get("priceIncl", 0))
        out.append(f'            <li><strong>{escape(label)}</strong> <span class="preisliste-price-inline">{price_str}&nbsp;€</span></li>')
    out.append("        </ul>")
    out.append("    </div>")
    out.append("")

    out.append('    <h3 id="preisliste-varianten">Modellvarianten (Grundpreise &amp; Daten)</h3>')
    out.append('    <div class="responsive-table-wrapper">')
    out.append('        <table class="preisliste-table preisliste-table--varianten" aria-describedby="preisliste-varianten">')
    out.append("            <thead><tr>")
    out.append('                <th scope="col">Linie</th>')
    out.append('                <th scope="col">Batterie</th>')
    out.append('                <th scope="col">Antrieb / Leistung</th>')
    out.append('                <th scope="col">Verbrauch WLTP</th>')
    out.append('                <th scope="col">Reichweite WLTP</th>')
    out.append('                <th scope="col" class="preisliste-th-price">Preis (€, inkl. MwSt.)</th>')
    out.append("            </tr></thead><tbody>")
    for v in variants:
        trim, bat = v["trim"], v["battery"]
        drive = v.get("drive", "Frontantrieb") + " " + (v.get("power") or "150 kW (204 PS)")
        cons = v.get("consumption", "–")
        rng = v.get("range", "–")
        price_incl = v.get("priceIncl")
        price_str = format_price(price_incl) + " €" if price_incl is not None else "–"
        highlight = " preisliste-variant--highlight" if trim == "Earth" and "81" in bat else ""
        out.append(f'            <tr class="preisliste-variant-row{highlight}">')
        out.append(f'                <td>{escape(trim)}</td><td>{escape(bat)}</td><td>{escape(drive)}</td>')
        out.append(f'                <td>{escape(cons)}</td><td>{escape(rng)}</td>')
        out.append(f'                <td class="preisliste-td-price"><strong>{price_str}</strong></td>')
        out.append("            </tr>")
    out.append("            </tbody></table>")
    out.append("    </div>")
    out.append("")

    out.append('    <h3 id="preisliste-pakete">Sonderausstattung (Pakete nach Ausstattungslinie)</h3>')
    out.append('    <p class="preisliste-pakete-note">Jede Ausstattungslinie hat <strong>eigene</strong> Pakete: Air nur P1/P2, Earth P3–P9, GT-Line P9–P12 (P9 Glasdach bei Earth i.&nbsp;V. mit P3–P8, bei GT-Line i.&nbsp;V. mit P10–P12). Ein Paket ist jeweils nur für die angegebene Linie bestellbar. Pakete mit Voraussetzung (i.&nbsp;V. mit …) können nur in Kombination bestellt werden.</p>')
    # Verfügbarkeits-Matrix: Linie × verfügbare Pakete
    out.append('    <div class="preisliste-availability" role="region" aria-label="Paket-Verfügbarkeit nach Linie">')
    out.append('        <h4 class="preisliste-availability-heading">Verfügbarkeit: Welche Pakete für welche Linie?</h4>')
    out.append('        <div class="responsive-table-wrapper">')
    out.append('            <table class="preisliste-table preisliste-table--availability" aria-describedby="preisliste-availability-desc">')
    out.append('                <thead><tr>')
    out.append('                    <th scope="col">Ausstattungslinie</th>')
    out.append('                    <th scope="col">Verfügbare Pakete</th>')
    out.append('                    <th scope="col">Hinweis</th>')
    out.append('                </tr></thead><tbody>')
    trim_availability = {
        "Air": ("P1, P2", "Nur für Air bestellbar"),
        "Earth": ("P3–P9", "Nur für Earth bestellbar (P9 nur 81 kWh i. V. mit P3–P8)"),
        "GT-Line": ("P9–P12", "Nur für GT-Line bestellbar (P9 i. V. mit P10–P12)"),
    }
    for trim, packages in package_by_trim.items():
        pkg_range, hint = trim_availability.get(trim, (", ".join(p["id"] for p in packages), f"Nur für {trim}"))
        out.append(f'                <tr>')
        out.append(f'                    <td><a href="#preisliste-pakete-{trim.lower()}" class="preisliste-trim-link">{escape(trim)}</a></td>')
        out.append(f'                    <td><span class="preisliste-availability-pkgs">{escape(pkg_range)}</span></td>')
        out.append(f'                    <td class="preisliste-availability-hint">{escape(hint)}</td>')
        out.append(f'                </tr>')
    out.append('                </tbody></table>')
    out.append('        </div>')
    out.append('        <p id="preisliste-availability-desc" class="preisliste-availability-desc">Übersicht: Jede Linie hat ausschließlich die genannten Pakete. Details und Preise in den Tabellen unten.</p>')
    out.append('    </div>')
    out.append("")
    trim_labels = {"Air": "Air", "Earth": "Earth", "GT-Line": "GT-Line"}
    for trim, packages in package_by_trim.items():
        label = trim_labels.get(trim, trim)
        section_id = f"preisliste-pakete-{trim.lower()}"
        out.append(f'    <h4 id="{section_id}" class="preisliste-trim-heading">{escape(label)}</h4>')
        out.append(f'    <p class="preisliste-trim-only">Diese Pakete sind <strong>ausschließlich für die Ausstattungslinie {escape(trim)}</strong> bestellbar.</p>')
        out.append('    <div class="responsive-table-wrapper">')
        out.append(f'        <table class="preisliste-table preisliste-table--pakete" aria-describedby="{section_id}">')
        out.append("            <thead><tr>")
        out.append('                <th scope="col">Paket</th>')
        out.append('                <th scope="col">Bezeichnung</th>')
        out.append('                <th scope="col">Voraussetzung</th>')
        out.append('                <th scope="col">Inhalt (Kurz)</th>')
        out.append('                <th scope="col" class="preisliste-th-price">Preis (€)</th>')
        out.append("            </tr></thead><tbody>")
        for p in packages:
            dep = p.get("dependsOn") or []
            dep_text = "i. V. mit " + ", ".join(dep) if dep else "–"
            out.append("            <tr>")
            out.append(f'                <td><span class="preisliste-paket-id">{escape(p["id"])}</span></td>')
            out.append(f'                <td>{escape(p["name"])}</td>')
            out.append(f'                <td class="preisliste-depends">{escape(dep_text)}</td>')
            out.append(f'                <td>{escape(p["description"])}</td>')
            out.append(f'                <td class="preisliste-td-price">{format_price(p["price"])}&nbsp;€</td>')
            out.append("            </tr>")
        out.append("            </tbody></table>")
        out.append("    </div>")
        out.append("")

    group_labels = {"zubehör": "Zubehör & Ausstattung", "lacke": "Außenlackierungen"}
    out.append('    <h3 id="preisliste-optionen">Optionen (Auswahl)</h3>')
    for key, label in group_labels.items():
        if key not in option_groups:
            continue
        items = option_groups[key]
        out.append(f'    <h4 class="preisliste-option-group-heading">{escape(label)}</h4>')
        out.append('    <div class="responsive-table-wrapper">')
        out.append('        <table class="preisliste-table preisliste-table--optionen" aria-describedby="preisliste-optionen">')
        out.append('            <thead><tr><th scope="col">Bezeichnung</th><th scope="col" class="preisliste-th-price">Preis (€)</th></tr></thead><tbody>')
        for opt in items:
            name = opt.get("name", opt) if isinstance(opt, dict) else str(opt)
            price = opt.get("price", 0) if isinstance(opt, dict) else 0
            price_str = format_price(price) + " €" if price else "Serie"
            out.append(f'                <tr><td>{escape(name)}</td><td class="preisliste-td-price">{price_str}</td></tr>')
        out.append("            </tbody></table>")
        out.append("    </div>")
        out.append("")

    out.append('    <p class="preisliste-disclaimer"><strong>Hinweis:</strong> Preisliste unverbindlich. Stand laut <a href="docs/Kia-Germany-EV4-Preisliste.pdf" target="_blank" rel="noopener noreferrer" class="source-ref">KIA Germany EV4 Preisliste (PDF)</a>. Verbindliche Angaben beim Händler.</p>')
    return "\n".join(out)


if __name__ == "__main__":
    import sys
    frag_path = BASE / "docs" / "preisliste_fragment.html"
    if len(sys.argv) > 1 and sys.argv[1] == "--file":
        with open(frag_path, "w", encoding="utf-8") as f:
            f.write(main())
        print(f"Written to {frag_path}", file=sys.stderr)
    else:
        print(main())
