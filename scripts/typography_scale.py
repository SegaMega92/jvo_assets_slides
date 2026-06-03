"""Шаг 11: построить типографическую шкалу из реальных данных."""
import json
from collections import Counter, defaultdict
from pathlib import Path

ANALYSIS_DIR = Path(__file__).parent.parent / "analysis"
IN_FILE = ANALYSIS_DIR / "typography_dump.json"
OUT_FILE = ANALYSIS_DIR / "typography_scale.json"


def main():
    records = json.loads(IN_FILE.read_text())

    sizes = Counter()
    fonts_by_size = defaultdict(Counter)
    weights_by_size = defaultdict(Counter)
    colors_by_size = defaultdict(Counter)
    slides_by_size = defaultdict(set)

    for r in records:
        sz = r.get("size_pt")
        if not sz:
            continue
        # отбрасываем auto-fitted (нецелые)
        if abs(sz - round(sz)) > 0.05:
            continue
        sz = round(sz)
        sizes[sz] += 1
        slides_by_size[sz].add((r["file"], r["slide"]))
        if r.get("font"):
            fonts_by_size[sz][r["font"]] += 1
        if r.get("bold"):
            weights_by_size[sz]["bold"] += 1
        else:
            weights_by_size[sz]["regular"] += 1
        if r.get("color"):
            colors_by_size[sz][r["color"]] += 1

    print(f"{'Size':<6}{'Count':<8}{'Slides':<8}{'Top fonts':<60}{'Top color'}")
    print("-" * 110)
    rows = []
    for sz in sorted(sizes.keys(), reverse=True):
        cnt = sizes[sz]
        sl = len(slides_by_size[sz])
        fonts = fonts_by_size[sz].most_common(2)
        fonts_str = ", ".join(f"{f}({c})" for f, c in fonts)
        top_color = colors_by_size[sz].most_common(1)
        top_color_str = top_color[0][0] if top_color else "—"
        print(f"{sz}pt   {cnt:<8}{sl:<8}{fonts_str:<60}{top_color_str}")
        rows.append({
            "size_pt": sz,
            "count": cnt,
            "slides": sl,
            "fonts": dict(fonts_by_size[sz].most_common(3)),
            "weights": dict(weights_by_size[sz]),
            "top_colors": dict(colors_by_size[sz].most_common(3)),
        })

    # Каноническая шкала — наиболее частые размеры с минимум 3 слайдами
    canonical_sizes = sorted([r["size_pt"] for r in rows if r["slides"] >= 3], reverse=True)

    scale = {
        "_meta": {
            "source": "typography_dump.json (round pt, dropped auto-fit fractions)",
            "min_slides_threshold": 3,
        },
        "fonts": {
            "display": "Unbounded",
            "body": "Manrope",
            "fallback": ["Arial", "sans-serif"],
        },
        "raw_sizes": rows,
        "canonical": {},
    }

    # Раскладываем по ролям
    # Большие → display, h1, h2 ; средние → h3, body; маленькие → small, caption
    role_map = []
    if canonical_sizes:
        max_sz = canonical_sizes[0]
        for sz in canonical_sizes:
            row = next((r for r in rows if r["size_pt"] == sz), None)
            slides = row["slides"] if row else 0
            top_font = fonts_by_size[sz].most_common(1)[0][0] if fonts_by_size[sz] else None
            family = "Unbounded" if top_font and "Unbounded" in top_font else "Manrope"
            weight = "SemiBold" if top_font and "SemiBold" in top_font else ("Medium" if top_font and "Medium" in top_font else "Regular")
            role_map.append({
                "size_pt": sz,
                "size_px_960": round(sz * 96 / 72, 1),  # at 96dpi
                "size_px_1920": round(sz * 96 / 72 * 2, 1),  # scaled 2x for our canvas
                "family": family,
                "weight": weight,
                "slides_used": slides,
            })

    # Назначаем имена
    names = ["display", "h1", "h2", "h3", "body", "small", "caption", "micro"]
    role_dict = {}
    for i, entry in enumerate(role_map[:len(names)]):
        role_dict[names[i]] = entry
    scale["canonical"] = role_dict

    OUT_FILE.write_text(json.dumps(scale, indent=2, ensure_ascii=False))
    print(f"\n=== Canonical scale ===")
    for name, e in role_dict.items():
        print(f"  {name:<8} {e['size_pt']}pt = {e['size_px_1920']}px (1920) | {e['family']} {e['weight']} | {e['slides_used']} slides")
    print(f"\n→ {OUT_FILE}")


if __name__ == "__main__":
    main()
