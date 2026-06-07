import { defineConfig } from "eslint/config"
import html from "eslint-plugin-html"
import globals from "@futagoza/eslint-config-globals/browser.js"

export const config = {

    name: "@futagoza/eslint-config-html",

    files: [ "**/*.html", "**/*.htm", "**/*.phtml", "**/*.xhtml", "**/*.xml" ],

    extends: [ globals ],

    plugins: { html },

    // https://github.com/BenoitZugmeyer/eslint-plugin-html#settings
    settings: {

        "html/html-extensions": [ ".htm", ".html", ".phtml" ],

        "html/xml-extensions": [ ".xhtml", ".xml" ],

        "html/indent": "+4",

        "html/report-bad-indent": "error",

        "html/javascript-tag-names": [ "script" ],

        "html/javascript-mime-types": [

            "application/javascript",
            "module",
            "text/babel",
            "text/ecmascript-6",
            "text/javascript",
            "text/jsx",
            "text/typescript",

        ],

        "html/ignore-tags-without-type": false,

    },

}

export default defineConfig( config )
