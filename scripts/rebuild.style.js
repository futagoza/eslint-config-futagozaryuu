/**
 * 
 * This script rebuilds the config file for style rules in "@futagoza/eslint-config-core" by using @eslint-stylistic/metadata
 * 
 */

/* #################### IMPORTS #################### */

import { rules as $sourceRules } from "@eslint-stylistic/metadata"
import { config } from "@futagoza/eslint-config-core/rules/style.js"
import * as utils from "./lib/utils.js"

/* #################### HELPERS #################### */

const EXPERIMENTAL_FLAG = "@stylistic/exp-"
const saveFile = utils.createConfigSaver( ".temp/core", "packages/@futagoza/eslint-config-core/rules" )
const { getCounter, setCounter } = utils.createCounterTracker()

/* #################### EXISTING RULES METADATA #################### */

const $currentRules = config.rules
const $currentRuleNames = Object.keys( $currentRules )
const $currentRuleCount = $currentRuleNames.length

/* #################### GENERATE CONFIG #################### */

const $rules = []

for ( const $rule of $sourceRules ) {

    // rule metadata

    const $ruleId = $rule.ruleId
    const $fixable = $rule.meta.fixable ? "🔧 " : ""

    // get current setting if it exists

    let $setting = utils.isAssigned( $currentRules, $ruleId ) ? $currentRules[ $ruleId ] : "void 0"

    // if setting was not found, it might have previously been an experimental rule; try to auto-migrate

    if ( $setting === "void 0" && ! $ruleId.startsWith( EXPERIMENTAL_FLAG ) ) {

        const $oldId = $ruleId.replace( "@stylistic/", EXPERIMENTAL_FLAG )
        if ( utils.isAssigned( $currentRules, $oldId ) ) {

            $setting = $currentRules[ $oldId ]
            $currentRuleNames.push( $ruleId )

            setCounter( "rules-migrated" )

        }

    }

    // generate formatted source code for the rule

    if ( $setting !== "void 0" ) $setting = utils.formattedCode( $setting )

    $rules.push( utils.T`
        /**
         * ${ $fixable }${ $rule.meta.docs.description?.replaceAll( "*/`", "...`" ) }
         * 
         * @see https://eslint.style/rules/${ $rule.name }
         */
        "${ $ruleId }": ${ $setting },
    ` )

    // increment counter for new rules

    if ( ! $currentRuleNames.includes( $ruleId ) ) setCounter( "new-rules" )

}

// the generated config must have rules
if ( $rules.length === 0 ) utils.die( "no rules were added for the style config, skipping creation of generated config" )

// generate and save formatted source code for the current configuration

await saveFile( "style", utils.T`
    // 
    // WARNING: AUTO-GENERATED USING @eslint-stylistic/metadata
    // 
    // ESLint Stylistic now maintains deprecated ESLint style (and most typescript-eslint style) rules
    // 

    import stylistic from "@stylistic/eslint-plugin"

    /**
     * Raw config for \`@futagoza/eslint-config-core/rules/style.js\`
     */
    export const config = {

        name: "@futagoza/eslint-config-core/style",

        plugins: {

            "@stylistic": stylistic,

        },

        rules: {

            ${ utils.TList( $rules ) }

        },

    }

    /**
     * ESLint ready config for \`@futagoza/eslint-config-core/rules/style.js\`
     */
    export default [ config ]
` )

/* #################### REPORT #################### */

utils.log.info( "Number of rules before:", utils.color.cyan( $currentRuleCount ) )
utils.log.info( "Number of rules after:", utils.color.cyan( $rules.length ) )
utils.log.info( "Number of rules added:", utils.color.cyan( getCounter( "new-rules" ) ) )
utils.log.info( "Number of rules migrated:", utils.color.cyan( getCounter( "rules-migrated" ) ) )
