/**
 * 
 * This script rebuilds the config files for ESLint core rules in "@futagoza/eslint-config-core" by using:
 * 
 * https://raw.githubusercontent.com/eslint/eslint/main/docs/src/_data/rules.json
 * 
 */

/* #################### IMPORTS #################### */

import { EslintRules } from "@futagoza/eslint-config-core"
import * as utils from "./lib/utils.js"

/* #################### HELPERS #################### */

const saveFile = utils.createConfigSaver( ".temp/core", "packages/@futagoza/eslint-config-core/rules" )
const { getCounter, setCounter } = utils.createCounterTracker()

/* #################### EXISTING RULES METADATA #################### */

const $existingRules = Object.keys( EslintRules )
const $RULES_METADATA_URL = "https://raw.githubusercontent.com/eslint/eslint/main/docs/src/_data/rules.json"
let $response

// fetch rules metadata
try {

    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    $response = await fetch( $RULES_METADATA_URL ) // TODO: remove above eslint directive when dropping support for Node.js 20
    $response = JSON.parse( await $response.text() )

} catch ( err ) {

    utils.log.error( utils.color.red( "error while fetching" ), $RULES_METADATA_URL )
    utils.die( err )

}

// ensure the retrieved metadata contains the required properties
for ( const $key of [ "deprecated", "removed", "types" ] ) {

    if ( ! Object.hasOwn( $response, $key ) ) {

        utils.log.error( utils.color.red( "required object not found in rules.json -" ), $key )
        utils.die()

    }

}

// warn about any deprecated rules
for ( const $rule of $response.deprecated ) {

    const $name = $rule.name
    if ( $existingRules.includes( $name ) ) {

        utils.log.warning( utils.color.blue( $name ), "deprecated" )
        setCounter( "rules-removed" )

    }

}

// warn about any rules that have been removed
for ( const $rule of $response.removed ) {

    const $name = $rule.removed
    if ( $existingRules.includes( $name ) ) {

        utils.log.warning( utils.color.blue( $name ), "removed" )
        setCounter( "rules-removed" )

    }

}

// build an easily iterable array to help generate multiple configuration files
const ESLINT_RULE_TYPES = [

    {
        "displayName": "layout",
        "description": "These rules care about how the code looks rather than how it executes",
        "rules": $response.types.layout,
    },

    {
        "displayName": "problem",
        "description": "These rules relate to possible logic errors in code",
        "rules": $response.types.problem,
    },

    {
        "displayName": "suggestion",
        "description": "These rules suggest alternate ways of doing things",
        "rules": $response.types.suggestion,
    },

]

/* #################### GENERATE CONFIGS #################### */

for ( const $type of ESLINT_RULE_TYPES ) {

    const $displayName = $type.displayName
    const $rules = []

    for ( const $rule of $type.rules ) {

        // rule metadata

        const $name = $rule.name

        // get current setting and format it, otherwise treat it as a new rule

        const $setting = utils.isAssigned( EslintRules, $name )
            ? utils.formattedCode( EslintRules[ $name ] )
            : "void 0"

        // generate formatted source code for the rule

        $rules.push( utils.T`
            /**
             * ${ $rule.fixable ? "🔧 " : "" }${ $rule.description?.replaceAll( "*/`", "...`" ) || "" }
             * 
             * @see http://eslint.org/docs/rules/${ $name }
             */
            "${ $name }": ${ $setting },
        ` )

        // increment counter for new rules

        if ( ! $existingRules.includes( $name ) ) setCounter( "new-rules" )

    }

    // all generated configs must have rules
    if ( $rules.length === 0 ) {

        utils.log.error( `no rules were found for the category ${ $displayName }, skipping creation of generated config` )
        continue;

    }

    // generate and save formatted source code for the current configuration

    await saveFile( $displayName, utils.T`
        // 
        // WARNING: AUTO-GENERATED USING ${ $RULES_METADATA_URL }
        // 
        // ${ $type.description }
        // 

        /**
         * Raw config for \`@futagoza/eslint-config-core/rules/${ $displayName }.js\`
         */
        export const config = {

            name: "@futagoza/eslint-config-core/${ $displayName }",

            rules: {

                ${ utils.TList( $rules ) }

            },

        }

        /**
         * ESLint ready config for \`@futagoza/eslint-config-core/rules/${ $displayName }.js\`
         */
        export default [ config ]
    ` )

    // increment counter for total rules added

    setCounter( "rules-added", $rules.length )

}

/* #################### REPORT #################### */

utils.log.info( "Number of rules before:", utils.color.cyan( $existingRules.length ) )
utils.log.info( "Number of rules after:", utils.color.cyan( getCounter( "rules-added" ) ) )
utils.log.info( "Number of rules added:", utils.color.cyan( getCounter( "new-rules" ) ) )
utils.log.info( "Number of rules removed:", utils.color.cyan( getCounter( "rules-removed" ) ) )
