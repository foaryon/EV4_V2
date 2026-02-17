# -*- coding: utf-8 -*-
"""Entfernt verbleibendes Emoji-Mojibake (ðŸ, âœ, â„ etc.) vor deutschen Wörtern."""
import re
path = r"c:\Users\sebas\Desktop\EV4\kia_ev4.html"
s = open(path, encoding="utf-8").read()
# Entferne typische Mojibake-Sequenzen (1–6 Zeichen) direkt vor bestimmten Wörtern
patterns = [
    (r"[^\x00-\x7F]{2,8}\s*(Bedienungsanleitung)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(100% vollständig)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(Evidenzbasiert)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(Profilübersicht)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(PROFIL 2: REGEN)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(PROFIL 3: WINTER)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(Einstellungen für Profil: Regen)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(Einstellungen für Profil: Winter)", r"\1"),
    (r"[^\x00-\x7F]{2,8}\s*(Einstellungen für Profil: Normal)", r"\1"),
]
for pat, repl in patterns:
    s = re.sub(pat, repl, s)
open(path, "w", encoding="utf-8", newline="\n").write(s)
print("Emoji-Mojibake bereinigt")
