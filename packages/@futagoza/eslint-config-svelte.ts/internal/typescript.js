"use strict";

const configRaw = require( "@futagoza/eslint-config-typescript" );
const config = Object.assign( {}, configRaw.overrides[ 0 ] );

delete config.files;

module.exports = config;
