#!/usr/bin/env python3
"""Generate ALL missing menu images for Insta Food."""

import os
import json
import base64
import urllib.request
import time
import subprocess

# Load API key
with open(os.path.expanduser("~/.claude/api-keys.env")) as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY"):
            API_KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
            break

OUTPUT_DIR = "public/images/menu"
os.makedirs(OUTPUT_DIR, exist_ok=True)

STYLE = "Professional food photography, dark moody background, warm studio lighting, high resolution, appetizing presentation, 45-degree angle"

images = [
    # === PIZZAS BASE CREME (9 missing) ===
    ("pizza-boursin", f"French pizza with white cream sauce base, Boursin cheese, ground beef, mozzarella, potatoes, egg, golden crust, {STYLE}"),
    ("pizza-tartiflette", f"French tartiflette pizza with cream base, lardons bacon, potatoes, reblochon cheese melting, golden crust, {STYLE}"),
    ("pizza-tenders", f"French pizza with cream base, crispy chicken tenders pieces, potatoes, melted cheese, golden crust, {STYLE}"),
    ("pizza-saumon", f"French pizza with cream base, smoked salmon slices, mozzarella, fresh dill, golden crust, {STYLE}"),
    ("pizza-raclette", f"French raclette pizza with cream base, melting raclette cheese, emmental, mozzarella, Vache qui rit, golden crust, {STYLE}"),
    ("pizza-compagnon", f"French pizza with cream base, merguez sausage slices, roasted peppers, egg, melted cheese, golden crust, {STYLE}"),
    ("pizza-barbecue", f"French BBQ pizza with cream base, grilled meat, BBQ sauce drizzle, melted cheese, golden crust, {STYLE}"),
    ("pizza-chicken", f"French pizza with cream base, breaded chicken pieces, potatoes, mozzarella, golden crust, {STYLE}"),
    ("pizza-fermiere", f"French farmhouse pizza with cream base, chicken, Boursin cheese, mushrooms, potatoes, lardons, golden crust, {STYLE}"),

    # === PIZZAS BASE TOMATE (11 missing) ===
    ("pizza-regina", f"Classic French regina pizza with tomato sauce, turkey ham, mushrooms, melted mozzarella, golden crust, {STYLE}"),
    ("pizza-4fromages", f"French four cheese pizza with tomato base, mozzarella, goat cheese, gorgonzola, emmental, golden crust, {STYLE}"),
    ("pizza-bolognaise", f"French bolognese pizza with tomato sauce, ground beef, mushrooms, egg, melted cheese, golden crust, {STYLE}"),
    ("pizza-mexicana", f"French mexicana pizza with tomato sauce, ground beef, merguez, BBQ sauce, melted cheese, jalapenos, golden crust, {STYLE}"),
    ("pizza-algerienne", f"French Algerian-style pizza with tomato sauce, ground beef, merguez, roasted peppers, spicy sauce, golden crust, {STYLE}"),
    ("pizza-kebab", f"French kebab pizza with tomato sauce, grilled kebab meat shavings, mozzarella, onions, golden crust, {STYLE}"),
    ("pizza-chicken-tomate", f"French chicken curry pizza with tomato sauce, chicken pieces, curry spice, egg, melted cheese, golden crust, {STYLE}"),
    ("pizza-tunisienne", f"French tuna pizza with tomato sauce, tuna, mozzarella, capers, olives, golden crust, {STYLE}"),
    ("pizza-oriental", f"French oriental pizza with tomato sauce, mozzarella, peppers, merguez, olives, egg, onions, golden crust, {STYLE}"),
    ("pizza-vegetarienne", f"French vegetarian pizza with tomato sauce, grilled aubergine, courgettes, peppers, olives, onions, golden crust, {STYLE}"),
    ("pizza-chili-thai", f"French Thai chili pizza with tomato sauce, tandoori chicken, onions, Thai sweet chili sauce, golden crust, {STYLE}"),

    # === SANDWICHES CLASSIQUES (8 missing) ===
    ("sandwich-kefta", f"French kebab shop kefta sandwich in fresh baguette, grilled kefta meatballs, cheddar cheese, lettuce, tomato, sauce, {STYLE}"),
    ("sandwich-merguez", f"French merguez sandwich in baguette, grilled merguez sausages, fresh lettuce, tomato, onions, harissa sauce, {STYLE}"),
    ("sandwich-texas", f"French Texas steak sandwich in baguette, double beef steak, melted cheddar, lettuce, tomato, BBQ sauce, {STYLE}"),
    ("sandwich-cordon-bleu", f"French cordon bleu sandwich in baguette, crispy breaded cordon bleu, melted cheddar, lettuce, tomato, {STYLE}"),
    ("sandwich-escalope", f"French escalope sandwich in baguette, grilled chicken escalope, cheddar cheese, fresh vegetables, sauce, {STYLE}"),
    ("sandwich-chicken-boursin", f"French chicken Boursin sandwich in baguette, grilled chicken, Boursin cream cheese, cheddar, fresh vegetables, {STYLE}"),
    ("sandwich-chicken-curry", f"French chicken curry sandwich in baguette, curry-spiced chicken, melted cheddar, fresh vegetables, curry sauce, {STYLE}"),
    ("sandwich-chicken-tandori", f"French tandoori chicken sandwich in baguette, tandoori-spiced chicken, cheddar, fresh vegetables, yogurt sauce, {STYLE}"),

    # === SANDWICHES STEAKS (7 missing) ===
    ("sandwich-mixup", f"Massive French steak sandwich, double beef steak with crispy cordon bleu, melted cheddar, fresh vegetables in artisan bread, {STYLE}"),
    ("sandwich-magistral", f"Triple beef steak sandwich with crispy bacon, melted cheddar cheese, fresh lettuce, tomato, in artisan bread, {STYLE}"),
    ("sandwich-chicago", f"French Chicago-style sandwich, double beef steak, escalope, melted cheddar, fresh vegetables in artisan bread, {STYLE}"),
    ("sandwich-tenders-steak", f"French steak and chicken tenders sandwich, double beef steak, crispy chicken tenders, melted cheddar, vegetables, {STYLE}"),
    ("sandwich-radical", f"French steak sandwich with potato galette, double beef steak, crispy hash brown, melted cheddar, fresh vegetables, {STYLE}"),
    ("sandwich-chicken-pane-steak", f"French steak and chicken sandwich, double beef steak, breaded chicken cutlet, melted cheddar, fresh vegetables, {STYLE}"),
    ("sandwich-istanbul", f"French Istanbul-style sandwich, kefta, merguez, egg, melted cheddar cheese, fresh vegetables in artisan bread, {STYLE}"),

    # === SANDWICHES GIGAS (9 missing) ===
    ("giga-miami", f"Premium French giga sandwich Miami style, escalope and cordon bleu, melted cheddar, fresh vegetables, sauce, in large artisan bread, {STYLE}"),
    ("giga-742", f"Premium French giga sandwich, steak with curry chicken and tandoori chicken, triple meat, cheddar, fresh vegetables, large bread, {STYLE}"),
    ("giga-miel", f"Premium French giga sandwich with kebab meat, goat cheese, honey drizzle, cheddar, fresh vegetables, large artisan bread, {STYLE}"),
    ("giga-oriental", f"Premium French oriental giga sandwich, kefta, kebab, merguez, egg, cheddar, fresh vegetables, large artisan bread, {STYLE}"),
    ("giga-fermier", f"Premium French farmhouse giga sandwich, chicken, Boursin cheese, lardons, emmental, fresh vegetables, large artisan bread, {STYLE}"),
    ("giga-raclette", f"Premium French raclette giga sandwich, double beef steak, melting raclette cheese, crispy bacon, fresh vegetables, large bread, {STYLE}"),
    ("giga-parisien", f"Premium French Parisian giga sandwich, steak, merguez, curry chicken, cheddar, fresh vegetables, large artisan bread, {STYLE}"),
    ("giga-montagnard", f"Premium French mountain-style giga sandwich, double steak, curry chicken, Vache qui rit cheese, cheddar, large bread, {STYLE}"),
    ("giga-instafood", f"Premium signature giga sandwich, grilled meat, melted cheddar, fresh vegetables, golden french fries inside, drink on side, large bread, {STYLE}"),

    # === TACOS (2 missing - Double and Big) ===
    ("tacos-double", f"French-style tacos wrap with double meat filling, melted cheese, french fries inside, folded grilled tortilla, {STYLE}"),
    ("tacos-big", f"Large French-style tacos wrap with quad meat filling, extra melted cheese, french fries, grilled crispy tortilla, {STYLE}"),

    # === HUMMERS (2 missing) ===
    ("hummer-h2", f"Massive double smash burger, two thick beef patties, double melted cheese, brioche bun, lettuce, special sauce, {STYLE}"),
    ("hummer-h4", f"Epic XXL quadruple smash burger, four thick beef patties, four slices melted cheese, towering brioche bun, epic hero shot, {STYLE}"),

    # === BURGERS (3 missing) ===
    ("burger-triple", f"Triple cheeseburger, three beef patties stacked, triple melted cheddar, brioche bun, lettuce, tomato, {STYLE}"),
    ("burger-fish", f"Crispy fish burger, golden breaded fish fillet, melted cheddar, lettuce, tartar sauce, brioche bun, {STYLE}"),
    ("burger-royal", f"Royal burger, double beef patties, fried egg on top, melted cheddar, lettuce, tomato, brioche bun, {STYLE}"),

    # === ASSIETTES (3 missing) ===
    ("assiette-1", f"French kebab shop plate, one grilled meat portion with rice, fresh salad, french fries, sauce on side, dark plate, {STYLE}"),
    ("assiette-2", f"French kebab shop plate, two different grilled meats with rice, fresh mixed salad, golden fries, sauces, dark plate, {STYLE}"),
    ("assiette-3", f"Generous French kebab shop plate, three assorted grilled meats with fluffy rice, fresh salad, crispy fries, multiple sauces, dark plate, {STYLE}"),

    # === EXTRAS (5 missing) ===
    ("wings", f"Crispy golden chicken wings, five pieces, with dipping sauce, on a dark moody background, {STYLE}"),
    ("mozzarella-sticks", f"Golden crispy mozzarella sticks, five pieces, melted cheese stretching, marinara dipping sauce, {STYLE}"),
    ("tenders", f"Crispy golden chicken tenders, five pieces, with honey mustard dipping sauce, {STYLE}"),
    ("bouchees-camembert", f"Golden fried camembert cheese bites, five pieces, crispy breaded, creamy inside, cranberry sauce, {STYLE}"),
    ("kids-menu", f"Fun kids meal box, small burger, golden fries, juice drink, chocolate Kinder surprise, colorful presentation, {STYLE}"),
]

def generate_image(name, prompt):
    output_path = os.path.join(OUTPUT_DIR, f"{name}.webp")
    if os.path.exists(output_path):
        print(f"  SKIP {name} (exists)")
        return True

    url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key={API_KEY}"
    payload = {
        "instances": [{"prompt": prompt}],
        "parameters": {"sampleCount": 1, "aspectRatio": "1:1"}
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
            # Convert to webp 400px
            try:
                subprocess.run(["cwebp", "-q", "80", "-resize", "400", "400", png_path, "-o", output_path],
                             capture_output=True, timeout=10)
                if os.path.exists(output_path) and os.path.getsize(output_path) > 0:
                    os.remove(png_path)
                else:
                    os.rename(png_path, output_path)
            except Exception:
                os.rename(png_path, output_path)
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
    if (i + 1) % 5 == 0:
        time.sleep(3)
    else:
        time.sleep(1)

print(f"\nDone: {success}/{len(images)} images generated")
