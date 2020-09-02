"use strict";

/**
 * All the core ESLint rules with their default options for this configuration.
 */

module.exports = {

    ...require( "../best-practices" ).rules,
    ...require( "../possible-errors" ).rules,
    ...require( "../stylistic-issues" ).rules,
    ...require( "../variables" ).rules,
    ...require( "../ecmascript-6" ).rules,

};
