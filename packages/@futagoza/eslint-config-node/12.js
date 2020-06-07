"use strict";

const CreateNodeConfig = require( "./lib/create-node-config" );

module.exports = CreateNodeConfig( {

    versions: {
        es: 2019,
        node: 12,
    },

} );
