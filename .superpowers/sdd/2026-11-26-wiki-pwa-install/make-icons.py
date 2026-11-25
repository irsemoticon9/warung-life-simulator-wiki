from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[3]
logo_path = root / "assets" / "img" / "warung-life-logo.png"
out_dir = root / "assets" / "img" / "icons"
out_dir.mkdir(parents=True, exist_ok=True)

logo = Image.open(logo_path).convert("RGBA")
bg = (22, 16, 8, 255)  # #161008

for name, size, ratio in [
    ("icon-192.png", 192, 0.86),
    ("icon-512.png", 512, 0.86),
    ("icon-maskable-512.png", 512, 0.66),
    ("apple-touch-icon-180.png", 180, 0.86),
]:
    canvas = Image.new("RGBA", (size, size), bg)
    target = int(size * ratio)
    w = target
    h = round(logo.height * target / logo.width)
    scaled = logo.resize((w, h), Image.LANCZOS)
    canvas.alpha_composite(scaled, ((size - w) // 2, (size - h) // 2))
    canvas.convert("RGB").save(out_dir / name, "PNG", optimize=True)
    print(f"{name}: {canvas.size}")
