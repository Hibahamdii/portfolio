from colorsys import hls_to_rgb, rgb_to_hls
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "assets" / "hiba-contact-pose.png"
TARGET = ROOT / "src" / "assets" / "hiba-contact-pose-outfit.png"


def recolor_pixel(rgb, hue, saturation, lightness_shift=0.0):
    r, g, b = (channel / 255 for channel in rgb)
    _, lightness, _ = rgb_to_hls(r, g, b)
    lightness = max(0, min(1, lightness + lightness_shift))
    nr, ng, nb = hls_to_rgb(hue, lightness, saturation)
    return tuple(round(channel * 255) for channel in (nr, ng, nb))


image = Image.open(SOURCE).convert("RGBA")
pixels = image.load()
width, height = image.size

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue

        rr, gg, bb = r / 255, g / 255, b / 255
        hue, lightness, saturation = rgb_to_hls(rr, gg, bb)
        hue_degrees = hue * 360

        shirt_area = (
            500 <= x <= 850
            and 270 <= y <= 610
            and 20 <= hue_degrees <= 65
            and 0.05 <= saturation <= 0.38
            and lightness >= 0.58
        )
        sleeve_area = (
            430 <= x <= 660
            and 390 <= y <= 560
            and 20 <= hue_degrees <= 65
            and 0.04 <= saturation <= 0.4
            and lightness >= 0.54
        )
        pants_area = (
            410 <= x <= 760
            and 545 <= y <= 850
            and 55 <= hue_degrees <= 150
            and saturation >= 0.08
            and lightness <= 0.42
        )

        if shirt_area or sleeve_area:
            nr, ng, nb = recolor_pixel((r, g, b), hue=0.035, saturation=0.68, lightness_shift=-0.12)
            pixels[x, y] = (
                round(r * 0.1 + nr * 0.9),
                round(g * 0.1 + ng * 0.9),
                round(b * 0.1 + nb * 0.9),
                a,
            )
        elif pants_area:
            nr, ng, nb = recolor_pixel((r, g, b), hue=0.29, saturation=0.34, lightness_shift=0.01)
            pixels[x, y] = (
                round(r * 0.28 + nr * 0.72),
                round(g * 0.28 + ng * 0.72),
                round(b * 0.28 + nb * 0.72),
                a,
            )

image.save(TARGET)
print(TARGET)
