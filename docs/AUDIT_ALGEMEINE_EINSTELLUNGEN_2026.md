# Audit: Allgemeine Einstellungen – Abdeckung lt. Bedienungsanleitung

**Stand:** Januar 2026  
**Quelle:** KIA ccNC-Lite/ccNC Webmanual (EV4 nutzt ccNC-Infotainment), KIA EV4 Bedienungsanleitung 2026  
**Gegenstand:** Abgleich „Allgemeine Einstellungen“ in index.html vs. Handbuch

---

## 1. Aktuell in index.html abgedeckt (8 Einträge)

| Bereich | Einstellung | Empfehlung | Handbuch-Referenz |
|---------|-------------|------------|-------------------|
| System | Sprache | Deutsch | ccNC: Sprache/Language |
| Einheiten | Länge / Entfernung | km | ccNC: Maßeinheiten → Entfernung und Tempo |
| Einheiten | Temperatur | °C | ccNC: Maßeinheiten → Temperatur-Einheit |
| Einheiten | Druck (Reifendruck) | bar | ccNC: Maßeinheiten → Einheit Reifendruck |
| Anzeige | Datum & Uhrzeit | Automatisch (Funk) | ccNC: Datum/Uhrzeit → Automatische Zeiteinstellung |
| Anzeige | Zeitzone | Europa/Berlin | ccNC: Datum/Uhrzeit → Zeitzone |
| Ton | Tastentöne | Nach Bedarf (z. B. EIN) | ccNC: Audioeinstellungen / Fahrerassistenz-Warnmethoden |
| Ton | Begrüßungston | EIN oder AUS (Geschmackssache) | KIA Infotainment (Gen5W/ccNC) |

---

## 2. Lt. Handbuch vorhanden, in HTML fehlend

### 2.1 Priorität: Hoch (Erstkauf-relevant)

| Bereich | Einstellung | Handbuch-Optionen | Empfohlene Ergänzung |
|---------|-------------|-------------------|----------------------|
| **Einheiten** | **Verbrauch (Energie)** | kWh/100 km, km/kWh, mi/kWh (EV-spezifisch) | kWh/100 km (EU-Standard, WLTP-konform) |

**Begründung:** EV4 zeigt Verbrauch in kWh. ccNC: „Einheit Kraftstoffverbrauch (falls Teil der Ausstattung)“ – bei EV = Energieverbrauch. Für konsistente Anzeige mit WLTP (14,3–14,9 kWh/100 km) sinnvoll.

---

### 2.2 Priorität: Mittel (Vollständigkeit)

| Bereich | Einstellung | Handbuch-Optionen | Empfohlene Ergänzung |
|---------|-------------|-------------------|----------------------|
| **Anzeige** | **Zeitformat** | 12h / 24h | 24h (EU-Standard) |
| **Anzeige** | **Sommerzeit** | EIN / AUS (automatisch) | Automatisch (bei Automatische Zeiteinstellung inkl.) |

**Begründung:** ccNC: „Zeitformat“ und „Sommerzeit (falls Teil der Ausstattung)“. Bei „Automatisch (Funk)“ oft inkludiert; explizit nützlich für manuelle Nutzer.

---

### 2.3 Priorität: Niedrig (optional)

| Bereich | Einstellung | Handbuch | Empfohlene Ergänzung |
|---------|-------------|----------|----------------------|
| System | Tastatur | Tastaturlayout (QWERTZ/QWERTY) | QWERTZ (Deutsch) |
| Medien | Medien bei Fahrzeugstart | Aus / An | Nach Bedarf |
| Medien | Medienwiedergabe nach Ausschalten | Beibehalten (Zeit/Tür) | Nach Bedarf |
| System | Software-Info / OTA-Aktualisierung | Version, Update | Hinweis: OTA nutzen (update.kia.com) |

---

## 3. Zusammenfassung: Ergänzungsbedarf

| Priorität | Anzahl | Einstellungen |
|-----------|--------|---------------|
| **Hoch** | 1 | Verbrauch (kWh/100 km) |
| **Mittel** | 2 | Zeitformat (24h), Sommerzeit (Automatisch) |
| **Niedrig** | 4 | Tastatur, Medien bei Start, Medien nach Ausschalten, Software-Info |

---

## 4. Empfohlene Ergänzungen für 100 % Abdeckung

### Minimale Ergänzung (Priorität Hoch)

```html
<tr><td>Einheiten</td><td>Verbrauch (Energie)</td><td>kWh/100 km (EU-Standard, WLTP-konform)</td></tr>
```

### Vollständige Ergänzung (Priorität Hoch + Mittel)

Zusätzlich:
```html
<tr><td>Anzeige</td><td>Zeitformat</td><td>24h (EU-Standard)</td></tr>
<tr><td>Anzeige</td><td>Sommerzeit</td><td>Automatisch (bei Automatische Zeiteinstellung)</td></tr>
```

### Optionale Ergänzung (Priorität Niedrig)

- Tastatur: QWERTZ
- Medien bei Fahrzeugstart: Nach Bedarf
- Medienwiedergabe nach Ausschalten: Nach Bedarf
- Software-Update: OTA aktivieren (update.kia.com)

---

## 5. Abdeckungsgrad

| Kriterium | Aktuell | Nach Ergänzung (Hoch+Mittel) |
|-----------|---------|------------------------------|
| Kern-Einstellungen (Sprache, Einheiten, Anzeige, Ton) | 8/11 (73 %) | 11/11 (100 %) |
| EV-spezifisch (Verbrauch kWh) | 0/1 (0 %) | 1/1 (100 %) |
| Optional (Tastatur, Medien, Software) | 0/4 (0 %) | 0/4 (unverändert) |

**Fazit:** Mit **3 zusätzlichen Zeilen** (Verbrauch, Zeitformat, Sommerzeit) ist die Abdeckung der handbuch-relevanten Allgemeinen Einstellungen für den Erstkauf **vollständig**.

---

## 6. Umsetzungsstand (Januar 2026)

| Ergänzung | Status |
|-----------|--------|
| Verbrauch (Energie): kWh/100 km | ✅ In index.html ergänzt |
| Zeitformat: 24h | ✅ In index.html ergänzt |
| Sommerzeit: Automatisch | ✅ In index.html ergänzt |

**Aktueller Abdeckungsgrad:** 11/11 Kern-Einstellungen (100 %).
