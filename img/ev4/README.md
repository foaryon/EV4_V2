# Galerie-Bilder KIA EV4 Earth – nur Hatchback (Schrägheck)

**Alle Bilder in dieser Galerie müssen den KIA EV4 Earth 81 kWh Hatchback (5-Türer Schrägheck) zeigen.** Anforderung: **ansprechend**, Auflösung **4K oder besser** (mind. 3840×2160 px).

## Nur Earth Hatchback

- **EV4 Earth Hatchback (Schrägheck):** 5 Türen, 81 kWh, charakteristische Dachlinie, Schrägheck-Klappe, 435 l Kofferraum.

Quellen für **ausschließlich Hatchback**-Motive: **KIA UK** und die in `docs/BILDQUELLEN_EV4_HATCHBACK.md` genannten URLs. Das Skript `scripts/download_ev4_hatchback_images.ps1` lädt nur Hatchback-Bilder.

## Auflösung: 4K oder höher

**Alle Bilder (Galerie, Hero-Hintergrund, Lightbox): mindestens 4K (3840×2160 px), ansprechende Qualität.**

- **Zielauflösung:** **3840×2160 px (4K UHD)** oder höher (5K/8K).
- **Seitenverhältnis:** idealerweise **16:9**.
- **Hero-Hintergrund** (`exterior/ev4-side.jpg`): 4K für scharfe Darstellung auf allen Displays.
- **Lightbox:** zeigt die Vollauflösung; 4K-Dateien in voller Qualität.
- **Formate:** JPG (Q90–95) oder WebP/AVIF; Dateinamen wie in den Tabellen beibehalten.

**Fehlende Bilder:** Nicht vorhandene Dateien werden durch `placeholder.svg` ersetzt. Echte Hatchback-Bilder unter den erwarteten Dateinamen ablegen – dann erscheinen sie automatisch.

## Wo Sie ansprechende Hatchback-Bilder herbekommen

- **KIA UK / Hatchback-CDNs (empfohlen):**  
  Siehe **`docs/BILDQUELLEN_EV4_HATCHBACK.md`** – dort nur Hatchback-URLs (EV4-HB_, Discover Editorial_Side, Beauty_34_Rear usw.). Skript: `.\scripts\download_ev4_hatchback_images.ps1`.

- **KIA Press / KIA Media:**  
  [KIA EV4 Gallery](https://www.kiamedia.com/us/en/models/ev4/2026) – nur Motive verwenden, die eindeutig das **Schrägheck** zeigen (z. B. höhere Heckklappe, 5-Türer).

- **Eigene Fotos:**  
  Nur vom **EV4 Hatchback** (Schrägheck); Dateinamen wie in den Tabellen.

## Dateien ersetzen

### Außen (jeweils 4K: 3840×2160 oder höher)
| Datei | Verwendung in der Galerie |
|-------|---------------------------|
| `exterior/ev4-front.jpg` | Außen: Front |
| `exterior/ev4-rear.jpg`  | Außen: Heck |
| `exterior/ev4-angle.jpg` | Außen: Schrägansicht |
| `exterior/ev4-side.jpg`  | Hero-Hintergrund (Startseite) |

### Innenraum (4K empfohlen)
| Datei | Verwendung in der Galerie |
|-------|---------------------------|
| `interior/ev4-dashboard.jpg`  | Armaturenbrett & Displays |
| `interior/ev4-seats.jpg`      | Vordersitze |
| `interior/ev4-console.jpg`    | Mittelkonsole |
| `interior/ev4-steering.jpg`   | Lenkrad & Instrumente |

### Details (4K empfohlen)
| Datei | Verwendung in der Galerie |
|-------|---------------------------|
| `details/ev4-detail.jpg` | Details |

**Hinweis:** Rückbank und Kofferaum sind aus der Galerie entfernt (keine Bilder vorhanden). Bei Bedarf Motive von KIA Media in `interior/` bzw. `cargo/` ablegen und Galerie in `index.html` wieder ergänzen.
