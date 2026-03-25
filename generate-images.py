#!/usr/bin/env python3
"""Generate food images for Insta Food menu using Gemini Imagen."""

import os
import json
import base64
import urllib.request
import sys
import time

# Load API key
with open(os.path.expanduser("~/.claude/api-keys.env")) as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY"):
            API_KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
            break

OUTPUT_DIR = "public/images/menu"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Key images to generate (priority items)
images = [
    ("cheese-burger", "Professional food photography of a classic cheeseburger with melted cheddar cheese, lettuce, tomato, onions, on a dark moody background, studio lighting, high resolution"),
    ("double-cheese", "Professional food photography of a double cheeseburger with two beef patties, double melted cheddar, lettuce, tomato, sauce dripping, dark moody background, studio lighting"),
    ("gourmand", "Professional food photography of a gourmet burger with raclette cheese melting, caramelized onions, crispy bacon, on a dark moody background, studio lighting"),
    ("chicken-burger", "Professional food photography of a crispy fried chicken burger with lettuce, tomato, curry sauce, on a dark moody background, studio lighting"),
    ("hummer-2", "Professional food photography of a massive XXL double patty burger with double melted cheese, generous toppings, brioche bun, on a dark moody background, epic hero shot, studio lighting"),
    ("blind", "Professional food photography of a steak sandwich in artisan bread with melted cheese, lettuce, white sauce, on a dark moody background, studio lighting"),
    ("buffalo", "Professional food photography of a spicy buffalo steak sandwich with hot sauce, fresh vegetables, ranch dressing, on a dark moody background, studio lighting"),
    ("le-73", "Professional food photography of a steak sandwich with melted reblochon cheese, potatoes, lardons, in artisan bread, on a dark moody background, studio lighting"),
    ("galette-classique", "Professional food photography of a French galette wrap filled with ground meat, fresh vegetables, french fries, sauce, on a dark moody background, studio lighting"),
    ("frites", "Professional food photography of golden crispy french fries in a paper cone, on a dark moody background, studio lighting"),
    ("nuggets", "Professional food photography of crispy golden chicken nuggets with dipping sauce, on a dark moody background, studio lighting"),
    ("waffle", "Professional food photography of a warm Belgian waffle with Nutella, whipped cream, fresh strawberries, on a dark moody background, studio lighting"),
]

def generate_image(name, prompt):
    """Generate a single image using Gemini Imagen API."""
    output_path = os.path.join(OUTPUT_DIR, f"{name}.webp")
    if os.path.exists(output_path):
        print(f"  SKIP {name} (already exists)")
        return True

    url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key={API_KEY}"

    payload = {
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": "1:1"
        }
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})

    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            result = json.loads(resp.read())

        if "predictions" in result and len(result["predictions"]) > 0:
            img_data = base64.b64decode(result["predictions"][0]["bytesBase64Encoded"])
            # Save as PNG first, then convert
            png_path = os.path.join(OUTPUT_DIR, f"{name}.png")
            with open(png_path, "wb") as f:
                f.write(img_data)
            # Convert to webp and resize to 400px
            ret = os.system(f'sips -s format webp -Z 400 "{png_path}" --out "{output_path}" 2>&1')
            if ret != 0 or not os.path.exists(output_path):
                # Fallback: just rename to webp (browsers handle PNG with .webp ext)
                os.rename(png_path, output_path)
            else:
                os.remove(png_path)
            size = os.path.getsize(output_path) // 1024
            print(f"  OK   {name} ({size}KB)")
            return True
        else:
            print(f"  FAIL {name}: no predictions in response")
            return False
    except Exception as e:
        print(f"  FAIL {name}: {e}")
        return False

print(f"Generating {len(images)} images...")
success = 0
for i, (name, prompt) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {name}")
    if generate_image(name, prompt):
        success += 1
    time.sleep(1)  # Rate limiting

print(f"\nDone: {success}/{len(images)} images generated")
