# HTML-Struktur-Audit – Schlüssigkeit & Ordnung

**Stand:** Februar 2026  
**Gegenstand:** [index.html](../index.html) – logische Kohärenz, Aufbau, Begriffs-Konsistenz

---

## 1. Befund: „Erstkauf-Checkliste & Allgemeine Einstellungen“

### 1.1 Problem

Der Abschnitt **H3 „Erstkauf-Checkliste & Allgemeine Einstellungen“** (#checkliste-uebersicht) enthält **nur** die Tabelle **„Allgemeine Einstellungen“** (System, Einheiten, Anzeige, Ton).

- **Impliziert:** Zwei Inhalte (Erstkauf-Checkliste + Allgemeine Einstellungen)
- **Tatsächlich:** Nur Allgemeine Einstellungen

### 1.2 Nav-Link-Verwirrung

| Nav-Link | Ziel (#) | Erwartung | Tatsächlicher Inhalt |
|----------|----------|-----------|----------------------|
| Erstkauf-Checkliste | #checkliste-uebersicht | Checkliste für Erstkäufer | Nur Tabelle „Allgemeine Einstellungen“ |
| Einstellungen & Profile | #empfohlene-einstellungen | Übersicht | 3 Szenarien + Profil-Checkliste 18×3 + Allgemeine Einstellungen |

Die **Profil-Checkliste (18×3)** – die eigentliche Kern-Checkliste für Erstkäufer – steht **vor** dem H3 „Erstkauf-Checkliste & Allgemeine Einstellungen“ und hat die ID **#profile-checklist**. Der Nav-Link „Erstkauf-Checkliste“ führt aber zu #checkliste-uebersicht und damit an die Allgemeinen Einstellungen vorbei.

---

## 2. Aktuelle Struktur (#empfohlene-einstellungen)

```
H2: Empfohlene Einstellungen & 3 Fahrprofile
├── H3: Die 3 Szenarien (#drei-profile)
├── H3: Profil-Checkliste (18 Einstellungen × 3 Szenarien) (#profile-checklist)
└── H3: Erstkauf-Checkliste & Allgemeine Einstellungen (#checkliste-uebersicht)  ← irreführend
    └── H4: Allgemeine Einstellungen (lt. Bedienungsanleitung) (#checkliste-allgemein)
        └── Tabelle: System, Einheiten, Anzeige, Ton
```

---

## 3. Inhaltlich logische Struktur

Die **Erstkauf-Checkliste** im Sinne „Was soll ich beim Erstkauf einstellen?“ umfasst:

1. **Profil-Checkliste (18×3)** – Kern-Empfehlungen pro Szenario
2. **Allgemeine Einstellungen** – System, Einheiten, Anzeige, Ton

Beide gehören konzeptionell zusammen. Die Überschrift „Erstkauf-Checkliste & Allgemeine Einstellungen“ sollte also beide Teile abdecken – tut sie strukturell aber nicht, weil die Profil-Checkliste einen eigenen H3 hat.

---

## 4. Empfohlene Korrekturen

### Option A: Minimale Korrektur (Überschrift + Nav)

- **H3** „Erstkauf-Checkliste & Allgemeine Einstellungen“ → **„Allgemeine Einstellungen“**
- **Nav** „Erstkauf-Checkliste“ → Ziel **#profile-checklist** (die 18×3-Tabelle ist die eigentliche Erstkauf-Checkliste)
- **TOC** „Überblick“: Kein eigener Eintrag „Erstkauf-Checkliste“ nötig; „Empfohlene Einstellungen & 3 Fahrprofile“ deckt die Sektion ab.

### Option B: Strukturelle Klarstellung (empfohlen)

- **H3** „Erstkauf-Checkliste“ (#checkliste-uebersicht) als **Oberbegriff**
- **H4** „Profil-Checkliste (18 Einstellungen × 3 Szenarien)“ (#profile-checklist)
- **H4** „Allgemeine Einstellungen (lt. Bedienungsanleitung)“ (#checkliste-allgemein)

Reihenfolge im Markup:

1. Die 3 Szenarien (H3)
2. Erstkauf-Checkliste (H3)
   - Profil-Checkliste 18×3 (H4) + Tabelle
   - Allgemeine Einstellungen (H4) + Tabelle

Damit führt „Erstkauf-Checkliste“ zu einem Abschnitt, der beide Teile enthält.

---

## 5. Weitere Befunde (Übersicht)

| Thema | Befund | Empfehlung |
|-------|--------|------------|
| TOC „Überblick“ | Kein Link zu Profil-Checkliste oder Erstkauf-Checkliste | Optional: Sub-Links zu #profile-checklist, #checkliste-allgemein |
| Hero-CTA „Zur Checkliste“ | Verweist auf #empfohlene-einstellungen | OK – landet am Anfang der Sektion |
| Section-Back-Link | „↑ Zur Profil-Checkliste“ | OK |
| H2/H3-Hierarchie | Durchgehend korrekt (H2 → H3 → H4) | – |
| ID-Vergabe | Eindeutig, kebab-case | – |

---

## 6. Vollständige HTML-Prüfung (Text, Reihenfolge, Schlüssigkeit)

### 6.1 Sektionsreihenfolge

| Position | TOC „Überblick“ | Tatsächliche Sektion | ID | Konsistent |
|----------|-----------------|----------------------|-----|------------|
| 1 | Empfohlene Einstellungen & 3 Fahrprofile | ✓ | #empfohlene-einstellungen | ✓ |
| 2 | Methodik & Evidenzhierarchie | ✓ | #methodology | ✓ |
| 3 | Quellen und technische Daten | ✓ | #quellen | ✓ |
| 4 | Fahrzeugbilder (Galerie) | ✓ | #galerie | ✓ |
| 5 | Preisliste KIA EV4 | ✓ | #preisliste | ✓ |

**Ergebnis:** TOC-Reihenfolge entspricht der Dokumentstruktur.

### 6.2 Detail-Einstellungen (1–9)

| TOC-Text | H2-Titel | ID | Konsistent |
|----------|----------|-----|------------|
| Fahrmodus | Fahrmodus (Drive Mode) | #drive-mode | ✓ |
| Rekuperation & Bremssystem | Rekuperation & Bremssystem | #regen | ✓ |
| ADAS-Systeme | ADAS-Systeme (vollständig) | #adas | ✓ |
| Klimatisierung & HVAC | Klimatisierung & HVAC | #climate | ✓ |
| Beleuchtung | Beleuchtungssysteme | #lighting | Abweichung („Beleuchtung“ vs. „Beleuchtungssysteme“) |
| Park- & Assistenzsysteme | Park- & Assistenzsysteme | #parking | ✓ |
| Batterie & Laden | Batterie & Laden | #battery | ✓ |
| Navigation & Routing | Navigation & Routing | #navigation | ✓ |
| Personalisierung & Komfort | Personalisierung & Komfort | #personalization | ✓ |

### 6.3 Section-Back-Links

| Sektion | Back-Links | Konsistenz |
|---------|------------|------------|
| Empfohlene Einstellungen | ↑ Zur Profil-Checkliste · ↑ Die 3 Szenarien | ✓ |
| Methodik | ↑ Zur Profil-Checkliste · ↑ Die 3 Szenarien | ✓ |
| Quellen | ↑ Zur Methodik · ↑ Die 3 Szenarien · ↑ Preisliste | ✓ |
| Galerie | ↑ Zu Quellen · ↑ Preisliste · ↑ Einstellungen & Profile | ✓ |
| Preisliste | ↑ Zu Quellen · ↑ Fahrzeugbilder · ↑ Einstellungen & Profile | ✓ |
| Detail 1–9 | ↑ Zur Profil-Checkliste | ✓ (einheitlich) |

### 6.4 Terminologie

| Begriff | Verwendung | Konsistent |
|---------|------------|------------|
| 3 Fahrprofile / 3 Szenarien | Hero-Stats: „Fahrprofile“; H3: „Die 3 Szenarien“ | ✓ (synonym verwendet) |
| Einstellungen & Profile | Nav, Section-Back-Links | ✓ |
| Erstkauf-Checkliste | Nav, H3 (Oberbegriff) | ✓ |
| Profil-Checkliste | H4, Section-Back-Links, helper-text | ✓ |

### 6.5 Nav / Hero-CTAs

| Element | Ziel | Korrekt |
|---------|------|---------|
| Hero „Zur Checkliste“ | #empfohlene-einstellungen | ✓ (Sektion-Anfang) |
| Hero „Zu den 3 Szenarien“ | #drei-profile | ✓ |
| Nav „Erstkauf-Checkliste“ | #checkliste-uebersicht | ✓ (nach Korrektur) |
| Nav „Fahrzeugbilder“ | #galerie | ✓ (H2: „Fahrzeugbilder (Galerie)“) |

### 6.6 Offene Punkte (gering)

| Thema | Befund | Priorität |
|-------|--------|-----------|
| TOC „Beleuchtung“ vs. H2 „Beleuchtungssysteme“ | Leichte Abweichung | Niedrig |
| TOC „Überblick“ ohne Sub-Link zu Erstkauf-Checkliste | „Empfohlene Einstellungen“ deckt ab | Optional |
| Quellen-Sektion: Preisliste-Link vor Galerie | Section-Back-Link „↑ Preisliste“ – Galerie steht zwischen Quellen und Preisliste | OK |

---

## 7. Kurzfassung

- **Kernproblem (behoben):** „Erstkauf-Checkliste & Allgemeine Einstellungen“ enthielt nur Allgemeine Einstellungen. **Umsetzung:** H3 „Erstkauf-Checkliste“ als Oberbegriff, H4 Profil-Checkliste + H4 Allgemeine Einstellungen.
- **Vollständige Prüfung:** Sektionsreihenfolge, TOC, Nav, Section-Back-Links, Terminologie und IDs sind konsistent. Einzige Abweichung: TOC „Beleuchtung“ vs. H2 „Beleuchtungssysteme“ (gering).
