# Deep Scan: Profil-Einstellungen vs. Realität (KIA EV4 2026)

**Datum:** Februar 2026  
**Ziel:** Vollständige forensische Prüfung, dass alle Empfehlungen 100 % mit Handbuch, Spezifikationen und Ausstattung übereinstimmen.

---

## 1. Durchgeführte Korrekturen

| Bereich | Vorher | Nachher | Quelle |
|---------|--------|---------|--------|
| **FCA Warnzeit-Optionen** | Aus / Früh / Normal / Spät | Standard / Verzögert (Handbuch S. 510) | PRUEFBERICHT_HANDBUCH_PDF_2026 |
| **FCA Menüpfad** | Sicherheit vorne | Kollisionsvermeidung in Fahrtrichtung | Handbuch S. 507; „Sicherheit vorne" = Warnleuchte |
| **FCA Checkliste Regen/Winter** | Kollisionswarnung: Früh | Warnzeit: Standard | EV4 bietet nur Standard/Verzögert |
| **DC-Ladeleistung** | 235 kW (Peak) | 127 kW (EV4 max.) | evspecifications, ev4-earth-specs.json |
| **Ladekurve DC** | 10-50% = 235 kW, 50-80% = 150 kW | 10-80% bis 127 kW, Tapering 80-100% | evspecifications |
| **AC-Ladeleistung** | 11 kW | 10,5 kW | evspecifications, ev4-earth-specs |
| **Batteriekonditionierung** | – | Ausstattungsabhängig-Hinweis | PRUEFBERICHT_ALGEMEINE, Handbuch S. 28 |
| **Schema.org Rekuperation** | Regen/Winter: Level 1 | Winter: Level 1 (Level 0 bei Eis/Glätte) | Handbuch SNOW 0-1 |
| **Profil-Checkliste** | – | Hinweis: FCA, HDA, NSCC, Batteriekond. ausstattungsabhängig | KIA Preisliste P6 |

---

## 2. Validierte Übereinstimmungen (unverändert)

- **Drive Mode:** ECO/NORMAL/SNOW – Handbuch S. 470
- **Rekuperation:** 0-3 (ECO/NORMAL), 0-1 (SNOW) – Handbuch S. 433
- **i-PEDAL:** Nicht verfügbar im SNOW-Modus – Handbuch S. 435-437
- **SCC Abstand:** 1-4, Stufe 4 = Maximum – Handbuch S. 603
- **Ladegrenze:** 10 %-Schritte – Handbuch S. 28
- **Ziel-Ladezustand:** 80 % Standard/Regen, 90 % Winter – evidenzbasiert

---

## 3. Ausstattungsabhängige Funktionen

| Funktion | Paket/Variante | Hinweis in index.html |
|----------|----------------|------------------------|
| FCA 2.0 | P6 DriveWise-Park | Ja |
| HDA 2.0 | P6 DriveWise-Park | Ja |
| NSCC | Navigation + P6 | Ja |
| Batteriekonditionierung | Ausstattungsabhängig | Ja (Batterie-Sektion + Checkliste) |
| BCA/RCCA/SEA | P3 Upgrade | Basis-Earth hat BCA |

---

## 4. Quellen

- `docs/PRUEFBERICHT_HANDBUCH_PDF_2026.md` – FCA-Optionen, Menüpfade
- `docs/PRUEFBERICHT_ALGEMEINE_EINSTELLUNGEN_PDF_2026.md` – Batteriezustandsmodus
- `data/ev4-earth-specs.json` – DC 127 kW, AC 10,5 kW
- `docs/VALIDIERUNG_EMPFOHLENE_EINSTELLUNGEN_2026.md` – 18×3-Validierung

---

*Deep Scan abgeschlossen. Empfehlungen entsprechen dem EV4-Handbuch und den technischen Spezifikationen.*
