# -*- coding: utf-8 -*-
"""
Forensische Encoding-Reparatur für kia_ev4.html.
Behebt Mojibake (UTF-8 als Latin-1/CP1252 interpretiert).
"""
from pathlib import Path

PATH = Path(__file__).resolve().parent.parent / "kia_ev4.html"

# Mojibake → korrekt (Unicode). Reihenfolge: längere vor kürzeren.
REPLACEMENTS = [
    ("\u00e2\u2020\u2019 Zur\u00fcck", "\u2190 Zur\u00fcck"),  # ← Zurück
    ("\u00e2\u2020\u2019", "\u2192"),   # →
    ("\u00e2\u20ac\u201c", "\u2013"),   # en dash
    ("\u00e2\u20ac\u017e", "\u201e"),   # „
    ("\u00e2\u20ac\u0153", "\u201c"),   # "
    ("Stra\u00c3\u00dfe", "Stra\u00dfe"),
    ("Stra\u00c3\u00dfen", "Stra\u00dfen"),
    ("\u00c3\u00df", "\u00df"),
    ("Planm\u00e4\u00c3\u00dfiges", "Planm\u00e4\u00dfiges"),
    ("Eingew\u00c3\u00b6hnung", "Eingew\u00f6hnung"),
    ("\u00c2\u00b0", "\u00b0"),   # °
    ("Mo\u00e2\u20ac\u201cFr", "Mo\u2013Fr"),
    ("\u00f6\u00c3\u00a4\u00c3\u00df", "öäß"),  # fallback
    ("\u00e0\u00b8\u00a2\u00e2\u20ac\u2122", "\u2192"),  # weitere Pfeil-Variante
]
# Emojis (Mojibake)
EMOJI_FIX = [
    ("\xf0\x9f\x9a\x97", "\U0001f697"),   # 🚗 (wenn als latin-1 gelesen)
]
# Alternative: typische UTF-8-Mojibake-Sequenzen (bytes als latin-1)
MOJIBASE_STR = [
    ("\u00e2\u20ac\u201c", "\u2013"),
    ("\u00c3\u00bc", "ü"),
    ("\u00c3\u00a4", "ä"),
    ("\u00c3\u00b6", "ö"),
    ("\u00c3\u0096", "Ö"),
]

def main():
    raw = PATH.read_bytes()
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("utf-8", errors="replace")
    for wrong, right in REPLACEMENTS:
        text = text.replace(wrong, right)
    PATH.write_text(text, encoding="utf-8", newline="\n")
    print("Encoding repariert:", PATH)

if __name__ == "__main__":
    main()
