import { test } from "@playwright/test";

const URL = "https://insta-food-eta.vercel.app";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

for (const vp of viewports) {
  test(`screenshot ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: `screenshots/${vp.name}-full.png`,
      fullPage: true,
    });

    // Hero
    await page.screenshot({
      path: `screenshots/${vp.name}-hero.png`,
    });

    // Scroll to menu
    await page.evaluate(() => {
      document.querySelector("#menu")?.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `screenshots/${vp.name}-menu.png`,
    });

    // Scroll to hummer
    await page.evaluate(() => {
      document.querySelector("#hummer")?.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `screenshots/${vp.name}-hummer.png`,
    });

    // Scroll to location
    await page.evaluate(() => {
      document.querySelector("#location")?.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `screenshots/${vp.name}-location.png`,
    });
  });
}
