# WIX Technologieunternehmen – Design-Analyse

**Stand:** 2026  
**Quelle:** `example/WIX.html` (Viewer-Wrapper) + externes `app.min.css` (marketing-template-viewer)

## Hinweis
WIX.html lädt das **Template 2855** in einem iframe von `https://www.wix.com/templatesde/2855-tech-company-v`. Die sichtbaren Styles in WIX.html bzw. app.min.css betreffen die **Viewer-UI** (Toolbar, Popup, Cookie-Bar), nicht den Inhalt der Template-Seite. Für ein „Wix-Level“-Look übernehmen wir die Viewer-Tokens (Hintergründe, Schatten, Typo, Fokus, Buttons).

---

## Aus app.min.css extrahierte Design-Tokens

### Globals (body/html)
| Token | Wert |
|-------|------|
| Hintergrund | `#f9fafa` |
| Textfarbe | `#20303c` |
| Schrift | Madefor, Helvetica Neue, Helvetica, Arial, sans-serif |
| font-size | 16px (ab max-width 1100px: 14px) |
| line-height | 1.5 (ab 320px: 1.38) |
| font-weight | 400 |

### Template-Demo-Bereich
| Token | Wert |
|-------|------|
| Hintergrund | `#f7f6f4` (warmes Off-White) |

### Toolbar / Nav
| Token | Wert |
|-------|------|
| background | `#fff` |
| box-shadow | `0 2px 18px 0 rgba(129,162,182,.2)` |
| height | 72px |
| padding | 0 48px |
| border-bottom (Nav-Varianten) | `1px solid #eaeaea` |

### Primary Button (z. B. „Website bearbeiten“)
| Token | Wert |
|-------|------|
| background | `#116dff` |
| color | `#fff` |
| border-radius | 21px |
| height | 42px |
| padding | 0 27px |
| hover | `rgba(17,109,255,.8)` |
| transition | all .2s linear |

### Secondary/Dark Button (z. B. „Jetzt bearbeiten“ im Popup)
| Token | Wert |
|-------|------|
| background | `#161616` |
| border-radius | 6px |
| height | 40px |
| padding | 0 18px |
| hover | `#4d33de` |

### Karten / Modal
| Token | Wert |
|-------|------|
| background | `#fff` |
| border-radius | 6px |
| box-shadow | `-10px 30px 50px 0 rgba(0,0,0,.1)` |

### Cookie-Bar (inline in WIX.html)
| Token | Wert |
|-------|------|
| background | `#fff` |
| box-shadow | `-8px -7px 20px 0 rgba(0,0,0,0.1)` |
| padding | 24px 90px 30px |
| focus-visible | `0 0 0 1px #ffffff, 0 0 0 3px #116dff` |

### Focus (global)
| Token | Wert |
|-------|------|
| outline | none |
| box-shadow | `0 0 0 1px #ffffff, 0 0 0 3px #116dff` |

### CSS-Variablen (app.min.css :root)
| Variable | Wert |
|----------|------|
| --primary-color | #116dff |
| --screen-width-* | 768px, 834px, 1024px, … |
| --layout-header-size | 72px |
| --layout-vertical-padding | 24px (48px ab 834px, 72px ab 1024px) |

### Typografie (StylableTypography)
| Element | font-size | line-height | font-weight |
|--------|-----------|-------------|-------------|
| Heading H1 | 32px | 42px | 700 |
| Heading H2 | 24px | 30px | 700 |
| Heading H3 | 20px | 24px | 700 |
| Body small | 14px | 18px | 400/530/700 |
| Body medium | 16px | 24px | 400/530/700 |

---

## Übertragung auf EV4

- **Seitenhintergrund:** `#f9fafa` (statt reinem #fff) für Wix-Viewer-Nähe.
- **Nav:** Schatten `0 2px 18px rgba(129,162,182,.2)`, Border `#eaeaea`, optional 72px Höhe / 48px Padding auf Desktop.
- **Sektionen/TOC/Footer:** Karten-Schatten `-10px 30px 50px rgba(0,0,0,.1)` oder Cookie-Bar-Schatten `-8px -7px 20px rgba(0,0,0,.1)`, border-radius 6px, Border `#eaeaea` wo sinnvoll.
- **Buttons:** Primary CTA optional #116dff (Wix-Primary); Secondary/Outline bleibt schwarz.
- **Focus:** unverändert `0 0 0 1px #fff, 0 0 0 3px #116dff`.
- **theme-color:** `#f9fafa`.

Stand: Januar 2026.
