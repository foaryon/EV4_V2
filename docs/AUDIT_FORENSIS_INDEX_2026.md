# Forensischer Audit: index.html – Daten, Einstellungen, Empfehlungen

**Stand:** 30. Januar 2026  
**Gegenstand:** Vollständige Prüfung aller in `index.html` hinterlegten Daten, Einstellungen, Einstellungsmöglichkeiten und -empfehlungen je Profil. Eliminierung von False Positives, Fakes und Falschannahmen.

---

## 1. Zusammenfassung

| Kategorie | Status | Korrekturen |
|-----------|--------|-------------|
| **Quellenanzahl** | ❌ Falsch | 22 → **20** (tatsächliche Zeilen im Quellenverzeichnis) |
| **Technische Daten** | ⚠️ Teilweise | Vmax 185 km/h → **170 km/h** (evspecifications); Reichweite 630 km vs. 625 km (17") – KIA Marketing vs. Preisliste |
| **Profil-Empfehlungen** | ✅ Bestätigt | VALIDIERUNG_EMPFOHLENE_EINSTELLUNGEN_2026.md: 16 bestätigt, 2 mit Nuance |
| **Preisliste** | ✅ Konsistent | Abgleich mit preisliste.json und ev4-earth-specs.json |
| **Schema.org** | ⚠️ Prüfen | Gewicht „ca. 1900“ KGM – Quelle prüfen; unitCode KWT für kW korrekt |

---

## 2. Detaillierte Befunde

### 2.1 Quellenanzahl: 22 vs. 20 (FALSE POSITIVE)

**Behauptung:** „22 Quellen“ (meta description, hero-stats)

**Tatsache:** Das Quellenverzeichnis (`#quellen-verzeichnis`) enthält **20 Zeilen** (Quellen).

**Quellenliste (gezählt):**
1. KIA Bedienungsanleitungen (DE)
2. Owner Manual Online
3. KIA EU Presales EV4
4. KIA UK Specifications
5. KIA IE Specifications
6. KIA Press Office (DE)
7. Rettungskarten (DE)
8. ADAC Autokatalog EV4
9. ADAC Earth 81,4 kWh / 58,3 kWh
10. Euro NCAP
11. Euro NCAP Latest Ratings (Kia)
12. Global NCAP / Latin NCAP – Kia EV4
13. UNECE Regulation No. 154 (WLTP)
14. EUR-Lex WLTP und RDE
15. evspecifications.com (81,4 / 58,3 kWh, Hatchback)
16. meinauto.de EV4 (Hatchback)
17. EV4-Forum (DE)
18. auto-motor-und-sport – Kia EV4 Test
19. InsideEVs – Kia EV4 Test
20. GoingElectric Forum EV4

**Korrektur:** „22 Quellen“ → **„20 Quellen“** in meta description, hero-stats und ggf. Open Graph.

---

### 2.2 Vmax / Geschwindigkeitslimit: 185 km/h vs. 170 km/h (FALSCH)

**Behauptung (Fahrmodus, Zeile 894):** „Alle Modi bis 185 km/h (Vmax)“  
**Behauptung (Rekuperation, Zeile 985):** „Geschwindigkeitsbereich: 0-185 km/h“

**Tatsache:** evspecifications.com (Quelle B) und Inline-Box in derselben Sektion: **Vmax 170 km/h**.

**Korrektur:** 185 km/h → **170 km/h** in allen technischen Beschreibungen (Fahrmodus, Rekuperation). SCC/HDA/FCA können andere Limits haben (z. B. 180 km/h Regelung) – diese sind von Vmax getrennt zu prüfen.

---

### 2.3 Reichweite WLTP: 630 km vs. 625 km (17")

**Behauptung (Technische Eckdaten):** „bis ca. 630 km“

**Tatsache:** 
- KIA EU Presales: „up to 630 km“ (Marketing)
- ev4-earth-specs.json / preisliste: **594 (19") / 625 (17") km** für Earth 81 kWh

**Bewertung:** 630 km ist KIA-Marketingangabe (Bestfall). Die Preisliste nennt 625 km (17"). Beides kann stehen bleiben, wenn differenziert: z. B. „bis ca. 630 km (KIA) / 625 km (17", Preisliste)“ oder einheitlich „bis 625 km (17") bzw. 630 km (KIA Angabe)“.

**Empfehlung:** Formulierung präzisieren: „bis 625 km (17") / 594 km (19") – KIA bis 630 km“.

---

### 2.4 Profil-Checkliste: 18 Einstellungen

**Bestätigt:** 18 Zeilen in der Profil-Checkliste. Zeile 7 (Spurwechsel-Assistent) mit „–“ für alle Profile – lt. VALIDIERUNG bewusst so (abhängig von Ausstattung, kein eigener Eintrag).

**Einstellungsempfehlungen:** Laut VALIDIERUNG_EMPFOHLENE_EINSTELLUNGEN_2026.md: 16 bestätigt, 2 mit Nuance, 0 Korrekturen. Keine False Positives.

---

### 2.5 HDA / NSCC / SCC: Ausstattungsabhängigkeit

**Hinweis:** HDA 2.0 und NSCC sind nur mit **P6** (Earth) bzw. **P2** (Air) verfügbar. Die Empfehlungen setzen diese Ausstattung voraus. Das Dokument fokussiert auf „Earth 81 kWh (P3–P6)“ – bei P3–P5 ohne P6 ist HDA nicht verfügbar.

**Empfehlung:** Kurzer Hinweis ergänzen: „HDA/NSCC nur mit P6 (Earth) bzw. P2 (Air). Ohne Paket: Einstellung nicht verfügbar.“

---

### 2.6 Preisliste & Pakete

**Abgleich mit preisliste.json:** Preise, Paketbezeichnungen und Abhängigkeiten (i. V. mit) stimmen überein. Keine Abweichungen.

---

### 2.7 Schema.org Product

- **enginePower:** 150, unitCode KWT (Kilowatt) – korrekt
- **weight:** „ca. 1900“ KGM – Quelle prüfen (evspecifications: Curb weight?)
- **vehicleConfiguration:** „Earth 81,4 kWh, Frontantrieb, Hatchback“ – korrekt

---

### 2.8 Wärmepumpe „serienmäßig“

**Behauptung (deep-dive-content, Klima):** „Wärmepumpe serienmäßig“

**Tatsache:** 
- **Earth:** Wärmepumpe in **P5** (Winter-Connect-Paket)
- **Air:** Wärmepumpe in **P1** (Winter-Paket)

**Bewertung:** Nicht serienmäßig für Earth Basis. Formulierung anpassen: „Wärmepumpe in P5 (Earth) bzw. P1 (Air)“.

---

## 3. Korrekturen (Umsetzung)

| # | Datei | Änderung |
|---|-------|----------|
| 1 | index.html | „22 Quellen“ → „20 Quellen“ (meta, hero-stats) |
| 2 | index.html | Vmax 185 km/h → 170 km/h (Fahrmodus, Rekuperation) |
| 3 | index.html | Reichweite: „bis ca. 630 km“ → „bis 625 km (17") / 594 km (19"); KIA bis 630 km“ (optional) |
| 4 | index.html | Wärmepumpe: „serienmäßig“ → „in P5 (Earth) / P1 (Air)“ (deep-dive-Inhalt) |
| 5 | index.html | Hinweis: HDA/NSCC nur mit P6/P2 (optional) |

---

## 4. Nicht beanstandet (keine False Positives)

- 3 Fahrprofile (Standard, Regen, Winter)
- 9 Kategorien (Detail-Einstellungen 1–9)
- 18 Parameter in der Checkliste
- Evidenzhierarchie A/B/C
- P3–P6 Paketbeschreibungen und Preise
- Galerie-Bildpfade (nach Bereinigung)
- Validierungs-Link zu VALIDIERUNG_EMPFOHLENE_EINSTELLUNGEN_2026.md
