import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: "0.0.0.0",
  },
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "Shopping List",
        short_name: "Shopping List",
        description: "Shopping List APP",
        theme_color: "#ffffff",
        icons: [
          {
            src: "public/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "public/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "public/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "public/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "public/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "public/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "public/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "public/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "public/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "public/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
