import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig((configEnv) => {
  const isSSR = true;

  return {
    plugins: [
      laravel({
        input: ['resources/js/app.tsx'],
        refresh: true,
        ssr: isSSR ? 'resources/js/ssr.tsx' : undefined,
      }),
      react(),
    ],
    build: {
      ssr: isSSR ? 'resources/js/ssr.tsx' : false,
      outDir: isSSR ? 'bootstrap/ssr' : 'public/build',
      ssrManifest: !isSSR,
     emptyOutDir: false,
      rollupOptions: {
        input: isSSR ? 'resources/js/ssr.tsx' : 'resources/js/app.tsx',
        output: {
          entryFileNames: isSSR ? '[name].js' : 'assets/[name]-[hash].js',
          chunkFileNames: isSSR ? '[name]-[hash].js' : 'assets/[name]-[hash].js',
          assetFileNames: isSSR ? '[name]-[hash][extname]' : 'assets/[name]-[hash][extname]',
          format: isSSR ? 'esm' : 'es',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js'),
      },
    },
  }
})
