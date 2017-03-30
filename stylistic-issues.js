"use strict";

module.exports = {

  "rules": {

    "array-bracket-spacing": [ "error", "always", {

      "singleValue": true,
      "arraysInArrays": false

    } ],
    "block-spacing": [ "error", "always" ],
    "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],
    "comma-spacing": [ "error", { "before": false, "after": true } ],
    "comma-style": [ "error", "last" ],
    "computed-property-spacing": [ "error", "always" ],
    "eol-last": [ "error", "always" ],
    "func-call-spacing": [ "error", "never" ],
    "indent": [ "error", 2, { "SwitchCase": 2 } ],
    "key-spacing": [ "error", { "beforeColon": false } ],
    "keyword-spacing": [ "error", { "before": true, "after": true } ],
    "new-parens": [ "error" ],
    "no-mixed-spaces-and-tabs": "error",
    "no-trailing-spaces": [ "error", { "skipBlankLines": false } ],
    "no-whitespace-before-property": [ "error" ],
    "object-curly-spacing": [ "error", "always" ],
    "operator-assignment": [ "error", "always" ],
    "padded-blocks": [ "error", {

      "blocks": "always",
      "switches": "always",
      "classes": "always"

    } ],
    "semi": [ "error", "always", { "omitLastInOneLineBlock": true } ],
    "semi-spacing": [ "error", { "before": false, "after": true } ],
    "space-before-blocks": [ "error", {

      "functions": "always",
      "keywords": "always",
      "classes": "always"

    } ],
    "space-before-function-paren": [ "error", {

      "anonymous": "always",
      "named": "never",
      "asyncArrow": "ignore"

    } ],
    "space-in-parens": [ "error", "always" ],
    "space-infix-ops": [ "error" ],
    "space-unary-ops": [ "error", {

      "words": true,
      "nonwords": false,
      "overrides": {
        "!": true,
        "!!": true
      }

    } ]

  }

};
