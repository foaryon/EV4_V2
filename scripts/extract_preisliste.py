# -*- coding: utf-8 -*-
"""Extract text from Kia-Germany-EV4-Preisliste.pdf to UTF-8 file."""
from pathlib import Path
from pypdf import PdfReader

pdf_path = Path(__file__).resolve().parent.parent / "docs" / "Kia-Germany-EV4-Preisliste.pdf"
out_path = Path(__file__).resolve().parent.parent / "docs" / "preisliste-extract.txt"

reader = PdfReader(str(pdf_path))
with open(out_path, "w", encoding="utf-8") as f:
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        f.write(f"--- Page {i+1} ---\n")
        f.write(text)
        f.write("\n\n")

print(f"Extracted {len(reader.pages)} pages to {out_path}")
