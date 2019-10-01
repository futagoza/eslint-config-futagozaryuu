"use strict";

const globals = require( "globals" );

module.exports = {

    "overrides": [ {

        "files": [

            "*.html",
            "*.htm",
            "*.phtml",
            "*.xhtml",
            "*.xml",

        ],

        "plugins": [ "html" ],

        "globals": Object.assign( {}, globals.browser, globals.worker ),

        "rules": {

            // https://github.com/BenoitZugmeyer/eslint-plugin-html#settings

            "html/html-extensions": [

                ".htm",
                ".html",
                ".phtml",

            ],

            "html/xml-extensions": [

                ".xhtml",
                ".xml",

            ],

            "html/indent": "+4",
            "html/report-bad-indent": "error",

            "html/javascript-mime-types": [

                "application/babel",
                "application/javascript",
                "module",
                "text/babel",
                "text/ecmascript-6",
                "text/javascript",
                "text/jsx",
                "text/typescript",
                "text/tsx",

            ],

        },

    } ],

};
