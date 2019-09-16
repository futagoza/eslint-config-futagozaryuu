"use strict";

module.exports = {

    "overrides": [ {

        "files": [ "*.vue" ],
        "extends": [

            "plugin:vue/recommended",

        ],

        "rules": {

            "strict": "off",

            "vue/html-indent": [ "error", 4 ],
            "vue/singleline-html-element-content-newline": "off",

        },

    } ],

};
