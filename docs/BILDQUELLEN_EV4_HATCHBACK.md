# Bildquellen KIA EV4 Earth Hatchback (Schrägheck)

Diese Projektseite bezieht sich **ausschließlich** auf die **Earth 81 kWh Hatchback-Variante (5-Türer Schrägheck)** des KIA EV4. Die Galerie in `index.html` (#galerie) zeigt nur Bilder des Earth Hatchback – ansprechend, idealerweise **4K oder besser** (3840×2160 px).

**Außenansichten:** Nur Quellen nutzen, die explizit den **EV4 Hatchback** zeigen (z. B. KIA UK EV4-HB_*, Discover Editorial_Side, Beauty_34_Rear).

## Warum Hatchback?

- **EV4 Hatchback (Schrägheck):** 5 Türen, höhere Dachlinie, klassische Schrägheck-Kofferraumklappe, in Europa (z. B. UK/DE) angeboten, ca. 435 l Kofferraum.

[The all-electric Kia EV4](https://www.kia.com/uk/new-cars/ev4/) (KIA UK).

## Hatchback-Bilder von KIA UK (CDN)

Die folgenden URLs zeigen **explizit den EV4 Hatchback** (Dateinamen mit `EV4-HB_` bzw. Hatchback-Beschreibungen auf kia.com/uk). Nur diese oder vergleichbare Hatchback-Quellen verwenden. Bilder herunterladen und in `img/ev4/` ablegen; für 4K ggf. von KIA Press in höherer Auflösung besorgen und ersetzen.

| Verwendung (Vorschlag) | URL (KIA UK CDN) |
|------------------------|-------------------|
| **Außen – Schrägansicht (3/4, weißer Hintergrund)** | `https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/vehicles/ev4/EV4-HB_Fusion-White(1980x1114).jpg` |
| Außen (Farbe Blue Flame) | `https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/vehicles/ev4/EV4-HB_Blue-Flame(1980x1114).jpg` |
| Außen (Farbe Midnight Black) | `https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/vehicles/ev4/EV4-HB_Midnight-Black(1980x1114).jpg` |

Weitere Hatchback-Motive (Discover-Bereich, globaler KIA-Asset-Pfad):

| Beschreibung (KIA UK) | Verwendung im Projekt | URL |
|------------------------|-----------------------|-----|
| **Modern, clean proportions** (Stirnansicht, vertikale Scheinwerfer) | **ev4-front.jpg** – echte Frontansicht | `https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-gtl-my26-vertical-headlamps.jpg` |
| EV4-HB_Fusion-White (3/4, weiß) | **ev4-angle.jpg** – Schrägansicht | siehe UK-Tabelle oben |
| Unique rear hatchback design | ev4-rear.jpg | `https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA-Beauty_34-Rear_MaleTalent_rgb-1920x1080.jpg` |
| Sleek and dynamic in profile (Hatchback) | ev4-side.jpg | `https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA-Editorial_Side_rgb-1920x1080.jpg` |
| Interior (Designed for more life) | ev4-seats.jpg | `https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-bl-my26-NA_Editorial_FrontSeats_rgb-1920x1080.jpg` |
| Cockpit / Display | ev4-dashboard.jpg | `https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA_Detail_InteriorDisplay_MaleTalent_rgb-1920x1080.jpg` |

### Innenraum – Lenkrad, Konsole (KIA Ireland / global Discover)

Diese URLs stammen von **kia.com/ie** (Discover EV4) und zeigen den **EV4 (Hatchback)**-Innenraum. **Rückbank** ist aus der Galerie entfernt (kein Bild vorhanden).

| Galerie-Datei (Projekt) | Beschreibung | URL (KIA CDN) |
|-------------------------|--------------|---------------|
| `interior/ev4-steering.jpg` | Lenkrad, Instrumente, Fahrerbereich | `https://www.kia.com/content/dam/kwcms/kme/ie/en/assets/vehicles/EV4/1111RHD_EV4_GTL_MY26_NA_Beauty_FullDashboard_rgb.jpg` |
| `interior/ev4-console.jpg` | Mittelkonsole, Wireless Charger, Ablage | `https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-gtl-my26-wireless-charger-1920x1080.jpg` |

### Kofferaum (nur Hatchback Earth – 435 l)

**Galerie:** Ein Bild – **Kofferaum offen** – zeigt das Ladevolumen (435 l) des Hatchbacks. Datei: `img/ev4/cargo/boot.png` (manuell ablegen).

| Galerie-Datei (Projekt) | Beschreibung |
|-------------------------|--------------|
| `cargo/boot.png` | Kofferaum offen (435 l Ladevolumen, Hatchback) |

**Hinweis:** Der **Hatchback** hat 435 l Kofferraum (5-Türer). Bild manuell in `img/ev4/cargo/` ablegen.

## Hero-Hintergrund (scrollbares High-Res-Bild, Wix-Style)

Das **Hero-Hintergrundbild** (Full-Bleed, 100vh) nutzt **`img/ev4/exterior/ev4-side.jpg`** (KIA Discover Editorial_Side, **1920×1080**, volle Auflösung vom Skript). Die UK-Front-URL liefert oft nur eine kleine Version; die Discover-URLs liefern zuverlässig volle Auflösung. In `css/main.css` und `scss/_hero.scss` ist `url('../img/ev4/exterior/ev4-side.jpg')` gesetzt; in `index.html` wird das Bild per `<link rel="preload" href="img/ev4/exterior/ev4-side.jpg" as="image">` vorab geladen. Das Hero-Bild scrollt mit der Seite (Wix-Style, kein Parallax/Fixed). Responsive Ausrichtung: Desktop `center center`, ≤768px `center 35%`, ≤480px `center 30%`.

## High-Res-Vorschaubilder (scharf statt verschwommen)

Die Galerie und das Hero-Hintergrundbild sind auf **echte High-Res-Quellen** ausgelegt (Front: 1980×1114 px, übrige: 1920×1080 px). Wenn die lokalen Dateien niedrig aufgelöst sind, wirken die Vorschaubilder verschwommen. **Lösung:** Skript einmal ausführen (siehe unten) – danach werden die Bilder von KIA UK/global CDN in voller Auflösung geladen und lokal gespeichert.

## Ersetzen der aktuellen Galerie-Bilder

**Option A – Skript (empfohlen):** Im Projektroot ausführen:

```powershell
.\scripts\download_ev4_hatchback_images.ps1
```

Das Skript lädt die Hatchback-Bilder von KIA UK/global CDN in `img/ev4/exterior/`, `img/ev4/interior/`, `img/ev4/details/`. Kofferaum: `img/ev4/cargo/boot.png` manuell ablegen.

**Option B – manuell:** Bilder von den obigen URLs herunterladen (Browser oder `curl` / PowerShell), in die genannten Ordner speichern und auf die in `index.html` und `data/gallery.json` referenzierten Dateinamen umbenennen.

Nutzungsbedingungen von KIA (redaktionell/Information) beachten; keine Hotlinks, nur lokale Kopien.

## Zuordnung Datei → Bildinhalt (verbindlich)

**Jede Bilddatei muss genau den hier beschriebenen Inhalt zeigen.** Die Beschriftung in `index.html` (figcaption, alt, data-title) und in `data/gallery.json` (caption, alt) ist darauf abgestimmt. Bei falscher Zuordnung wirkt die Beschriftung sofort fehlerhaft (z. B. „Innenraum – Vordersitze“ bei einem Außenbild).

| Datei (Projekt) | KIA-Quelldatei (Skript) | Beschriftung (Außen/Innenraum + Inhalt) |
|-----------------|--------------------------|----------------------------------------|
| `img/ev4/exterior/ev4-front.jpg` | vertical-headlamps (Modern, clean proportions) | **Außen** – Frontansicht (Stirnansicht, vertikale Scheinwerfer) |
| `img/ev4/exterior/ev4-angle.jpg` | EV4-HB_Fusion-White | **Außen** – Schrägansicht (3/4, weißer Hintergrund) |
| `img/ev4/exterior/ev4-side.jpg` | Editorial_Side (Profil) | **Außen** – Seitenansicht (Profil) und **Hero-Hintergrund** (1920×1080) |
| `img/ev4/exterior/ev4-rear.jpg` | Beauty_34_Rear | **Außen** – Heckansicht (Schrägheck-Klappe) |
| `img/ev4/interior/ev4-dashboard.jpg` | Detail_InteriorDisplay | **Innenraum** – Cockpit und Displays (Instrumententafel) |
| `img/ev4/interior/ev4-seats.jpg` | Editorial_FrontSeats | **Innenraum** – Vordersitze |
| `img/ev4/details/ev4-detail.jpg` | NA-Detail_rgb (Räder) | **Außen** – Detail Leichtmetallräder |
| `img/ev4/cargo/boot.png` | manuell | **Kofferaum** – Kofferaum offen (435 l Ladevolumen) |

**Hinweis:** Die Galerie zeigt explizit den **KIA EV4 Earth 81 kWh Hatchback**. Trimneutrale Discover-Assets (my26) und UK EV4-HB_Fusion-White. Bilder mit „GT LINE“ auf dem Nummernschild vermeiden.

Bei manuellem Austausch von Bildern: dieselbe Datei nur mit dem passenden Inhalt ersetzen bzw. Beschriftung in HTML und `gallery.json` an den tatsächlichen Inhalt anpassen.

## Front vs. Schrägansicht (ev4-front.jpg / ev4-angle.jpg)

- **ev4-front.jpg** = echte **Stirnansicht** (Frontansicht): Motiv „Modern, clean proportions“ (vertical-headlamps) – Front mit vertikalen Scheinwerfern, keine 3/4-Ansicht.
- **ev4-angle.jpg** = **Schrägansicht** (3/4): EV4-HB_Fusion-White – Schrägansicht mit weißem Hintergrund. Nicht dasselbe Bild wie Front.
Das Skript lädt beide getrennt; nach dem Lauf sind Front und Schrägansicht unterschiedliche Motive.

## Manuelle Beschaffung (Kofferaum)

**Kofferaum:** `img/ev4/cargo/boot.png` – ein Bild „Kofferaum offen“ mit 435 l Ladevolumen. Manuell ablegen. **Rückbank:** Optional; bei Bedarf in `img/ev4/interior/ev4-rear-seats.jpg` ablegen.

## Google Bilder & alternative 4K-Quellen

**Warum keine automatische Beschaffung von Google Bilder:** Google Bilder ([google.com/imghp](https://www.google.com/imghp?hl=de)) ist eine **Suchmaschine** – sie hostet keine Bilder, sondern verweist auf Drittanbieter. Ein automatischer Download „von Google“ würde technisch von fremden Seiten scrapen und kann **Urheberrecht** sowie **Nutzungsbedingungen** der Quellen verletzen. Dieses Projekt nutzt bewusst **nur offizielle KIA-Quellen**, um Rechte und einheitliche Hatchback-Darstellung zu wahren.

**So nutzen Sie Google Bilder sinnvoll und rechtssicher:**
1. **Suche einschränken:** Bei Google Bilder → **Werkzeuge** → **Nutzungsrechte** z. B. „Creative Commons“ oder „Lizenzierte Nutzung“ wählen, oder gezielt nach **Quelle** filtern.
2. **Offizielle Quellen bevorzugen:** Suchergebnisse von **kia.com**, **kiamedia.com**, **press.kia.com** sind für redaktionelle/Informationszwecke in der Regel nutzbar; vor Verwendung ggf. KIA-Nutzungsbedingungen prüfen.
3. **Download dort, wo das Bild liegt:** Das Bild wird immer auf der **Quell-Webseite** (z. B. KIA Media Gallery) heruntergeladen – nicht von Google. KIA Media liefert über [kiamedia.com/us/en/models/ev4/2026/gallery](https://www.kiamedia.com/us/en/models/ev4/2026/gallery) **Original**- und **Print**-Auflösungen (inkl. hoher Auflösung/4K-nahe Formate).
4. **Keine beliebigen Drittanbieter-Bilder** ohne geklärte Nutzungsrechte in die Galerie übernehmen (z. B. private Blogs, Stock-Seiten ohne Lizenz).

**Beste 4K-Quellen für optional spätere Motive (Rückbank, Kofferaum):** KIA Media Gallery (Filter Interior), **Original** oder **Print**. Diese Slots sind aktuell nicht in der Galerie.

**Kofferaum:** `boot.png` manuell ablegen. Für weitere Motive (z. B. Rückbank) bleibt die manuelle Beschaffung über KIA Media der vorgesehene Weg.

## Kurzreferenz

- **KIA UK EV4:** https://www.kia.com/uk/new-cars/ev4/ – nur **Hatchback**-Motive für dieses Projekt.
- **KIA Media EV4 Gallery:** https://www.kiamedia.com/us/en/models/ev4/2026/gallery – nur eindeutig Hatchback (Schrägheck) verwenden.
- **Projekt-Galerie:** Nur **Hatchback**, ansprechend, **4K oder besser**; Beschriftungen **Außen (Hatchback)** bzw. Innenraum + konkreter Inhalt.
