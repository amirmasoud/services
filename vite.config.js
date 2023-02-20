import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.js",
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
});

// export default defineConfig({
//   build: {
//     target: "esnext",
//   },
//   plugins: [laravel(["resources/js/app.js"]), vue()],
//   resolve: {
//     alias: {
//       "@": "/resources/js",
//       ziggy: "/vendor/tightenco/ziggy/dist/vue",
//     },
//   },
// });
