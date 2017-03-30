"use strict";

const globals = require( "globals" );

module.exports = {

  "globals": globals.es5,

  "parserOptions": {

    "ecmaVersion": 5,
    "ecmaFeatures": {

      "globalReturn": false

    }

  },

  "rules": {

    "strict": [ "error", "safe" ]

  }

};
