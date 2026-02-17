# Prüfbericht: Regen- und Winter-Profil (Sicherheitsoptimierung)

**Datum:** Januar 2026  
**Gegenstand:** Forensische Prüfung der umgesetzten Änderungen für maximale Sicherheit bei Regen und Schnee  
**Referenz:** Forensische Analyse (Beleuchtung, FCA, Klima, SCC, Rekuperation)

---

## 1. Prüfkriterien

| Kriterium | Beschreibung |
|-----------|--------------|
| **18×3-Konsistenz** | Profil-Checkliste stimmt mit Detail-Sektionen überein |
| **StVO/DEKRA** | Beleuchtung bei Regen/Schneefall: Fernlicht vermeiden (Reflexion) |
| **Handbuch** | Rekuperation SNOW 0–1, SCC Abstand 4, FCA Warnzeit |
| **Sicht-Priorität** | Klima ECO AUS bei Beschlag für maximale Entfeuchtung |

---

## 2. Abgleich 18×3-Tabelle ↔ Detail-Sektionen

| # | Einstellung | 18×3 Regen | 18×3 Winter | Detail Regen | Detail Winter | Status |
|---|-------------|------------|-------------|--------------|---------------|-------|
| 1 | Fahrmodus | NORMAL | SNOW | NORMAL (nasse Fahrbahn) | SNOW bei <5°C | ✅ |
| 2 | Rekuperation | Level 1 | Level 1 (Level 0 bei Eis/Glätte) | Level 1 | Level 1 (Level 0 bei Eis/Glätte) | ✅ |
| 3 | i-PEDAL | AUS | AUS | AUS | AUS | ✅ |
| 4 | Intelligente Reku | Manuell Level 1 | Manuell Level 1 (KEIN AUTO) | Manuell Level 1 | Manuell Level 1 (KEIN AUTO) | ✅ |
| 5 | SCC Abstand | EIN, Abstand 4 (Maximum) | EIN, Abstand 4 (Maximum) | EIN, Abstand 4 (Maximum) | EIN, Abstand 4 (Maximum) | ✅ |
| 6 | HDA | AUS | EIN (mit Vorsicht) | HDA AUS | HDA EIN (mit Vorsicht) | ✅ |
| 9 | FCA | Kollisionswarnung: Früh | Kollisionswarnung: Früh | Regen/Winter: Früh | Regen/Winter: Früh | ✅ |
| 10 | BCA | EIN (Warnung + Lenkeingriff) | EIN (Warnzeit: Früh) | – | – | ✅ |
| 11 | Klima | ECO EIN, ECO AUS bei Beschlag | Scheibenheizung, Frischluft | ECO AUS bei Beschlag/hoher LF | Scheibenheizung, Frischluft | ✅ |
| 12 | Beleuchtung | Nebelscheinwerfer, Fernlicht AUS | Nebelscheinwerfer, Fernlicht bei Schneefall AUS | Nebelscheinwerfer, Fernlicht AUS | Nebelscheinwerfer, Fernlicht bei Schneefall AUS | ✅ |
| 14 | Ziel-Ladezustand | 80% | 90% | 80% | 90% | ✅ |
| 15 | Batteriekonditionierung | AUS (Auto bei DC) | MANUELL 30 Min | AUS | MANUELL 30 Min | ✅ |
| 16 | NSCC | AUS | EIN | AUS | EIN | ✅ |
| 17 | Auto Hold | EIN | EIN | EIN | EIN | ✅ |
| 18 | ESC/VSM/HAC/DBC | EIN | EIN | EIN | EIN | ✅ |

---

## 3. Umgesetzte Änderungen (Bestätigt)

| Änderung | Ort | Evidenz |
|----------|-----|---------|
| **Beleuchtung Regen:** Fernlicht → Nebelscheinwerfer, Fernlicht AUS | 18×3, Beleuchtung-Sektion | StVO, DEKRA |
| **Beleuchtung Winter:** Fernlicht bei Schneefall AUS (Reflexion) | 18×3, Beleuchtung-Sektion | StVO, DEKRA |
| **FCA:** Regen/Winter = Warnzeit Früh (profil-spezifisch) | FCA recommended-box, 18×3 | VALIDIERUNG |
| **Klima Regen:** ECO AUS bei Beschlag/hoher Luftfeuchtigkeit | 18×3, Klima-Sektion | Sicht-Priorität |
| **SCC:** Abstand 4 (Maximum) statt „+1 Stufe“ | 18×3, SCC-Sektion | Handbuch |
| **Rekuperation Winter:** Level 0 bei Eis/Glätte | 18×3, Reku-Sektion | Handbuch SNOW 0–1 |

---

## 4. Konsistenzprüfung

- **index.html:** 18×3-Tabelle und alle 9 Detail-Sektionen abgeglichen ✅
- **VALIDIERUNG_EMPFOHLENE_EINSTELLUNGEN_2026.md:** Regen/Winter-Empfehlungen aktualisiert ✅
- **Keine veralteten Formulierungen:** „Abstand +1 Stufe“ entfernt, „Fernlicht EIN bei Regen“ entfernt ✅

---

## 5. Ergebnis

**Prüfung bestanden.** Alle empfohlenen Sicherheitsoptimierungen für Regen- und Winter-Profil sind penibel und präzise umgesetzt. 18×3-Tabelle, Detail-Sektionen und Validierungsdokumentation sind konsistent.
