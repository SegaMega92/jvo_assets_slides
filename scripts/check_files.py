"""Шаг 1: проверка читаемости PPTX файлов через python-pptx."""
import sys
from pathlib import Path
from pptx import Presentation

SOURCE_DIR = Path(__file__).parent.parent / "source_pptx"


def check(pptx_path: Path) -> dict:
    try:
        prs = Presentation(str(pptx_path))
        return {
            "file": pptx_path.name,
            "ok": True,
            "slides": len(prs.slides),
            "master": prs.slide_master is not None,
            "layouts": len(prs.slide_masters[0].slide_layouts),
            "slide_w_px": prs.slide_width / 914400 * 96,
            "slide_h_px": prs.slide_height / 914400 * 96,
        }
    except Exception as e:
        return {"file": pptx_path.name, "ok": False, "error": str(e)}


def main() -> int:
    files = sorted(SOURCE_DIR.glob("*.pptx"))
    if not files:
        print(f"NO FILES in {SOURCE_DIR}", file=sys.stderr)
        return 1

    ok_count = 0
    for f in files:
        r = check(f)
        if r["ok"]:
            ok_count += 1
            print(
                f"OK: {r['file']}: {r['slides']} slides, "
                f"master: yes, layouts: {r['layouts']}, "
                f"size: {r['slide_w_px']:.0f}×{r['slide_h_px']:.0f}px"
            )
        else:
            print(f"FAIL: {r['file']}: {r['error']}", file=sys.stderr)

    print(f"\n{ok_count}/{len(files)} files read successfully")
    return 0 if ok_count == len(files) else 1


if __name__ == "__main__":
    sys.exit(main())
