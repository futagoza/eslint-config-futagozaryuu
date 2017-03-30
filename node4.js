"use strict";

const globals = require( "globals" );

module.exports = {

  "extends": "./es2015.js",

  "globals": globals.node,

  "plugins": [ "node" ],

  "rules": {

    "node/no-deprecated-api": "warn",
    "node/no-unsupported-features": [ "error", { "version": 4 } ],
    "node/shebang": "error"

  }

};
