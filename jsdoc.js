"use strict";

module.exports = {

    "rules": {

        /**
         * require JSDoc comments
         *
         * @see http://eslint.org/docs/rules/require-jsdoc
         */
        "require-jsdoc": [ "error", {

            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": false,
                "ArrowFunctionExpression": false
            }

        } ],

        /**
         * enforce valid JSDoc comments
         *
         * @see http://eslint.org/docs/rules/valid-jsdoc
         */
        "valid-jsdoc": [ "error", {

            "prefer": {
                "arg": "param",
                "argument": "param",
                "class": "constructor",
                "return": "returns"
            },
            "requireReturn": false,
            "requireReturnType": false,
            "requireParamDescription": false,
            "requireReturnDescription": false

        } ]

    }

};
