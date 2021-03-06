"use strict";

module.exports = {

    "overrides": [ {

        "files": [ "*.html", "*.htm", "*.phtml", "*.xhtml", "*.xml" ],

        "extends": [

            "@futagoza/globals/browser",

        ],

        "plugins": [ "html" ],

        // https://github.com/BenoitZugmeyer/eslint-plugin-html#settings
        "settings": {

            "html/html-extensions": [ ".htm", ".html", ".phtml" ],
            "html/xml-extensions": [ ".xhtml", ".xml" ],

            "html/indent": "+4",
            "html/report-bad-indent": "error",

            "html/javascript-mime-types": [

                "application/javascript",
                "module",
                "text/babel",
                "text/ecmascript-6",
                "text/javascript",
                "text/jsx",
                "text/typescript",

            ],

        },

    } ],

};
