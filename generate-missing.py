#!/usr/bin/env python3
"""Generate missing menu images for Insta Food."""

import os
import json
import base64
import urllib.request
import time

# Load API key
with open(os.path.expanduser("~/.claude/api-keys.env")) as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY"):
            API_KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
            break

OUTPUT_DIR = "public/images/menu"

images = [
    ("pizza-creme", "Professional food photography of a French-style pizza with white cream base sauce, melted mozzarella cheese, chicken pieces, roasted potatoes, golden crust, on a dark moody background with warm studio lighting, top-down angle, high resolution"),
    ("pizza-tomate", "Professional food photography of a classic French pizza with red tomato sauce base, melted mozzarella, fresh basil, mushrooms, golden crispy crust, on a dark moody background with warm studio lighting, top-down angle, high resolution"),
    ("sandwich-classique", "Professional food photography of a French kebab sandwich in a fresh baguette bread, with grilled meat, fresh lettuce, tomato, onions, white sauce dripping, on a dark moody background, studio lighting, side angle, high resolution"),
]

def generate_image(name, prompt):
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
            png_path = os.path.join(OUTPUT_DIR, f"{name}.png")
            with open(png_path, "wb") as f:
                f.write(img_data)
            ret = os.system(f'sips -s format webp -Z 400 "{png_path}" --out "{output_path}" 2>&1')
            if ret != 0 or not os.path.exists(output_path):
                os.rename(png_path, output_path)
            else:
                os.remove(png_path)
            size = os.path.getsize(output_path) // 1024
            print(f"  OK   {name} ({size}KB)")
            return True
        else:
            print(f"  FAIL {name}: no predictions")
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
    time.sleep(2)

print(f"\nDone: {success}/{len(images)} images generated")
