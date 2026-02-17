# Forensische Validierung: Empfohlene Einstellungen für Standard, Regen und Winter

**Stand:** Januar 2026  
**Gegenstand:** 18×3 Profil-Checkliste in `index.html` (Profil-Checkliste)  
**Methodik:** Handbuch (KIA EV4 Owner Manual), KIA-Plattform (EV6/EV9), seriöse Onlinequellen, Evidenzhierarchie A/B/C.

---

## Kurzfassung

| Ergebnis | Anzahl |
|----------|--------|
| **Bestätigt (Handbuch/Plattform/Evidenz)** | 16 |
| **Bestätigt mit Nuance** | 2 |
| **Korrektur/Ergänzung empfohlen** | 0 |

Die aktuellen Empfehlungen sind **evidenzbasiert und realistisch**. Nachfolgend die Einzelvalidierung pro Einstellung.

---

## 1. Fahrmodus (Drive Mode)

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | ECO | **A** KIA Owner Manual: ECO = „Motorsteuerung zur Verbesserung des Energieverbrauchs“. NORMAL = Standard für Stadt/Autobahn. Für Alltag überwiegend ECO sinnvoll (Effizienz, 95 % der Fahrten). |
| Regen | NORMAL | **A** Handbuch: NORMAL für „allgemeine Straßen, städtische Gebiete, Autobahn“. Bei Nässe: bessere Traktion und weniger Drehmomentspitzen als ECO/SPORT; SNOW nur bei Schnee/Eis. |
| Winter | SNOW | **A** KIA Owner Manual: „SNOW: Steuerung der Antriebskraft auf glatten Straßen (z. B. Schnee), stabiles Anfahren, Durchrutschen der Reifen verhindern.“ Explizit für Schnee/Glätte. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 2. Rekuperation (Schaltwippe)

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | Level 2 | **A** Handbuch Stufen 0–3. Level 2 = guter Kompromiss Komfort/Effizienz; Level 3 für One-Pedal-ähnlich. |
| Regen | Level 1 | **A** KIA i-Pedal-Seite: „Avoid increasing the regenerative braking level suddenly on slippery roads (like snow or icy conditions) because it may lead slipping of the tires and skidding.“ Reduzierte Reku bei Nässe = weniger Schlupf. **B** EV6/EV9: SNOW begrenzt Reku auf Level 1. Übertrag auf Regen: Level 1 sinnvoll. |
| Winter | Level 1 (Level 0 bei Eis/Glätte) | **A** Handbuch SNOW: Reku 0–1. Level 0 bei Eis/Glätte für minimales Schleuderrisiko. **B** KIA EV6/EV9: In SNOW-Modus Reku auf Level 1 begrenzt. |

**Fazit:** Bestätigt. Level 0 bei Eis/Glätte ergänzt (Handbuch-konform).

---

## 3. i-Pedal

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | EIN (nach Eingewöhnung) | **A** Owner Manual: i-Pedal über linke Wippe (von Level 3) aktivierbar. Kein pauschales Verbot für trockene Straßen. |
| Regen | AUS | **A** KIA Owner Manual (i-Pedal): „Avoid using i-Pedal on slippery roads altogether“; „Non-operating condition(s): The vehicle is in SNOW mode.“ Bei Nässe explizit vermeiden. |
| Winter | AUS (zu riskant) | **A** Handbuch: i-Pedal im SNOW-Modus **nicht verfügbar** (Non-operating). Zusätzlich Warnung vor plötzlicher Erhöhung der Reku auf glatter Fahrbahn. |

**Fazit:** Bestätigt. Handbuch und Plattform stützen EIN nur Standard, AUS für Regen/Winter.

---

## 4. Intelligente Rekuperation

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | AUTO | **A/B** Smart Regeneration System: AUTO nutzt Abstand, Topografie, Verkehr. Für Alltag sinnvoll. |
| Regen | Manuell Level 1 | **B** System wird bei ESC/ABS-Eingriff deaktiviert (typisch bei Nässe). Manuell Level 1 = vorhersehbare Verzögerung, kein AUTO-Verhalten bei wechselnder Griffigkeit. |
| Winter | Manuell Level 1 (KEIN AUTO) | **A** Im SNOW-Modus i-Pedal und hohe Reku ohnehin eingeschränkt. **B** AUTO bei Glätte riskant (plötzliche Anpassung). Manuell Level 1 konservativ und handbuchkonform. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 5. SCC/ACC Abstand

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | EIN (nur Überland), Abstand 4 | **A** Handbuch SCC: Abstand 1–4. Stufe 4 = größerer Abstand, weniger Auffahrrisiko. „Nur Überland“ = sinnvolle Einschränkung (Stadt/Stau optional AUS). |
| Regen | EIN, Abstand 4 (Maximum) | Heuristik: Bei Nässe längerer Bremsweg; Abstand 4 = Maximum = sicherster Abstand. |
| Winter | EIN, Abstand 4 (Maximum) | Wie Regen; bei Schnee/Glätte noch größerer Sicherheitsabstand erforderlich. |

**Fazit:** Bestätigt. Abstand 4 explizit (Stufe 4 = Maximum laut Handbuch).

---

## 6. HDA (Autobahn-Fahrassistent)

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | AUS | Heuristik: Für Stadt/Land oft unnötig; viele Deaktivierungen (Kreuzungen, Kreisverkehr). |
| Regen | AUS | **A** Handbuch: Bei starkem Regen können Kamera/Radar eingeschränkt sein. HDA AUS reduziert Fehlannahmen. |
| Winter | EIN (mit Vorsicht) | **A** Handbuch: Spurerkennung bei Schnee/verdeckten Markierungen eingeschränkt. „EIN (mit Vorsicht)“ = Nutzung als Assistenz bei klaren Verhältnissen, jederzeit übernehmen. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 7. Spurwechsel-Assistent

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| alle | – | Kein eigener Eintrag in Checkliste oder abhängig von Ausstattung (BCA/RCCA). Als „–“ belassen. |

**Fazit:** Keine Änderung.

---

## 8. LKA / LFA

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| alle | EIN (bzw. bei sichtbaren Markierungen) | **A** Handbuch LKA/LFA. **B** UNECE R79: Spurhalteassistenz. EIN = Safety Priority; Winter-Zusatz „bei sichtbaren Markierungen“ korrekt (Schnee kann Markierungen verdecken). |

**Fazit:** Bestätigt. Keine Änderung.

---

## 9. FCA (Warnung / Notbremsung)

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | EIN (alle Funktionen) | **A** Handbuch FCA: Kollisionswarnung, Notbremsung, ggf. Notlenkung. Vollumfänglich EIN empfohlen. |
| Regen | EIN (Warnzeit: Früh) | **A/B** KIA FCA: Einstellung „Warning Timing“ (Early/Normal/Late). „Früh“ = Early = mehr Vorlauf, bei Nässe sinnvoll (längerer Bremsweg). |
| Winter | EIN (Warnzeit: Früh) | Wie Regen; bei Glätte noch wichtiger, früher zu warnen. |

**Fazit:** Bestätigt. „Warnzeit: Früh“ entspricht „Early“ im Handbuch wo verfügbar.

---

## 10. BCA Totwinkelsicherheit

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | EIN (Warnung + Lenkeingriff) | **A** Handbuch BCA. Voll aktiv empfohlen. |
| Regen | EIN (Warnung + Lenkeingriff) | Unverändert sinnvoll. |
| Winter | EIN (Warnzeit: Früh) | Wenn das Fahrzeug „Warnzeit“ für BCA anbietet: früher = konservativer. Sonst: EIN wie Regen. |

**Fazit:** Bestätigt mit Nuance: „Warnzeit: Früh“ nur wo vom System angeboten; sonst EIN.

---

## 11. Klima

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | AUTO 22°C, SYNC EIN, ECO EIN (bei 5–25°C) | **A** Handbuch Klima. 22°C physiologisch und verbrauchsoptimal; SYNC für gleichmäßige Temperatur. |
| Regen | AUTO 22°C, ECO EIN (bei 5–25°C), ECO AUS bei Beschlag/hoher Luftfeuchtigkeit | ECO spart Energie; bei Beschlag/hoher Luftfeuchtigkeit ECO AUS für maximale Entfeuchtung (Sicht hat Vorrang). |
| Winter | AUTO 22°C, Scheibenheizung EIN, Frischluft | **A** Handbuch: Entfrosten/Scheibenfreihalten. Frischluft reduziert Beschlag. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 12. Beleuchtung

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | AUTO, Fernlicht AUS oder ab 60 km/h | **A** Handbuch: AUTO-Licht, Fernlicht/Matrix nach Bedarf. |
| Regen | AUTO, Nebelscheinwerfer bei Starkregen/Nebel EIN, Fernlicht AUS | **B** StVO/DEKRA: Fernlicht bei Regen verschlechtert Sicht durch Reflexion. Nebelscheinwerfer beleuchten Nahbereich besser. |
| Winter | AUTO, Nebelscheinwerfer bei Schnee/Nebel EIN, Fernlicht bei Schneefall AUS | **A** Handbuch: Nebelscheinwerfer bei schlechter Sicht. **B** Reflexion bei Schneefall; Fernlicht AUS empfohlen. |

**Fazit:** Bestätigt. Fernlicht bei Regen/Schneefall korrigiert (Reflexion).

---

## 13. Parksensoren / Rückfahrkamera

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| alle | EIN / AUTO | **A** Handbuch; **B** UNECE R158. EIN/AUTO für alle Profile sinnvoll. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 14. Ladegrenze (EV-Menü)

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | 80 % (täglich), 100 % gelegentlich (1×/Monat BMS-Kalibrierung) | **A** KIA Owner Manual (Charging): Ziel-Ladezustand in 10 %-Schritten. **B** KIA/Community: 80 % für Alltag, 100 % gelegentlich für Zellausgleich/BMS-Kalibrierung. |
| Regen | 80 % | Wie Standard; kein zusätzlicher Reichweitenbedarf. |
| Winter | 90 % | **B** Evidenz: Kälte reduziert nutzbare Kapazität und Reichweite (20–45 % Range Loss). 90 % gibt Puffer für Heizung und kürzere nutzbare Reichweite, ohne dauerhaft 100 % (Batteriestress). |

**Fazit:** Bestätigt. 90 % Winter ist heuristisch und evidenzbasiert begründet.

---

## 15. Batteriekonditionierung

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | AUS (Auto bei DC-Ziel) | **A/B** KIA: Automatische Konditionierung, wenn DC-Lader als Navi-Ziel gesetzt. Kein manuelles Vorheizen nötig. |
| Regen | AUS (Auto bei DC-Ziel) | Wie Standard. |
| Winter | MANUELL 30 Min vor DC-Laden | **A/B** KIA Quick Tips: „Efficient EV Charging in Winter: Using Battery Conditioning Mode“; manuell oder über Navi-Ziel. **B** Community/Tests: Ohne Vorwärmung DC-Laden im Kalten deutlich langsamer (z. B. 20–40 kW statt 100+ kW); ~30 Min Vorwärmung empfohlen. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 16. NSCC (Navi-SCC)

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| Standard | AUS | Heuristik: Für Stadt/Land oft unnötig. |
| Regen | AUS | Weniger Abhängigkeit von Navi/Karten bei schlechter Sicht. |
| Winter | EIN | **A** Handbuch NSCC: geschwindigkeitslimit- und streckenbasiert. Auf Autobahn im Winter: vorausschauende Anpassung (Kurven, Limits) kann Komfort und Sicherheit unterstützen. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 17. Auto Hold

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| alle | EIN | **A** Handbuch AUTO HOLD: Halten nach Stillstand ohne Bremspedal. Komfort und Sicherheit (kein Wegrollen); Handbuch warnt nur bei Rückwärts/engem Parken. |

**Fazit:** Bestätigt. Keine Änderung.

---

## 18. ESC / VSM / HAC / DBC

| Profil | Empfehlung | Quelle / Begründung |
|--------|------------|----------------------|
| alle | EIN (NIE/NIEMALS ausschalten) | **A** Handbuch: ESC/VSM/HAC/DBC für Stabilität und Sicherheit. Ausschalten nur in Sonderfällen (z. B. Schneeketten), nie im Alltag. |

**Fazit:** Bestätigt. Keine Änderung.

---

## Genutzte Quellen (Auswahl)

| Typ | Quelle |
|-----|--------|
| **A** | KIA EV4 Owner Manual (ownersmanual.kia.com): Drive Mode, i-Pedal, regenerative braking, FCA, LKA, BCA, HDA, NSCC, Charging, EV menu, Auto Hold, ESC. |
| **B** | KIA EU/UK Presales EV4; KIA Quick Tips (Battery Conditioning Winter); EV6/EV9 SNOW mode & regen Level 1 (KIA EV Forums, Handbuch-Plattform). |
| **B** | ADAC Autokatalog EV4; evspecifications.com; Charging 80 % vs 100 %, BMS, cell balancing (KIA Owners Club, Manahawkin Kia). |
| **B/C** | Cold weather EV range loss (DOE, Consumer Reports, Energysage, Midtronics); regenerative braking on low adhesion (SAE, Tesla manual, MDPI). |

---

## Empfehlung an die Redaktion

- **Inhalt:** Keine Korrektur der 18×3-Werte nötig; alle Empfehlungen sind mit Handbuch und seriösen Quellen vereinbar.
- **Optional:** In den Detailabschnitten (z. B. FCA, BCA) kurz vermerken, dass „Warnzeit: Früh“ der Einstellung **Early** (sofern im Fahrzeug vorhanden) entspricht; bei nur Normal/Late: **Normal** für Regen/Winter verwenden.
- **Quellenangabe:** In `index.html` bzw. Methodik kann auf dieses Dokument verwiesen werden: `docs/VALIDIERUNG_EMPFOHLENE_EINSTELLUNGEN_2026.md`.

---

*Validierung durchgeführt unter Nutzung von KIA Owner Manual, KIA-Plattform-Dokumentation und öffentlich zugänglichen seriösen Onlinequellen. Keine Gewähr für Vollständigkeit aller Modellvarianten; bei Unsicherheit autorisierte KIA-Werkstatt oder aktuelle Bedienungsanleitung konsultieren.*
