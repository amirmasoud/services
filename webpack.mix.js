/* eslint-disable no-undef */
const mix = require("laravel-mix");
const path = require("path");

mix
  .js("resources/js/app.js", "public/js")
  .extract()
  .vue(3)
  .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
  .alias({
    "@": path.join(__dirname, "resources/js"),
    ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue"),
  })
  .version();
