"""Шаг 5: частотный анализ цветов.

Метрики:
  - count: сколько раз вообще встретился
  - spread: на скольких разных слайдах появился (важнее count)
  - by_role: разбивка по fill/line/text
  - by_file: разбивка по файлам
"""
import json
from collections import defaultdict
from pathlib import Path

ANALYSIS_DIR = Path(__file__).parent.parent / "analysis"
IN_FILE = ANALYSIS_DIR / "all_colors.json"
OUT_JSON = ANALYSIS_DIR / "color_frequency.json"
OUT_TXT = ANALYSIS_DIR / "color_report.txt"


def main() -> None:
    records = json.loads(IN_FILE.read_text())
    total_slides = len({(r["file"], r["slide"]) for r in records})

    by_hex = defaultdict(lambda: {
        "count": 0,
        "slides": set(),
        "files": set(),
        "by_role": defaultdict(int),
    })

    for r in records:
        h = r["hex"].upper()
        by_hex[h]["count"] += 1
        by_hex[h]["slides"].add((r["file"], r["slide"]))
        by_hex[h]["files"].add(r["file"])
        by_hex[h]["by_role"][r["role"]] += 1

    summary = []
    for h, info in by_hex.items():
        summary.append({
            "hex": h,
            "count": info["count"],
            "spread_slides": len(info["slides"]),
            "spread_pct": round(len(info["slides"]) / total_slides * 100, 1),
            "files_count": len(info["files"]),
            "files": sorted(info["files"]),
            "by_role": dict(info["by_role"]),
        })

    summary.sort(key=lambda x: x["spread_slides"], reverse=True)

    OUT_JSON.write_text(json.dumps(summary, indent=2, ensure_ascii=False))

    lines = []
    lines.append(f"Total slides analyzed: {total_slides}")
    lines.append(f"Unique colors: {len(summary)}")
    lines.append("")
    lines.append(f"{'HEX':<10}{'SPREAD':<10}{'%':<7}{'COUNT':<8}{'FILES':<6}  ROLES")
    lines.append("-" * 80)
    for s in summary:
        roles_str = ",".join(f"{k}:{v}" for k, v in s["by_role"].items())
        lines.append(
            f"{s['hex']:<10}{s['spread_slides']:<10}"
            f"{s['spread_pct']:<7}{s['count']:<8}{s['files_count']:<6}  {roles_str}"
        )

    report = "\n".join(lines)
    OUT_TXT.write_text(report)
    print(report)
    print(f"\n→ {OUT_JSON}")
    print(f"→ {OUT_TXT}")


if __name__ == "__main__":
    main()
