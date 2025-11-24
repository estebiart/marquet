import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import Critters from 'critters';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
  ],

  build: {
    outDir: 'public/build',
    manifest: true,
    ssrManifest: true,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        app: 'resources/js/app.tsx',
      },
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash][extname]`,
      },
    },
  },

  // 🧠 Hook postbuild para ejecutar Critters
  esbuild: {
    legalComments: 'none',
  },

  pluginsPost: [
    {
      name: 'critters-inline-css',
      enforce: 'post',
      apply: 'build',
      generateBundle(_, bundle) {
        const htmlFiles = Object.keys(bundle).filter(f => f.endsWith('.html'));
        const critters = new Critters({
          preload: 'swap',
          inlineFonts: true,
          compress: true,
        });

        htmlFiles.forEach(async (file) => {
          const html = bundle[file].source;
          const processed = await critters.process(html);
          bundle[file].source = processed;
        });
      },
    },
  ],
});
