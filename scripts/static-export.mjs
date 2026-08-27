// Renders every route to static HTML for GitHub Pages.
//
// The framework's built-in prerender crawler expects a plain Vite server
// build at dist/server/server.js, which this nitro-based build pipeline
// never produces (nitro always emits .output/server/index.mjs). Rather than
// fight that mismatch, this script boots the real built server (the same
// bundle already verified against every route in the browser) and saves
// each page's rendered HTML directly.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PUBLIC_DIR = join(ROOT, ".output", "public");
const BASE = "/portfolio";
const PORT = 41730;

const ROUTES = [
  "/",
  "/about",
  "/work/bosch-bcw",
  "/work/cityloop",
  "/work/fieldkit",
  "/work/infosys",
  "/work/mytown",
  "/work/playpal",
  "/work/talos-care",
];

function routeToOutputPath(route) {
  if (route === "/") return join(PUBLIC_DIR, "index.html");
  return join(PUBLIC_DIR, route.replace(/^\//, ""), "index.html");
}

async function waitForServer(url, attempts = 50) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Server never became ready at ${url}`);
}

async function main() {
  process.env.PORT = String(PORT);
  process.env.NITRO_PORT = String(PORT);
  const serverEntry = pathToFileURL(join(ROOT, ".output", "server", "index.mjs"));
  await import(serverEntry.href);

  const origin = `http://localhost:${PORT}`;
  await waitForServer(`${origin}${BASE}/`);

  for (const route of ROUTES) {
    const url = `${origin}${BASE}${route === "/" ? "/" : route}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to render ${route}: ${res.status} ${res.statusText}`);
    }
    const html = await res.text();
    const outPath = routeToOutputPath(route);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    console.log(`Wrote ${route} -> ${outPath.replace(ROOT, ".")}`);
  }

  // Real rendered 404 page (from __root.tsx's notFoundComponent) for GitHub
  // Pages' automatic unmatched-route fallback.
  const notFoundRes = await fetch(`${origin}${BASE}/__does-not-exist__`);
  const notFoundHtml = await notFoundRes.text();
  await writeFile(join(PUBLIC_DIR, "404.html"), notFoundHtml, "utf8");
  console.log(`Wrote 404 -> .output/public/404.html`);

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
