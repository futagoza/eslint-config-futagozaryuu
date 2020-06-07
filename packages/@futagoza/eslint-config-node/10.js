"use strict";

const CreateNodeConfig = require( "./lib/create-node-config" );

module.exports = CreateNodeConfig( {

    versions: {
        es: 2018,
        node: 10,
    },

} );
