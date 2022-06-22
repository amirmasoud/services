/* eslint-disable no-undef */
const mix = require("laravel-mix");
const path = require("path");

mix
  .postCss("resources/css/app.css", "public/css", [
    require("tailwindcss"),
  ])
  .webpackConfig({
    resolve: {
      alias: {
        "@": path.join(__dirname, "resources", "js"),
        "ziggy": path.resolve("vendor/tightenco/ziggy/dist/vue"),
      }
    }
  })
  .js("resources/js/app.js", "public/js")
  .vue(3)
  .extract()
  .version();
