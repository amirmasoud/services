/* eslint-disable no-undef */
/**
 * This webpack config file is just for PHPStorm to read the resource file. The functional WebPack file webpack.mix.js
 */

const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./resources/js"),
      ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue"),
    },
  },
};
