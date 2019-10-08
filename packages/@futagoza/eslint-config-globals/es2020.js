"use strict";

// https://github.com/eslint/eslint/blob/fee6acbe13cecd4c028e681e185fc6a6d6ba9452/conf/environments.js#L40
const es2020 = {

    BigInt: false,
    BigInt64Array: false,
    BigUint64Array: false,

};

module.exports = {

    "globals": Object.assign( {}, require( "./es2017" ).globals, es2020 ),

};
