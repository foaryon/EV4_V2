# Prüfbericht: Abgleich index.html vs. EV4_2026_Bedienungsanleitung.pdf

**Stand:** 30. Januar 2026  
**Quelle:** `EV4_2026_Bedienungsanleitung.pdf` (878 Seiten)  
**Methodik:** Text-Extraktion per pypdf, Bild-Extraktion (Infotainment-Screenshots), Online-Recherche (ownersmanual.kia.com, KIA EV4/EV6 FCA-Dokumentation).

---

## 0. Quellen der Prüfung

| Quelle | Inhalt |
|--------|--------|
| **PDF-Text** | pypdf-Extraktion, Seiten 304, 433–440, 502–512, 519, 533–534, 544–548, 603–604, 627–630 |
| **PDF-Bilder** | `docs/pdf_images/` – Infotainment-Screenshots S. 435–439, 507–510, 545–546 |
| **Online DE** | [ownersmanual.kia.com](https://ownersmanual.kia.com/docview/webhelp/doc/abc385ff-0a58-4b15-be95-c48d40be6dcb/topics/chapter7_1_1.html) – FCA Einstellungen |
| **Online EN** | [ownersmanual.kia.com FCA Settings](https://ownersmanual.kia.com/full_webhelp/ON/2024/en_US/topics/t00383.html) – Forward Safety Warning Timing |
| **Web-Recherche** | KIA EV4/EV6 FCA-Optionen, Kollisionswarnung Früh/Normal/Spät |

---

## 1. Zusammenfassung

| Kategorie | Status | Handlungsbedarf |
|----------|--------|-----------------|
| **i-PEDAL** | ✅ Konsistent | Keine |
| **Intelligente Energierückgewinnung** | ✅ Konsistent | Keine |
| **Schaltwippe / Rekuperation** | ✅ Konsistent | Keine |
| **FCA – Kollisionswarnung** | ⚠️ Abweichung | Optionen anpassen |
| **FCA – Menüpfad** | ⚠️ Abweichung | Menüpfad präzisieren |
| **LKA / LFA** | ✅ Konsistent | Keine |
| **BCA / Totwinkelsicherheit** | ✅ Konsistent | Keine |
| **SCC / Intelligente Tempomatsteuerung** | ✅ Konsistent | Keine |
| **NSCC** | ✅ Konsistent | Keine |
| **i-PEDAL Nicht-Betrieb** | ✅ Konsistent | Keine |

---

## 2. Detaillierte Befunde

### 2.1 i-PEDAL (Handbuch S. 435–437)

| Prüfpunkt | index.html | PDF Handbuch | PDF-Bild (p436_Im0) | Bewertung |
|-----------|------------|--------------|---------------------|-----------|
| Schreibweise | i-PEDAL | i-PEDAL (Menü), i-Pedal (Fließtext) | i-PEDAL (Menü) | ✅ |
| Menüpfad | EV → i-PEDAL | Elektrofahrzeug > i-PEDAL | Electric Vehicle > i-PEDAL | ✅ |
| Aktivierung | Schaltwippe >1s links | „Ziehen Sie … länger als 1 Sekunde an der linken Seite der Schaltwippe“ | – | ✅ |
| Nicht-Betrieb | Steile Steigungen/Gefälle, DBC aktiv | Steile Steigungen/Gefälle, DBC aktiv, Punkt Gefälle-Ende, geneigte Fahrbahn | – | ✅ |
| Rückwärtsfahren | – | Option „i-PEDAL beim Rückwärtsfahren deaktivieren“ | **„Disable i-PEDAL when Reversing“** (Toggle) | ℹ️ Optional ergänzbar |

---

### 2.2 Intelligente Energierückgewinnung (Handbuch S. 438–444)

| Prüfpunkt | index.html | PDF Handbuch | PDF-Bild (p439_Im0) | Bewertung |
|-----------|------------|--------------|---------------------|-----------|
| Bezeichnung | Intelligente Energierückgewinnung | „Intelligentes Energierückgewinnungssystem“ / „Intelligente Energierückgewinnung“ | **Smart Regeneration** (EN) | ✅ |
| Menüpfad | EV → EV-Einstellungen | Elektrofahrzeug > Intelligente Energierückgewinnung | Electric Vehicle > Smart Regeneration | ✅ |
| Abstandsstufe | – | Stufe 1/2/3 (Abstand zum vorausfahrenden Fahrzeug) | **Level 1 / Level 2 / Level 3** (wählbar) | ℹ️ |
| Link zur Navi-Route | – | Batteriekonditionierung: „Link zur Navigationsroute“ | Battery Conditioning Mode: „Link to Navigation Route“ (Toggle) | ℹ️ |

---

### 2.3 Schaltwippe / Rekuperation (Handbuch S. 433–434)

| Prüfpunkt | index.html | PDF Handbuch | Bewertung |
|-----------|------------|--------------|-----------|
| Stufen | 0–3 | „Verzögerung von 0 bis 3“ | ✅ |
| Bedienung | Linke/rechte Schaltwippe | „Linke Seite … erhöhen“, „rechte Seite … verringern“ | ✅ |
| Fahrmodus-Bereich | ECO/NORMAL/SPORT 0–3, SNOW 0–1 | Identisch (S. 433) | ✅ |
| Nicht änderbar | SCC aktiv, 100 % Batterie, Anhänger | Identisch (S. 434) | ✅ |

---

### 2.4 FCA – Kollisionswarnung (Handbuch S. 502–532, 507–511)

| Prüfpunkt | index.html | PDF Handbuch | PDF-Bilder / Online | Bewertung |
|-----------|------------|--------------|---------------------|-----------|
| **Warnzeit-Optionen** | Aus / Früh / Normal / Spät | Normal, Verzögert, Standard (S. 510) | **Standard** und **Late** (2 Optionen, p510_Im0.jpg; EN-Handbuch) | ⚠️ **Abweichung** |
| Menüpunkt | „Sicherheit vorne“ | **Kollisionsvermeidung in Fahrtrichtung** (S. 507) | **Forward safety** (EN) / **Sicherheit vorne** (Warnleuchte) | ⚠️ **Abweichung** |
| Menüpfad Warnzeit | – | Fahrsicherheit > **Warnzeitpunkt Kollisionssicherheit in Fahrtrichtung** | Driving Safety > **Forward Safety Warning Timing** | ✅ |

**PDF S. 510 (Text):**
> „Verwenden Sie unter normalen Fahrbedingungen **Normal**. Wenn der Warnzeitpunkt zu empfindlich zu sein scheint, ändern Sie ihn auf **Verzögert**.“  
> „Auch wenn für den Warnzeitpunkt **Standard** ausgewählt ist …“  
> „Wählen Sie **Verzögert** für die Warnung bei geringem Verkehr und niedriger Fahrgeschwindigkeit.“

**PDF-Bild p510_Im0.jpg (Infotainment-Screenshot):**
- „Forward safety warning timing (3)“ mit zwei Schaltflächen: **Standard** (aktiv) und **Late** (inaktiv).
- Nur **2 Optionen** sichtbar – kein „Früh“, „Normal“, „Spät“ oder „Aus“ im Warnzeit-Menü.

**Online ownersmanual.kia.com (DE):**
- „Warnzeitpunkt Kollisionsvermeidung in Fahrtrichtung“
- Optionen: **Standard**, **Später** („ändern Sie ihn auf Später“), **Verzögert** („Wählen Sie Verzögert …“) – Redundanz Später/Verzögert.

**Online ownersmanual.kia.com (EN, FCA Settings):**
- „Forward Safety Warning Timing“: **Standard** und **Late** (explizit 2 Optionen).
- „Use Standard in normal driving conditions. If the Forward Safety Warning Timing seems sensitive, change it to Late.“

**Web-Recherche (KIA EV4/EV6):**
- Aktuelle KIA-Modelle: **2 Optionen** (Normal/Standard = früher, Late = später).
- „Früh“/„Spät“ stammen vermutlich von älteren Modellen oder anderen Regionalvarianten.

**Empfehlung:**
- Optionen in `index.html` anpassen auf: **Standard / Verzögert** (laut PDF + Screenshots; „Normal“ = Synonym zu „Standard“).
- **Aus** gehört zur Hauptfunktion „Kollisionsvermeidung in Fahrtrichtung“ (FCA EIN/AUS), nicht zum Warnzeitpunkt.
- Menüpfad: **Kollisionsvermeidung in Fahrtrichtung** bzw. **Warnzeitpunkt Kollisionssicherheit in Fahrtrichtung** – „Sicherheit vorne“ = Warnleuchte (S. 304).

---

### 2.5 LKA / LFA (Handbuch S. 533–543, 634–638)

| Prüfpunkt | index.html | PDF Handbuch | Bewertung |
|-----------|------------|--------------|-----------|
| Bezeichnung | Spurhalteassistent (LKA) / Spurfolgeassistent (LFA) | „Spurhalteassistent (LKA)“, „Spurfolgeassistent (LFA)“ | ✅ |
| Menü | Spursicherheit | Einstellungen > Fahrzeug > Fahrerassistenz > Fahrsicherheit > **Spursicherheit** | ✅ |
| LFA-Aktivierung | HDA oder SCC + vorausfahrendes Fahrzeug | Handbuch S. 634–638 | ✅ |

---

### 2.6 BCA / Totwinkelsicherheit (Handbuch S. 544–563)

| Prüfpunkt | index.html | PDF Handbuch | PDF-Bild (p546_Im0) | Bewertung |
|-----------|------------|--------------|---------------------|-----------|
| Menüpfad | Fahrsicherheit > Totwinkelsicherheit | Einstellungen > Fahrzeug > Fahrerassistenz > Totwinkelsicherheit (S. 546) | Driver assistance > Driving safety > **Blind-spot safety** | ✅ |
| Funktion | Warnung + Bremsassistent | „warnt und der Bremsassistent wird je nach Kollisionsrisiko aktiviert“ | Toggle EIN/AUS | ✅ |
| Weitere Einträge | – | – | Lane safety (Spursicherheit), Blind-spot view monitor | ℹ️ |

---

### 2.7 SCC / Intelligente Tempomatsteuerung (Handbuch S. 603–633)

| Prüfpunkt | index.html | PDF Handbuch | Bewertung |
|-----------|------------|--------------|-----------|
| Bezeichnung | Intelligente Tempomatsteuerung (SCC) | „Intelligente Tempomatsteuerung (SCC)“ | ✅ |
| Menüpfad | Fahrerassistenz > Intelligente Tempomatsteuerung | Einstellungen > Fahrzeug > Fahrerassistenz > **Fahrkomfort** > Intelligente Tempomatsteuerung (SCC) | ℹ️ Fahrkomfort als Ebene |
| Abstand | 4 Stufen (1–4) | Handbuch S. 603 ff. | ✅ |

---

### 2.8 NSCC (Handbuch S. 628–633)

| Prüfpunkt | index.html | PDF Handbuch | Bewertung |
|-----------|------------|--------------|-----------|
| Menüpfad | Fahrerassistenz > Fahrkomfort | Einstellungen > Fahrzeug > Fahrerassistenz > **Fahrkomfort** > **Automatische Geschwindigkeitsänderung auf der Autobahn** | ✅ |
| Bezeichnung | NSCC / Navi-SCC | „Navigationsgestützte intelligente Tempomatsteuerung (NSCC)“ | ✅ |

---

## 3. Korrekturvorschläge für index.html

### 3.1 FCA – Kollisionswarnung (Priorität: hoch)

**Aktuell (Zeile ~1449):**
```html
<li><strong>Kollisionswarnung:</strong> Aus / Früh / Normal / Spät (Warnzeit, Handbuch S. 502-532)</li>
```

**Vorschlag (laut Handbuch S. 510):**
```html
<li><strong>Warnzeitpunkt Kollisionssicherheit in Fahrtrichtung:</strong> Standard / Normal / Verzögert (Handbuch S. 510)</li>
```

**Begründung:** Das Handbuch nennt explizit „Normal“, „Verzögert“ und „Standard“. „Früh“/„Spät“ sind andere Regionalvarianten (z. B. EN) oder vereinfachte Bezeichnungen.

---

### 3.2 FCA – Menüpfad (Priorität: mittel)

**Aktuell:**
```html
Einstellungen → Fahrzeug → Fahrerassistenz → Fahrsicherheit → Sicherheit vorne (Frontalkollisions-Vermeidungsassistent)
```

**Vorschlag:**
```html
Einstellungen → Fahrzeug → Fahrerassistenz → Fahrsicherheit → Kollisionssicherheit in Fahrtrichtung (Frontalkollisions-Vermeidungsassistent)
```

**Hinweis:** „Sicherheit vorne“ bezeichnet im Handbuch die **Warnleuchte** (S. 304), nicht den Menüpunkt. Der Menüpunkt heißt „Kollisionssicherheit in Fahrtrichtung“.

---

### 3.3 Checkliste FCA (Priorität: mittel)

Die Empfehlung „Kollisionswarnung: Früh“ für Regen/Winter bleibt sinnvoll. Im Handbuch entspricht das **Standard** oder **Normal** (frühere Warnung als „Verzögert“). Optionaler Zusatz:

> „Früh“ entspricht Handbuch-Option **Standard** oder **Normal** (nicht „Verzögert“).

---

## 4. Keine Änderung nötig

- i-PEDAL, Intelligente Energierückgewinnung, Schaltwippe
- LKA/LFA, BCA, SCC, NSCC (Begriffe und Menüpfade)
- i-PEDAL Nicht-Betrieb (Steigungen/Gefälle, DBC)
- Seitenangaben (S. 435–437, 438–444, 502–532, 533–543, 544–563, 603–633, 628–633) sind plausibel

---

## 5. Validierung

- **PDF:** EV4_2026_Bedienungsanleitung.pdf, 878 Seiten
- **Text-Extraktion:** pypdf (Python)
- **Bild-Extraktion:** pypdf, gespeichert in `docs/pdf_images/`
- **Geprüfte Seiten:** 304, 433–440, 502–512, 519, 533–534, 544–548, 556, 562, 603–604, 627–630

### Extrahierte PDF-Bilder (Infotainment-Screenshots)

| Datei | Inhalt |
|-------|--------|
| p435_Im0–3, p436_Im0–1 | i-PEDAL, Electric Vehicle, Disable i-PEDAL when Reversing |
| p438_Im0, p439_Im0–2 | Smart Regeneration, Level 1/2/3, Battery Conditioning, Link to Navigation Route |
| p507_Im0–2, p508_Im0–2, p510_Im0 | FCA: Forward safety, Forward safety warning timing (Standard/Late) |
| p545_Im0, p546_Im0 | BCA: Blind-spot safety, Lane safety |

**Hinweis:** Einige Screenshots zeigen die englische UI (z. B. „Standard“, „Late“, „Smart Regeneration“). Die deutsche PDF verwendet dieselben Diagramme; die Begriffe entsprechen: Standard/Normal ↔ Früh, Late/Verzögert ↔ Spät.

---

## 6. Terminologie-Mapping (DE ↔ EN, aus Bildern/Online)

| Deutsch (Handbuch) | Englisch (Screenshot/Online) |
|-------------------|-----------------------------|
| Kollisionsvermeidung in Fahrtrichtung | Forward safety |
| Warnzeitpunkt Kollisionssicherheit in Fahrtrichtung | Forward safety warning timing |
| Standard / Normal / Verzögert | Standard / Late |
| Sicherheit vorne | Forward safety (Warnleuchte) |
| Totwinkelsicherheit | Blind-spot safety |
| Spursicherheit | Lane safety |
| Intelligente Energierückgewinnung | Smart Regeneration |
| i-PEDAL beim Rückwärtsfahren deaktivieren | Disable i-PEDAL when Reversing |

---

*Prüfbericht erstellt durch Abgleich mit der offiziellen KIA EV4 Bedienungsanleitung 2026, PDF-Bildextraktion und Online-Recherche (ownersmanual.kia.com). Bei Abweichungen zwischen regionalen Ausgaben (DE/EN/etc.) gilt die deutsche Fassung.*
