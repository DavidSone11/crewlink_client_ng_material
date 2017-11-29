" use strict";
module.exports = {
  "port": 8888,
  // "files" : "./public_development/**/*.{js, html, css}",
   "server": { "baseDir": "./public_dev" },
  // server: ['./app.js', './public_dev'],
  // "open": true,
  // "https" : false,
  // "browser" : ["chrome", "firefox"]
  "routes": {
    "/node_modules": "node_modules"
  },
  online: true
};