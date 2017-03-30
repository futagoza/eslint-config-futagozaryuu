"use strict";

module.exports = {

  "extends": [

    "./node6.js",
    "./es2016.js"

  ],

  "rules": {

    "node/no-unsupported-features": [ "error", { "version": 7 } ]

  }

};
