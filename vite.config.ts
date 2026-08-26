// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Served from https://harshitharava.github.io/portfolio/ — every asset URL and
// client-side route must carry this prefix, so it stays aligned across the
// Vite base and the router basepath below.
const GITHUB_PAGES_BASE = "/portfolio/";

export default defineConfig({
  vite: {
    base: GITHUB_PAGES_BASE,
  },
  // GitHub Pages only serves static files, so the build needs a plain
  // Node-runnable server bundle (used only to drive prerendering) instead
  // of the Cloudflare Worker-format bundle the sandbox default targets.
  nitro: { preset: "node-server" },
  tanstackStart: {
    router: { basepath: GITHUB_PAGES_BASE },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The framework's built-in prerender crawler expects a plain Vite server
    // build (dist/server/server.js) that this nitro-based pipeline never
    // produces, so it always fails here. scripts/static-export.mjs does the
    // same job manually against the real built server instead — see
    // package.json's "build" script.
  },
});
