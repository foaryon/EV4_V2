# Responsive-Design-Audit – index.html (tiefenbasiert)

**Stand:** Februar 2026  
**Gegenstand:** Vollständige Prüfung der Responsivität für Smartphones, Tablets und Desktop.  
**Methodik:** Code-Review, Breakpoint-Analyse, Overflow-Quellen, potenzielle Fehler.

---

## 1. Zusammenfassung

| Kategorie | Status | Kritische Befunde |
|-----------|--------|-------------------|
| Viewport & Meta | ✅ | `viewport-fit=cover` vorhanden |
| Overflow/Abgehackt | ⚠️ | Potenzielle Quellen: `100vw`, `contain: layout`, Footer |
| Profil-Checkliste (18×3) | ✅ | Card-Layout ≤768px implementiert |
| Weitere Tabellen | ⚠️ | Preisliste, Methodik, Quellen: nur horizontales Scroll |
| Nav/Hamburger | ✅ | JS korrekt, Breakpoint 768px |
| Hero | ✅ | Umbruch, Buttons responsive |
| Externe Ressourcen | ⚠️ | Wix-Fonts (parastorage) können blockieren |

---

## 2. Befunde im Detail

### 2.1 Viewport & Grundlagen

- **Meta:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` ✅
- **html:** `overflow-x: hidden`, `width: 100%` ✅
- **body:** `overflow-x: hidden`, `width: 100%` ✅

### 2.2 Potenzielle Overflow-Quellen

| Stelle | Problem | Risiko |
|--------|---------|--------|
| `site-footer-inner` | `max-width: min(100vw - 2 * env(...), var(--container-max))` | `100vw` schließt ggf. Scrollbar ein → horizontales Scrollen |
| `lightbox-overlay .lightbox-inner` | `max-width: calc(100vw - var(--space-8))` | Gleiches Risiko |
| `responsive-table-wrapper` | `contain: layout` | Kann in älteren Browsern Layout-Probleme verursachen |
| `nav .nav-links` (Mobile) | `width: min(320px, 100vw - 2 * var(--container-gutter) - env(...))` | Auf sehr schmalen Geräten (<360px) eng, aber funktional |

### 2.3 Breakpoint-Konsistenz

| Breakpoint | Verwendung | Hinweis |
|------------|------------|---------|
| 360px | Container-Gutter | Sehr kleine Geräte |
| 480px (--bp-sm) | Viele Mobile-Anpassungen | iPhone SE, kleine Android |
| 600px | Hero-Titel/Tagline Umbruch | Zwischenbereich |
| 768px (--bp-md) | Hamburger, Profil-Checkliste Card-Layout, TOC 2 Spalten | iPad Portrait |
| 769px | Nav-Links sichtbar, Hamburger aus | 1px Lücke zu 768px |
| 1024px (--bp-lg) | Sidebar, 3 Spalten | iPad Landscape, Desktop |
| 1280px, 1440px, 1600px | Container, Gutter | Große Displays |

**iPad-spezifisch:** Bei 768px Breite (iPad Portrait) greift das Mobile-Layout (Hamburger). Bei 810px (iPad 10.9") bereits Desktop-Nav. Kein dedizierter Tablet-Breakpoint zwischen 768–1024px für optimierte Darstellung.

### 2.4 Tabellen – Responsive-Verhalten

| Tabelle | Mobile (≤768px) | Tablet (769–1023px) |
|---------|-----------------|---------------------|
| **Profil-Checkliste (18×3)** | ✅ Card-Layout (Karten) | Horizontales Scroll |
| **Allgemeine Einstellungen** | Horizontales Scroll | Horizontales Scroll |
| **Methodik (Evidenzhierarchie)** | Horizontales Scroll | Horizontales Scroll |
| **Quellen** | 4 Spalten → Scroll | Scroll |
| **Preisliste Varianten** | 6 Spalten → Scroll | Scroll |
| **Preisliste Verfügbarkeit** | 3 Spalten → Scroll | Scroll |

**Befund:** Nur die Profil-Checkliste hat ein Card-Layout. Alle anderen Tabellen nutzen ausschließlich horizontales Scrollen – auf schmalen Smartphones oft schlecht bedienbar.

### 2.5 Nav & Hamburger

- **Breakpoint:** 768px – unterhalb Hamburger, oberhalb horizontale Nav ✅
- **JS:** `initNavMenu()` bindet Trigger, Backdrop, Escape, Resize ✅
- **Nav position:** Bei ≤768px `position: relative` – Nav scrollt mit. Kein Sticky auf Mobile. Bewusst so?
- **Nav-Links Breite:** `min(320px, 100vw - ...)` – auf 320px Viewport sehr schmal, aber nutzbar

### 2.6 Hero

- **Titel/Tagline:** `white-space: normal` ab 600px und 768px ✅
- **CTAs:** Ab 480px untereinander, volle Breite ✅
- **Hintergrund:** `background-size: cover`, `background-position` responsive ✅

### 2.7 Externe Ressourcen

- **Wix Madefor Fonts:** `static.parastorage.com` – bei Blockierung oder langsamer Verbindung Fallback auf System-Fonts
- **Material Symbols:** `fonts.googleapis.com` – weit verbreitet, meist verfügbar

### 2.8 Section-Padding (responsive)

- ≤480px: 1.5rem ✅
- 481–767px: 2rem ✅
- 768–1023px: 3rem ✅
- ≥1024px: 5rem ✅

---

## 3. Empfohlene Maßnahmen (priorisiert)

### Priorität 1 (kritisch für „abgehackt“) – **umgesetzt**

1. **Footer:** `site-footer-inner` – `max-width: var(--container-max)` (100vw entfernt) ✅
2. **Lightbox:** `max-width: calc(100% - var(--space-8))` (100vw entfernt) ✅
3. **contain: layout** am `responsive-table-wrapper` entfernt ✅

### Priorität 2 (Verbesserung)

4. **Weitere Tabellen:** Für „Allgemeine Einstellungen“, „Methodik“, „Preisliste“ optional Card-Layout oder vereinfachte Mobile-Ansicht (z. B. weniger Spalten sichtbar).
5. **iPad 768px:** Nav wechselt genau bei 768px – ggf. Breakpoint auf 767px/769px vereinheitlichen.
6. **Font-Fallback:** `font-display: swap` oder `optional` für externe Fonts prüfen (in externen Stylesheets).

### Priorität 3 (nice-to-have)

7. **Touch-Targets:** Durchgängig 44px – bereits über `--touch-target-min` abgedeckt ✅
8. **Safe-Area:** `env(safe-area-inset-*)` in Nav, Hero, Footer – vorhanden ✅

---

## 4. Validierungs-Checkliste

- [ ] iPhone SE (375×667) – Profil-Checkliste als Karten, kein Overflow
- [ ] iPhone 14 (390×844) – gleiche Prüfung
- [ ] iPad Mini (768×1024) – Hamburger vs. Desktop-Nav an der Kante
- [ ] iPad 10.9" (810×1080) – Desktop-Nav, Tabellen-Scroll
- [ ] Android schmal (360×640) – Container-Gutter, Lesbarkeit
- [ ] Querformat auf Smartphone – Hero, Tabellen

---

## 5. Fazit

Die Responsivität ist grundsätzlich umgesetzt, mit Fokus auf der Profil-Checkliste (Card-Layout). Die gemeldeten Probleme („abgehackt“, „3 Profile zerstört“) können u. a. durch:

1. `100vw`-Nutzung (Footer, Lightbox),
2. `contain: layout` am Table-Wrapper,
3. fehlendes Card-Layout bei anderen Tabellen (bereits für Profil-Checkliste gelöst)

verursacht werden. Die Priorität-1-Maßnahmen sollten zuerst umgesetzt werden.
