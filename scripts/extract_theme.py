"""Шаг 3: извлечь theme colors из каждого PPTX.

В PowerPoint тема имеет 12 цветовых слотов:
  dk1, lt1, dk2, lt2 — пары тёмный/светлый
  accent1..accent6 — акцентные цвета
  hlink, folHlink — ссылка и посещённая ссылка
"""
import json
from pathlib import Path
from xml.etree import ElementTree as ET
from pptx import Presentation

SOURCE_DIR = Path(__file__).parent.parent / "source_pptx"
OUT_FILE = Path(__file__).parent.parent / "analysis" / "theme_colors.json"

NS = {
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
}

SLOTS = [
    "dk1", "lt1", "dk2", "lt2",
    "accent1", "accent2", "accent3", "accent4", "accent5", "accent6",
    "hlink", "folHlink",
]


def extract_color(slot_elem) -> str | None:
    """Из элемента слота вытащить hex."""
    srgb = slot_elem.find("a:srgbClr", NS)
    if srgb is not None:
        return "#" + srgb.get("val").upper()
    sys = slot_elem.find("a:sysClr", NS)
    if sys is not None:
        last = sys.get("lastClr")
        if last:
            return "#" + last.upper()
    return None


def extract_theme(pptx_path: Path) -> dict:
    prs = Presentation(str(pptx_path))
    theme_part = prs.slide_master.part.part_related_by(
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
    )
    tree = ET.fromstring(theme_part.blob)
    clr_scheme = tree.find(".//a:clrScheme", NS)

    colors = {}
    if clr_scheme is not None:
        for slot in SLOTS:
            slot_elem = clr_scheme.find(f"a:{slot}", NS)
            if slot_elem is not None:
                colors[slot] = extract_color(slot_elem)

    return {
        "file": pptx_path.name,
        "theme_name": clr_scheme.get("name") if clr_scheme is not None else None,
        "colors": colors,
    }


def main() -> None:
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    results = []
    for f in sorted(SOURCE_DIR.glob("*.pptx")):
        r = extract_theme(f)
        results.append(r)
        print(f"\n{r['file']}  (theme: {r['theme_name']})")
        for slot, hex_ in r["colors"].items():
            print(f"  {slot:10s} = {hex_}")

    OUT_FILE.write_text(json.dumps(results, indent=2, ensure_ascii=False))
    print(f"\n→ {OUT_FILE}")


if __name__ == "__main__":
    main()
