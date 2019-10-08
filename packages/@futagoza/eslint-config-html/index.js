"use strict";

// https://github.com/BenoitZugmeyer/eslint-plugin-html#settings
const html = {

    "html-extensions": [ ".htm", ".html", ".phtml" ],
    "xml-extensions": [ ".xhtml", ".xml" ],

    "indent": "+4",
    "report-bad-indent": "error",

    "javascript-mime-types": [

        "application/javascript",
        "module",
        "text/babel",
        "text/ecmascript-6",
        "text/javascript",
        "text/jsx",
        "text/typescript",

    ],

};

module.exports = {

    "overrides": [ {

        "files": [ "*.html", "*.htm", "*.phtml", "*.xhtml", "*.xml" ],
        "extends": [

            "@futagoza/globals/browser",

        ],
        "plugins": [ "html" ],
        "settings": { html },

    } ],

};
