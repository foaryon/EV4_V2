Iterationsbasierter Website-Prüfplan (100 Iterationen, moderne Browser, HTML5 & CSS3, responsive & agil)  
Heuristische und forensische Analyse von Websites/HTML-Dateien

------------------------------------------------------------
Legende
- Heuristisch: Erfahrungsbasierte Bewertung, Best Practices, Usability
- Forensisch: Detaillierte technische Analyse, Sicherheit, Code-Inspektion

Randbedingungen
- Fokus auf moderne Browser (aktuelle Chrome, Firefox, Safari, Edge)
- HTML5, CSS3 und moderne JavaScript-Features
- Responsive Web Development & agile Webentwicklung explizit berücksichtigt

------------------------------------------------------------
Iteration 1: Erste Sichtung & Grundstruktur
- HTML5-Dokumentstruktur validieren (<!DOCTYPE html>, html, head, body)
- Vorhandensein von meta-charset="utf-8" prüfen
- Viewport-Meta-Tag für Responsive Design überprüfen
- Titel-Tag (title) auf Vorhandensein und Aussagekraft prüfen

Iteration 2: Semantische HTML5-Struktur
- Verwendung semantischer Tags analysieren (header, nav, main, article, section, aside, footer)
- Heading-Hierarchie prüfen (h1–h6 in logischer Reihenfolge)
- Überprüfung auf „div-Suppe“ (übermäßige div-Nutzung ohne Semantik)
- Landmark-Rollen für Screen Reader evaluieren

Iteration 3: CSS3-Integration & Organisation
- Art der CSS-Einbindung prüfen (inline, internal, external)
- CSS-Dateien auf Minifizierung/Komprimierung überprüfen
- Verwendung von Präprozessoren oder Build-Tools erkennen (Sass, PostCSS, Tailwind, etc.)
- CSS-Namenskonventionen analysieren (BEM, Utility-Klassen, Design System)

Iteration 4: JavaScript-Integration (ES6+)
- JavaScript-Einbindung analysieren (module, defer, async)
- Position der Script-Tags prüfen (möglichst am Ende von body oder mit defer)
- Nutzung von ES6+ Features (let/const, Arrow Functions, Modules)
- JavaScript-Frameworks/Libs identifizieren (React, Vue, Svelte, Angular, Alpine, etc.)

Iteration 5: Accessibility (WCAG 2.1 Level A)
- Alt-Texte bei Bildern prüfen
- Formular-Labels überprüfen
- Tastaturnavigation testen (Tab-Reihenfolge)
- Farbkontraste messen (Text zu Hintergrund, erste Stichprobe)

Iteration 6: Accessibility (WCAG 2.1 Level AA)
- ARIA-Attribute auf korrekte Verwendung prüfen
- Skip-Navigation-Links überprüfen
- Fokus-Indikatoren testen
- Vergrößerbarkeit auf 200% ohne Informationsverlust prüfen

Iteration 7: Performance – Basis-Ladezeiten
- Größe des initialen HTML-Dokuments messen
- Anzahl der HTTP-Requests zählen
- Time to First Byte (TTFB) und First Contentful Paint (FCP) grob prüfen
- Critical Rendering Path überblicken

Iteration 8: Performance – Bilder (moderne Formate)
- Bildformate überprüfen (WebP, AVIF, ggf. optimierte PNG/JPEG)
- Bildkomprimierung analysieren
- Responsive Images (srcset, sizes, picture) prüfen
- Native Lazy-Loading (loading="lazy") verwenden

Iteration 9: Performance – Fonts
- Webfont-Strategien analysieren (font-display, Preload)
- Anzahl der Schriftschnitte und Font-Familien zählen
- Subsetting/Variable Fonts prüfen
- FOIT/FOUT-Verhalten testen

Iteration 10: SEO – Meta-Informationen
- Meta-Description auf Vorhandensein und Länge prüfen
- Open Graph Tags analysieren
- Twitter Card Meta-Tags überprüfen
- Canonical-Tag untersuchen

Iteration 11: SEO – Strukturierte Daten
- Schema.org Markup identifizieren
- JSON-LD-Implementierung überprüfen
- Einsatz von strukturierten Daten für relevante Inhalte (z. B. Article, Product, FAQ)
- Potenzial für Rich Snippets bewerten

Iteration 12: SEO – Content-Optimierung
- Keyword-Fokus und -Dichte grob analysieren
- Content-Länge bewerten (Thin Content vermeiden)
- Überschriften-Optimierung prüfen
- Interne Verlinkungsstruktur untersuchen

Iteration 13: Mobile Responsiveness – Breakpoints (CSS3)
- Media Queries analysieren (mobile-first bevorzugt)
- Breakpoint-Strategie bewerten
- Touch-Target-Größen überprüfen (mindestens ca. 44x44 px)
- Horizontales Scrolling auf mobilen Geräten vermeiden

Iteration 14: Mobile Responsiveness – Touch-Interaktion
- Touch-Events vs. Click-Events überprüfen
- Swipe-Gesten testen (falls vorhanden)
- Pinch-to-Zoom Verhalten prüfen (kein unnötiges Blockieren)
- Tap-Feedback und „Tap-Delay“ in modernen Browsern bewerten

Iteration 15: Cross-Browser Kompatibilität (moderne Browser)
- Nutzung moderner, standardisierter Features prüfen (keine veralteten Browser-Hacks)
- Feature Detection (z. B. via @supports, JS-Feature-Checks) statt Browser Detection
- Einsatz von Autoprefixer im Build-Prozess sicherstellen
- Konsistentes Rendering in aktuellen Versionen von Chrome, Firefox, Safari, Edge testen

Iteration 16: HTML5-Validierung
- Markup mit Validator prüfen
- Fehlende schließende Tags identifizieren
- Ungültige Attributwerte finden
- Veraltete/obsolete HTML-Elemente eliminieren

Iteration 17: CSS3-Validierung
- CSS mit Validator oder Build-Tools prüfen
- Ungültige Eigenschaften/Syntax identifizieren
- Verwendung moderner CSS3-Features (ohne Polyfills für Legacy-Browser)
- Strikte Trennung von Layout-, Typographie- und Utility-Klassen bewerten

Iteration 18: JavaScript-Fehlerbehandlung
- Console-Errors und Warnings identifizieren und bewerten
- Fehler-Handling (try/catch, Promise .catch, Error Boundaries) prüfen
- Logging-Strategie analysieren (Monitoring-Integration)
- Graceful Degradation bei JS-Fehlern testen

Iteration 19: Sicherheit – XSS-Prävention
- Input-Validierung und Output-Encoding prüfen
- Verwendung einer Content Security Policy (CSP)
- Inline-JavaScript minimieren oder durch CSP absichern
- Umgang mit untrusted Data (z. B. von APIs, User-Input)

Iteration 20: Sicherheit – CSRF-Schutz
- CSRF-Tokens in Formularen prüfen (bei Sessions)
- SameSite-Attribute für Cookies bewerten
- API-Ansätze ohne Cookies (z. B. Token-basiert) auf CSRF-Risiko prüfen
- Referer/Origin-Checks (bei sensiblen Aktionen) analysieren

Iteration 21: Sicherheit – HTTPS & Verschlüsselung
- SSL/TLS-Zertifikat prüfen
- Mixed Content verhindern
- Sicherheitsrelevante Header (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) bewerten
- Sichere Cookie-Flags (Secure, HttpOnly) prüfen

Iteration 22: Datenschutz – DSGVO Compliance (technisch)
- Cookie-/Consent-Banner Implementierung prüfen (echtes Opt-in)
- Einbindung externer Tracker erst nach Consent
- Datenschutzerklärung verlinkt und leicht auffindbar
- Minimierung von Third-Party-Skripten

Iteration 23: Datenschutz – Cookies & Storage
- Verwendete Cookies (Essentials vs. Tracking) inventarisieren
- Nutzung von LocalStorage/SessionStorage bewerten
- Lebensdauer und Scope der gespeicherten Daten überprüfen
- Kein Speichern sensibler Daten im Client-Storage

Iteration 24: Formulare – Struktur & Semantik
- Label-Input-Zuordnungen (for/id) überprüfen
- Fieldset/Legend für logische Gruppen analysieren
- HTML5-Input-Typen korrekt nutzen (email, tel, url, number, date, etc.)
- Required-Attribute, aria-required und Placeholder sinnvoll einsetzen

Iteration 25: Formulare – Validierung (HTML5 + JS)
- Native HTML5-Validierung (pattern, min, max, step) prüfen
- Custom Validation Messages testen
- Clientseitige und serverseitige Validierung kombinieren
- Fehlermeldungen klar, präzise und zugänglich darstellen

Iteration 26: Formulare – User Experience
- Placeholder ersetzt kein Label
- Autocomplete-Attribute korrekt gesetzt
- Fokus-Management bei Fehlern (Fokus auf erstes Fehlerfeld)
- Inline-Fehleranzeige vs. Fehlerübersicht ergonomisch gestalten

Iteration 27: Navigation – Struktur
- Hauptnavigation klar identifizierbar
- Breadcrumbs (falls sinnvoll) prüfen
- Footer-Navigation (Legal, Kontakt, weitere Links) untersuchen
- Navigation für verschiedene Viewports (Desktop, Tablet, Mobile) konsistent

Iteration 28: Navigation – Usability
- Aktiver Navigationszustand hervorgehoben
- Navigation vollständig per Tastatur bedienbar
- Sichtbare Fokus-Indikatoren
- Sinnvolle Tab-Reihenfolge entlang der Informationshierarchie

Iteration 29: Links – Best Practices
- Leere href-Attribute vermeiden
- Vermeidung von „javascript:void(0)“ als Links
- Externe Links bei Bedarf in neuem Tab (mit rel="noopener noreferrer")
- Broken Links identifizieren (404, 410)

Iteration 30: Links – Accessibility
- Aussagekräftige Link-Texte (keine „hier klicken“)
- Link-Zweck aus Text oder Kontext sichtbar
- Links optisch erkennbar (Farbe, Underline)
- Besuchte Links unterscheidbar (UX-Entscheidung)

Iteration 31: Bilder – Technische Aspekte
- Dateinamen-Konventionen (sprechende Namen) prüfen
- HTML-Dimensionen vs. tatsächliche Bildgröße vergleichen
- Retina/High-DPI-Unterstützung (2x/3x, v. a. bei Icons, Logos)
- Einsatz von SVG, wo sinnvoll (Logos, Icons, einfache Grafiken)

Iteration 32: Bilder – Content-Qualität
- Bildbeschreibungen auf Aussagekraft prüfen
- Dekorative vs. informative Bilder trennen (role="presentation", aria-hidden)
- Urheberrechts- oder Quellenangaben (wo nötig)
- Bild-zu-Text-Verhältnis und Inhaltstiefe bewerten

Iteration 33: Videos & Multimedia
- Videoformate für moderne Browser (MP4/H.264, WebM) prüfen
- Untertitel/Captions bereitstellen
- Transkripte für wichtige Inhalte verfügbar
- Autoplay-Verhalten (insbesondere mit Ton) kritisch prüfen

Iteration 34: Audio-Inhalte
- Audioformate (z. B. MP3, Ogg) unterstützen
- Transkripte für Audio-Dateien
- Steuerungselemente des Players zugänglich
- Lautstärke-/Mute-Kontrolle vorhanden

Iteration 35: Tabellen – Semantik
- Tabellen ausschließlich für tabellarische Daten verwenden
- Caption-Element verwenden (wo sinnvoll)
- thead, tbody, tfoot korrekt strukturieren
- th vs. td sauber getrennt

Iteration 36: Tabellen – Accessibility
- scope-Attribute oder headers/id für Header-Zellen
- aria-describedby für komplexe Tabellen
- Responsive Strategien (Scroll, Stack, Collapse)
- Tastatursteuerung für sortierbare Tabellen

Iteration 37: Typographie – Lesbarkeit
- Basis-Schriftgröße ausreichend (idR >= 16px)
- Zeilenhöhe (line-height) im optimalen Bereich
- Zeilenlänge angemessen (ca. 45–75 Zeichen)
- Lesbare Webfonts / Systemfonts nutzen

Iteration 38: Typographie – Hierarchie
- Klare visuelle Hierarchie (H1, H2, H3 etc.)
- Konsistente Typographie-Skala
- Kontrast zwischen Überschriften und Fließtext
- Weißraum zur Strukturierung bewusst einsetzen

Iteration 39: Farben – Accessibility
- Kontrastverhältnisse (mind. 4.5:1 für normalen Text)
- Information nicht ausschließlich über Farbe kommunizieren
- Farbschemata gegen gängige Farbfehlsichtigkeiten testen
- Optional: Dark-/Light-Mode prüfen, falls vorhanden

Iteration 40: Farben – Konsistenz
- Definierte, konsistente Farbpalette
- Einhaltung von Brand-Guidelines
- Logische Farbcodierung (Status, Warnungen, Erfolge)
- Hover-/Focus-States klar unterscheidbar

Iteration 41: Layout – Grid-Systeme (CSS3)
- Nutzung von CSS Grid für komplexe Layouts
- Nutzung von Flexbox für einachsig ausgerichtete Layouts
- Legacy-Layouts (Floats) nur bei echter Notwendigkeit
- Grid-Template-Areas, Auto-Placement und Responsive Breakpoints prüfen

Iteration 42: Layout – Spacing
- Konsistentes Spacing-System (z. B. 4/8px-Raster)
- Sinnvoller Einsatz von margin vs. padding
- Visuelle Gruppierung durch Weißraum
- Vertikaler Rhythmus (Abstände zwischen Sektionen/Überschriften)

Iteration 43: Interaktive Elemente – Buttons
- Buttons vs. Links semantisch korrekt (button vs. a)
- Disabled-States vorhanden und verständlich
- Loading-States (Spinner, Disabled + Text) bei längeren Aktionen
- Hover-/Focus-/Active-States konsistent

Iteration 44: Interaktive Elemente – Modals/Dialogs
- Focus-Trap im geöffneten Modal
- ESC-Taste schließt Modal
- Hintergrund bei offenem Modal nicht scrollbar
- ARIA-Rollen und aria-modal korrekt gesetzt

Iteration 45: Interaktive Elemente – Accordions
- Tastatursteuerung (Pfeiltasten, Tab)
- aria-expanded, aria-controls korrekt verwenden
- Nur sinnvolle Anzahl gleichzeitig geöffneter Panels
- Klare visuelle Hinweise (Pfeile, Plus/Minus, etc.)

Iteration 46: Interaktive Elemente – Tooltips
- Inhalt nicht kritisch für Verständnis (nur unterstützend)
- Für Tastatur- und Screen-Reader-Nutzer erreichbar
- Auf Touch-Geräten verwendbar (Tap statt Hover)
- aria-describedby oder aria-label sinnvoll nutzen

Iteration 47: Animationen – Performance
- Bevorzugt CSS-Animationen/Transitions (transform, opacity)
- Animationsperformance mit DevTools prüfen
- Keine aufwendigen Layout-thrashing-Animationen (width, height, top, left)
- RequestAnimationFrame für JS-Animationen

Iteration 48: Animationen – Accessibility
- prefers-reduced-motion Media Query respektieren
- Möglichkeit, Animationen zu reduzieren/deaktivieren
- Keine schnell flackernden Inhalte (Epilepsierisiko)
- Dauer und Frequenz von Animationen angemessen

Iteration 49: Icons – Implementation
- SVG-Icons bevorzugt (inline oder Sprite)
- Konsistente Icon-Größen und Strichstärken
- Semantische Bedeutung mittels ARIA (wo nötig)
- Performance des Icon-Systems prüfen

Iteration 50: Icons – Accessibility
- Dekorative Icons mit aria-hidden="true"
- Bedeutungstragende Icons mit Text oder aria-label ergänzen
- Ausreichend große Click-/Touchflächen
- Icons in High-Contrast-Mode sichtbar

Iteration 51: Progressive Enhancement
- Kerninhalte und Basis-Funktionen ohne JS verfügbar (wo sinnvoll)
- CSS-Feature-Queries (@supports) nutzen
- Module/Features nur laden, wenn unterstützt
- Fallback-Strategien für nicht verfügbare Features

Iteration 52: Print-Stylesheets
- @media print-Styles vorhanden
- Navigation, Ads, Overlays im Druck ausgeblendet
- Sinnvolle Seitenumbrüche (page-break-* oder CSS3-Äquivalente)
- Links bei Bedarf ausgeschrieben (URL im Print)

Iteration 53: Suchfunktion
- Suchfeld gut auffindbar
- Label oder aria-label vorhanden
- Ergebnisdarstellung verständlich und filterbar
- Fehlertoleranz und Relevanz der Ergebnisse bewerten

Iteration 54: Error Pages (404, 500)
- Eigene, gestaltete Fehlerseiten
- Hilfreiche Hinweise, Links zur Startseite/Suche
- Konsistentes Branding
- Technische Fehlerseiten im Live-Betrieb vermeiden

Iteration 55: Internationalisierung (i18n)
- Lang-Attribut im html-Tag korrekt
- Zeichenkodierung UTF-8
- Lokalisierte Datums-/Zahlendarstellungen
- Sprachwechsel (falls mehrsprachig) konsistent und nachvollziehbar

Iteration 56: URL-Struktur
- Sprechende, SEO-freundliche URLs
- Logische Hierarchie und Struktur
- Keine Session-IDs oder überflüssige Parameter
- Trailing Slashes konsistent

Iteration 57: Redirects
- Korrekte Verwendung von 301/302
- Redirect-Ketten und -Schleifen vermeiden
- WWW vs. Non-WWW, HTTP zu HTTPS sauber geregelt
- Canonical-URLs konsistent

Iteration 58: Code-Kommentare
- Sinnvolle Kommentare in HTML/CSS/JS
- Keine sensiblen Informationen in Kommentaren
- TODO/FIXME-Kommentare dokumentiert oder abgebaut
- Lesbarkeit und Wartbarkeit fördern

Iteration 59: Code-Formatierung
- Konsistente Einrückung und Formatierung
- Sinnvoll eingesetzte Leerzeilen
- Einheitliche Attributreihenfolge (nach Projektkonvention)
- Zeilenlängen begrenzen (Lesbarkeit)

Iteration 60: Dependencies & Libraries
- Liste aller Frontend-Abhängigkeiten (package.json, Lockfiles)
- Aktualität der Versionen prüfen
- Security-Scans (z. B. npm audit)
- Unbenutzte Dependencies entfernen

Iteration 61: Third-Party Scripts
- Alle externen Skripte identifizieren
- Subresource Integrity (SRI) für kritische Ressourcen
- Datenschutz und Security-Risiken bewerten
- Performance-Auswirkungen messen

Iteration 62: Analytics & Tracking
- Implementierte Analytics-Lösungen (GA4, Matomo, etc.)
- Event- und Conversion-Tracking prüfen
- Privacy- und Consent-konforme Implementierung
- Opt-out-Mechanismen bereitstellen

Iteration 63: Social Media Integration
- Social Sharing Buttons Funktionsprüfung
- Vollständige Open-Graph- und Twitter-Card-Daten
- DSGVO-konforme Embeds (z. B. 2-Klick-Lösungen)
- Performance-Impact der Social Widgets

Iteration 64: Content Management
- Dynamische vs. statische Inhalte erkennen
- Aktualisierungsprozesse (Redaktion, Deployment)
- „Zuletzt aktualisiert“-Information bei relevanten Inhalten
- Konsistenz und Versionierung von Content

Iteration 65: Microinteractions
- Feedback bei Benutzeraktionen (Hover, Klick, Formularabsendung)
- Ladeanzeigen und Progress-Indikatoren
- Bestätigungen (Success-Meldungen)
- Fehlermeldungen mit klarer Handlungsanweisung

Iteration 66: Empty States
- Sinnvolle Gestaltung leerer Zustände (z. B. keine Ergebnisse)
- Hilfreiche Handlungsempfehlungen integrieren
- Call-to-Actions einbinden
- Visuelle Klarheit trotz fehlender Daten

Iteration 67: Onboarding & Tutorials
- Spezielle First-Time-User-Flows prüfen
- Tooltips, Touren oder Overlays bewerten
- Skip/Abbrechen jederzeit möglich
- Fortschrittsanzeige in mehrstufigen Prozessen

Iteration 68: Feedback-Mechanismen
- Sichtbare Kontakt-/Feedback-Möglichkeiten
- Bug-Report-Kanal (z. B. Formular, Mail)
- Optionales Rating/User-Satisfaction-Feedback
- Reaktionszeiten und Erwartungen kommunizieren

Iteration 69: Footer-Content
- Aktueller Copyright-Hinweis
- Links zu Impressum, Datenschutz, AGB (falls relevant)
- Optional: Sitemap, Kontakt, Social-Links
- Saubere Struktur und gute Lesbarkeit

Iteration 70: Header-Content
- Logo verlinkt auf Startseite
- Skip-to-Content-Link vorhanden
- Language-Switcher (falls mehrsprachig)
- Login/Account-Bereich (falls relevant) klar platziert

Iteration 71: Call-to-Actions
- Primäre vs. sekundäre CTAs klar unterscheidbar
- CTA-Texte handlungsorientiert und konkret
- Positionierung im Layout (Above-the-fold, nach Content-Blocks)
- Konsistente Gestaltung über die Seite hinweg

Iteration 72: Content-Strategie
- Above-the-fold-Bereich mit klarem Value Proposition
- Lesemuster (F-Pattern, Z-Pattern) berücksichtigen
- Content-Hierarchie logisch und scannbar
- Einsatz von Listen, Zwischenüberschriften, Hervorhebungen

Iteration 73: Performance Monitoring (modern)
- Core Web Vitals (LCP, FID/INP, CLS) prüfen
- RUM (Real User Monitoring) einsetzen
- Error- und Performance-Monitoring (z. B. Sentry)
- Dashboards oder Reports vorhanden

Iteration 74: Caching-Strategie
- Cache-Control-Header analysieren
- ETag/Last-Modified sinnvoll nutzen
- Service Worker Caching (bei PWA) bewerten
- Stale-while-revalidate und andere moderne Patterns

Iteration 75: Komprimierung
- Gzip oder Brotli für Text-Ressourcen aktiviert
- Minifizierung von HTML, CSS, JS
- Bildkomprimierung für alle Bildformate
- SVG-Optimierung (z. B. via SVGO)

Iteration 76: Resource Hints
- DNS-Prefetch für wichtige externe Domains
- Preconnect zu kritischen Origins (Fonts, APIs)
- Prefetch/Prerender für Folge-Seiten
- Preload für kritische Assets (Fonts, Above-the-fold CSS)

Iteration 77: Code Splitting (JS)
- Aufteilung großer Bundles in sinnvolle Chunks
- Lazy Loading für nichtkritische Bereiche/Views
- Dynamic Imports nutzen
- Tree Shaking in Build-Tool aktiviert

Iteration 78: Critical CSS
- Above-the-fold-CSS inline oder priorisiert
- Nichtkritisches CSS asynchron laden
- Reduktion von Render-Blocking-CSS
- Saubere Trennung von globalen und komponentenspezifischen Styles

Iteration 79: Backend-/API-Interaktionen (falls vorhanden)
- Round-Trips und Latenzen bewerten
- Caching von API-Responses
- Umgang mit Timeouts und Fehlern
- Minimierung von überflüssigen API-Calls

Iteration 80: API-Integration (REST/GraphQL)
- Konsistente API-Konventionen (Naming, Versionierung)
- Rate Limiting und Fehlermeldungen behandeln
- Sicherheit (Auth, TLS, keine sensiblen Daten im Client)
- Umgang mit Offline-/Reconnecting-Szenarien (bei SPAs)

Iteration 81: Authentication & Authorization
- Sicherer Login-Mechanismus (Password Hashing, HTTPS)
- Passwort-Policies angemessen (nicht übertrieben restriktiv)
- Session-/Token-Handling (JWT, Cookies) sicher
- Zugriffsbeschränkungen (Role-Based Access Control) prüfen

Iteration 82: User Account Management
- Account-Erstellung verständlich und friktionsarm
- Passwort-Reset/Recovery-Prozess sicher und UX-freundlich
- DSGVO-konforme Account-Löschung (Right to be forgotten)
- Profilbearbeitung intuitiv und konsistent

Iteration 83: E-Commerce Spezifisch (falls zutreffend)
- Warenkorb-Persistenz (LocalStorage/Server)
- Klarer, friction-loser Checkout-Prozess
- Payment-Integration sicher (PSP, 3D Secure)
- Transparenz bei Preisen, Versand, Steuern

Iteration 84: Content-Freshness
- Zeitkritische Inhalte mit Datum/Update-Hinweisen versehen
- Veraltete Inhalte erkennen und kennzeichnen/entfernen
- Broken Content (fehlende Bilder/Assets) prüfen
- Aktualität von Screenshots, Beispielen, Produktinfos

Iteration 85: Legal Compliance (DE/EU)
- Impressumspflicht erfüllt
- Datenschutzerklärung vollständig und aktuell
- AGB, Widerrufsbelehrung, Versand-/Zahlungsinfos (bei Shops)
- Cookie- und Tracking-Implementierung rechtlich konform

Iteration 86: Geolocation & Maps
- Kartenintegration (z. B. Leaflet, Mapbox, Google Maps) DSGVO-konform
- Geolocation-Permissions transparent und sparsam einsetzen
- Standortdaten nur bei echter Notwendigkeit
- Fallback bei deaktivierten Standortdiensten

Iteration 87: Offline-Funktionalität (falls PWA)
- Service Worker registriert und fehlerfrei
- Sinnvolle Offline-Seite/Offline-Handling
- App-Shell-Ansatz (schnelle Ladezeiten)
- Background Sync ggf. sinnvoll eingesetzt

Iteration 88: Progressive Web App (PWA)
- Web App Manifest vorhanden und valide
- Icons in verschiedenen Auflösungen vorhanden
- theme-color und Hintergrundfarbe gesetzt
- „Installierbarkeit“ (Add to Homescreen) gegeben

Iteration 89: Notifications (falls genutzt)
- Permissions klar und zum richtigen Zeitpunkt anfragen
- Häufigkeit und Relevanz von Benachrichtigungen prüfen
- Einfache Opt-out-/Manage-Möglichkeiten
- Inhalt von Notifications informativ und nicht spammy

Iteration 90: Monitoring & Logging
- Zentrales Error-Logging (Frontend)
- Logging sensitiver Daten vermeiden
- Performance-Logs und User-Actions (anonymisiert) bewerten
- Alerts/Alarme bei kritischen Fehlern

Iteration 91: A/B- und Experiment-Setup
- Experimente klar konzipiert (Hypothesen)
- Technische Implementation (Feature Flags, Experiment-Framework)
- Statistische Signifikanz berücksichtigt
- DSGVO-Konformität bei Testdaten sichergestellt

Iteration 92: Dokumentation
- README/Onboarding-Doku für Entwickler
- Build-/Deployment-Anleitungen
- API-Dokumentation (falls relevant)
- Changelog oder Release Notes gepflegt

Iteration 93: Deployment-Prozess (DevOps)
- CI/CD-Pipeline vorhanden (Build, Test, Deploy)
- Automatisierte Tests (Unit, Integration, E2E) integriert
- Staging-/Preview-Umgebungen nutzbar
- Rollback-Strategien definiert

Iteration 94: Backup & Recovery (Systemebene)
- Regelmäßige Backups der relevanten Systeme
- Recovery-Prozesse getestet
- Dokumentierter Disaster-Recovery-Plan
- Data Retention Policies definiert

Iteration 95: Skalierbarkeit
- Load- und Stress-Tests durchgeführt
- Horizontale/vertikale Skalierungskonzepte
- CDN-Einsatz für statische Assets
- Datenbank-/API-Skalierung geplant

Iteration 96: Maintainability (Wartbarkeit)
- Code-Komplexität und Modularität bewerten
- Wiederverwendbare Komponenten/Patterns
- Technische Schulden identifizieren
- Code-Review-Prozess etabliert

Iteration 97: Browser DevTools Audit
- Lighthouse-Audits (Performance, PWA, Best Practices, SEO, Accessibility)
- Performance-Tab (Flamechart, Bottlenecks)
- Network-Tab (Waterfall, Caching, Payload)
- Memory-Leaks oder übermäßige Nutzung erkennen

Iteration 98: Usability Testing
- Qualitatives Feedback von Nutzern (Interviews, Beobachtung)
- Quantitative Kennzahlen (Task Completion, Time on Task)
- Pain Points und Abbruchstellen identifizieren
- Usability-Findings in Backlog/Board überführen

Iteration 99: Competitive Analysis
- Vergleich mit 2–5 relevanten Wettbewerbern
- Benchmarking bei Performance, UX, Features, Content
- Branchenspezifische Best Practices identifizieren
- Stärken/Schwächen der eigenen Site herausarbeiten

Iteration 100: Holistische Bewertung & Reporting
- Alle Findings konsolidieren (nach Themen und Prioritäten)
- Priorisierung (Critical, High, Medium, Low)
- Quick Wins und langfristige Maßnahmen definieren
- Roadmap erstellen (Sprints, Milestones, Verantwortlichkeiten)
- Executive Summary mit Kernerkenntnissen und KPIs

------------------------------------------------------------
Anwendungshinweise

Durchführung
1. Pro Iteration fokussiert nur auf den definierten Aspekt prüfen.
2. Ergebnisse strukturiert festhalten (Pass / Fail / Verbesserung nötig).
3. Geeignete Tools einsetzen (DevTools, Lighthouse, Accessibility-Scanner, Performance-Tools).
4. Auffälligkeiten mit Screenshots, Metriken, URLs dokumentieren.
5. Alle Findings in ein zentrales Issue-Tracking- oder Kanban-Board überführen.

Bewertungsskala
- CRITICAL: Sofort beheben (Sicherheit, Legal, kritische Bugs)
- HIGH: Zeitnah beheben (Performance, zentrale UX/Conversion-Hemmer)
- MEDIUM: Kurz-/Mittelfristig (Best Practices, Qualitätsverbesserungen)
- LOW: Nice-to-have (Feinschliff, kosmetische Optimierungen)

Agiler Kontext
- Findings nach Aufwand/Impact priorisieren und in Sprints planen
- Definition of Done um relevante Qualitätskriterien aus diesem Plan erweitern
- Wiederholte, kleinere Audits nach Releases (z. B. verkürzte Version dieses Plans)
- Kontinuierliche Verbesserung: wichtige Metriken (Core Web Vitals, Conversions, Errors) regelmäßig tracken