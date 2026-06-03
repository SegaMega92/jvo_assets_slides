"""Шаг 9 (часть 2): для каждого кластера показать содержимое представителя.

Печатает текст со слайдов в порядке геометрии (сверху-вниз, слева-направо).
По тексту видно что это за лейаут.
"""
import json
from collections import defaultdict
from pathlib import Path

ANALYSIS_DIR = Path(__file__).parent.parent / "analysis"


def main():
    clusters = json.loads((ANALYSIS_DIR / "slide_clusters.json").read_text())["clusters"]
    geo = json.loads((ANALYSIS_DIR / "geometry_dump.json").read_text())
    typo = json.loads((ANALYSIS_DIR / "typography_dump.json").read_text())

    by_slide = defaultdict(list)
    for r in geo:
        by_slide[(r["file"], r["slide"])].append(r)

    typo_by_slide = defaultdict(list)
    for r in typo:
        typo_by_slide[(r["file"], r["slide"])].append(r)

    print(f"=== {len(clusters)} clusters ===\n")
    for i, c in enumerate(clusters):
        if c["slide_count"] < 1:
            continue
        rep = c["slides"][0]
        key = (rep["file"], rep["slide"])
        shapes = sorted(by_slide.get(key, []), key=lambda s: (s["top_pct"], s["left_pct"]))
        typo_recs = typo_by_slide.get(key, [])
        typo_by_shape = defaultdict(list)
        for t in typo_recs:
            typo_by_shape[t["shape"]].append(t)

        print(f"\n[CLUSTER {i+1}] {c['slide_count']:>2d} slides | sig: {c['signature']}")
        print(f"   Rep: {rep['file']} #{rep['slide']}")
        print(f"   ┌─ shapes ({len(shapes)}):")
        for s in shapes[:15]:
            text = s.get("text_preview", "")[:60]
            text_disp = f"  «{text}»" if text else ""
            sz_info = ""
            t_recs = typo_by_shape.get(s["shape"], [])
            if t_recs:
                sizes = sorted({t.get("size_pt") for t in t_recs if t.get("size_pt")})
                if sizes:
                    sz_info = f" [{','.join(f'{x:g}pt' for x in sizes)}]"
            short_type = s["shape_type"].split(" ")[0][:9]
            print(f"   │ {short_type:<10} {s['left_pct']:>5.1f}%,{s['top_pct']:>5.1f}% "
                  f"{s['w_pct']:>5.1f}×{s['h_pct']:>5.1f}{sz_info}{text_disp}")
        if len(shapes) > 15:
            print(f"   │ ... +{len(shapes)-15} more")
        print(f"   └─")


if __name__ == "__main__":
    main()
