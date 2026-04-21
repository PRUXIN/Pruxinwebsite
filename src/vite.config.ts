import { defineConfig, Plugin } from 'vite';
import { copyFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { resolve, join, extname } from 'path';

const MIME: Record<string, string> = {
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

/**
 * serveImportsPlugin
 *
 * DEV  — registers a Connect middleware so that any request to /imports/*
 *         is answered directly from the /imports directory on disk.
 *         This makes paths like `/imports/Ruxi_Marketing_image.png` work
 *         in the Figma Make editor/preview.
 *
 * PROD — in buildStart, copies every image from /imports into
 *         /public/imports/ so that Vite includes them in the build output
 *         at the same /imports/… URL path.
 */
function serveImportsPlugin(): Plugin {
  return {
    name: 'serve-imports',

    // ── Dev server ──────────────────────────────────────────────────────────
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? '';
        if (!url.startsWith('/imports/')) return next();

        const filename = decodeURIComponent(url.slice('/imports/'.length).split('?')[0]);
        if (!filename) return next();

        const filePath = resolve('imports', filename);
        if (!existsSync(filePath)) return next();

        const mime = MIME[extname(filePath).toLowerCase()] ?? 'application/octet-stream';
        res.setHeader('Content-Type', mime);
        res.setHeader('Cache-Control', 'no-cache');
        res.end(readFileSync(filePath));
      });
    },

    // ── Production build ────────────────────────────────────────────────────
    buildStart() {
      const srcDir  = resolve('imports');
      const destDir = resolve('public', 'imports');

      try {
        if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });

        const IMAGE_RE = /\.(png|jpg|jpeg|gif|webp|ico|svg)$/i;
        const { readdirSync } = require('fs');
        for (const file of readdirSync(srcDir)) {
          if (IMAGE_RE.test(file)) {
            copyFileSync(join(srcDir, file), join(destDir, file));
          }
        }
        console.log('[serve-imports] ✓ Copied /imports/ images → /public/imports/');
      } catch (err) {
        console.warn('[serve-imports] Could not copy assets:', err);
      }
    },
  };
}

export default defineConfig({
  plugins: [serveImportsPlugin()],
});
