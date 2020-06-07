"use strict";

const CreateNodeConfig = require( "./lib/create-node-config" );

module.exports = CreateNodeConfig( {

    versions: {
        es: 2015,
        node: 4,
    },

    rules: {

        "prefer-rest-params": "off",
        "prefer-spread": "off",

    },

} );
