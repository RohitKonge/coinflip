import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['coin-favicon.svg', 'flip-sound.mp3'],
      manifest: {
        name: 'Just Flip A Coin',
        short_name: 'Coin Flip',
        theme_color: '#F6D365',
        icons: [
          {
            src: '/coin-favicon.svg',
            sizes: '32x32',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
          'supabase': ['@supabase/supabase-js']
        }
      }
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
