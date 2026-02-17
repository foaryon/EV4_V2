# Fix back arrow: replace any non-ASCII run before " Zurück" in back-to-intro links
path = r"c:\Users\sebas\Desktop\EV4\kia_ev4.html"
import re
s = open(path, encoding="utf-8").read()
# Pattern: > followed by optional mojibake (1-5 chars), then space and "Zurück zur Profil"
left_arrow = "\u2190"
s = re.sub(r"(return false;\">)([^\s>]{1,5})(\s+Zurück zur Profil)", lambda m: m.group(1) + left_arrow + m.group(3), s)
with open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write(s)
print("OK")
