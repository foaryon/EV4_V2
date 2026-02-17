# -*- coding: utf-8 -*-
import re
path = r"c:\Users\sebas\Desktop\EV4\kia_ev4.html"
s = open(path, encoding="utf-8").read()
# Replace first button label (anything before "Übersicht</button>") with "Start"
s = re.sub(r">[^<]*Übersicht</button>", ">Start</button>", s, count=1)
# Add second nav button
s = s.replace(
    ">Start</button>\n            </div>\n        </nav>",
    ">Start</button>\n                <button class=\"nav-btn\" onclick=\"showSection('allgemein')\">Allgemeine Einstellungen</button>\n            </div>\n        </nav>",
    1,
)
open(path, "w", encoding="utf-8", newline="\n").write(s)
print("Nav: Start + Allgemeine Einstellungen")
