/**
 * با سلام خدمت مهندس و همکار گرامی لطفا وقتی از پروژه های اپن سورس من استفاده میکنید یادر از من در پروژه کنید با قرار دادن ادرس گیت هاب من در هرقسمت که تمایل داشتید ممنون وموفق باشید
 * 
 * Hello dear engineer and colleague, when you use my open source projects or mention me in your project, please include my GitHub address wherever you prefer. Thank you and good luck.
 * 
 * GitHub: https://github.com/Darkcode-it
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      manifest: {
        name: 'Ahmad Rasouli - Front-End Developer & Cybersecurity Specialist',
        short_name: 'Ahmad Rasouli',
        description: 'Personal portfolio website',
        theme_color: '#000000',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globIgnores: [
          '**/images/2pro-react.png',
          '**/images/fourth.png',
          '**/images/is.png'
        ],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          }
        ]
      }
    })
  ],
  base: process.env.VERCEL ? '/' : '/whoami/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})


