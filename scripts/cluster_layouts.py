"""Шаг 9 (часть 1): автоматическая кластеризация слайдов по структуре.

Для каждого слайда строим "структурный отпечаток":
  - сколько крупных фоновых фигур (>40% area)
  - есть ли крупный текст в верхней половине (заголовок)
  - сколько картинок и их крупные позиции
  - сколько TEXT_BOX в нижней части

Затем группируем слайды с одинаковыми отпечатками.
"""
import json
from collections import defaultdict
from pathlib import Path

ANALYSIS_DIR = Path(__file__).parent.parent / "analysis"
GEO_FILE = ANALYSIS_DIR / "geometry_dump.json"
TYPO_FILE = ANALYSIS_DIR / "typography_dump.json"
OUT_FILE = ANALYSIS_DIR / "slide_clusters.json"


def fingerprint(slide_shapes: list, typo_for_slide: list) -> str:
    """Строит compact signature для слайда."""
    sig_parts = []

    # Фоновые фигуры (большая area, тип AUTO_SHAPE)
    bgs = [s for s in slide_shapes if s["shape_type"] == "AUTO_SHAPE (1)"
           and s["w_pct"] * s["h_pct"] >= 40 * 50]
    sig_parts.append(f"bg:{len(bgs)}")

    # Картинки
    pics = [s for s in slide_shapes if s["shape_type"] == "PICTURE (13)"]
    # Категоризируем картинки по размеру
    big_pics = sum(1 for p in pics if p["w_pct"] > 30 and p["h_pct"] > 30)
    small_pics = len(pics) - big_pics
    sig_parts.append(f"bigpic:{big_pics}")
    sig_parts.append(f"smallpic:{small_pics}")

    # Текстовые блоки
    text_boxes = [s for s in slide_shapes if s["shape_type"] == "TEXT_BOX (17)"]
    sig_parts.append(f"tx:{len(text_boxes)}")

    # Таблицы
    tables = [s for s in slide_shapes if s["shape_type"] == "TABLE (19)"]
    if tables:
        sig_parts.append(f"tbl:{len(tables)}")

    # Заголовок: TEXT_BOX в верхней четверти с большим шрифтом
    big_top_text = sum(1 for s in text_boxes if s["top_pct"] < 25 and s["h_pct"] > 8)
    sig_parts.append(f"title:{1 if big_top_text else 0}")

    # Полно-широкий заполнитель (>80% ширины)
    wide_fills = sum(1 for s in bgs if s["w_pct"] > 80)
    if wide_fills:
        sig_parts.append(f"wide:{wide_fills}")

    return "|".join(sig_parts)


def slide_summary(slide_shapes, slide_typo) -> dict:
    bgs = [s for s in slide_shapes if s["shape_type"] == "AUTO_SHAPE (1)"]
    pics = [s for s in slide_shapes if s["shape_type"] == "PICTURE (13)"]
    text_boxes = [s for s in slide_shapes if s["shape_type"] == "TEXT_BOX (17)"]
    big_sizes = [t.get("size_pt") for t in slide_typo if t.get("size_pt", 0) >= 20]
    return {
        "shapes_total": len(slide_shapes),
        "bg_shapes": len(bgs),
        "pictures": len(pics),
        "text_boxes": len(text_boxes),
        "tables": sum(1 for s in slide_shapes if s["shape_type"] == "TABLE (19)"),
        "lines": sum(1 for s in slide_shapes if s["shape_type"] == "LINE (9)"),
        "max_text_size_pt": max(big_sizes) if big_sizes else None,
    }


def main():
    geo = json.loads(GEO_FILE.read_text())
    typo = json.loads(TYPO_FILE.read_text())

    by_slide = defaultdict(list)
    for r in geo:
        by_slide[(r["file"], r["slide"])].append(r)

    typo_by_slide = defaultdict(list)
    for r in typo:
        typo_by_slide[(r["file"], r["slide"])].append(r)

    clusters = defaultdict(list)
    summaries = {}
    for key, shapes in by_slide.items():
        sig = fingerprint(shapes, typo_by_slide.get(key, []))
        clusters[sig].append(key)
        summaries[f"{key[0]}#{key[1]}"] = slide_summary(shapes, typo_by_slide.get(key, []))

    # Сортируем кластеры по размеру
    sorted_clusters = sorted(clusters.items(), key=lambda x: -len(x[1]))

    out = []
    print(f"\n=== {len(clusters)} clusters across {len(by_slide)} slides ===\n")
    for sig, slides in sorted_clusters:
        print(f"\n[{len(slides):3d} slides] {sig}")
        for s in slides[:5]:
            print(f"   {s[0]} #{s[1]}")
        if len(slides) > 5:
            print(f"   ... +{len(slides) - 5} more")
        out.append({
            "signature": sig,
            "slide_count": len(slides),
            "slides": [{"file": s[0], "slide": s[1]} for s in slides],
        })

    OUT_FILE.write_text(json.dumps({
        "clusters": out,
        "summaries": summaries,
    }, indent=2, ensure_ascii=False))
    print(f"\n→ {OUT_FILE}")


if __name__ == "__main__":
    main()
