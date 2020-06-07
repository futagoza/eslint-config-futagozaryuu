"use strict";

const CreateNodeConfig = require( "./lib/create-node-config" );

module.exports = CreateNodeConfig( {

    versions: {
        es: 2017,
        node: 8,
    },

} );
