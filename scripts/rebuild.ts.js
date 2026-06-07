/**
 * 
 * This script rebuilds the config files for typescript-eslint rules in "@futagoza/eslint-config-typescript" by using @typescript-eslint/eslint-plugin
 * 
 */

/* #################### IMPORTS #################### */

import $sourceRules from "@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules"
import { ConfigRules } from "@futagoza/eslint-config-typescript"
import { EslintRules } from "@futagoza/eslint-config-core"
import * as utils from "./lib/utils.js"

/* #################### HELPERS #################### */

const saveFile = utils.createConfigSaver( ".temp/typescript", "packages/@futagoza/eslint-config-typescript/rules" )
const { getCounter, setCounter } = utils.createCounterTracker()

/* #################### EXISTING RULES METADATA #################### */

const $currentRuleNames = Object.keys( ConfigRules )

// count the number of rules that are missing
$currentRuleNames.forEach( $ruleName => {

    if ( ! Object.keys( $sourceRules, $ruleName ) ) setCounter( "rules-removed" )

} )

// build an easily iterable array to help generate multiple configuration files
const ESLINT_RULE_TYPES = [

    // 0
    {
        "displayName": "deprecated",
        "description": "These rules have been deprecated",
        /** @type import("@typescript-eslint/utils/ts-eslint").AnyRuleModule[] */
        "rules": [],
    },

    // 1
    {
        "displayName": "extension",
        "description": "These rules are extensions of core rules",
        "rules": [],
    },

    // 2
    {
        "displayName": "inference",
        "description": "These rules require more information to perform type checking",
        "rules": [],
    },

    // 3
    {
        "displayName": "layout",
        "description": "These rules care about how the code looks rather than how it executes",
        "rules": [],
    },

    // 4
    {
        "displayName": "problem",
        "description": "These rules relate to possible logic errors in code",
        "rules": [],
    },

    // 5
    {
        "displayName": "suggestion",
        "description": "These rules suggest alternate ways of doing things",
        "rules": [],
    },

    // 6
    {
        "displayName": "general",
        "description": "Rules that don't fit into any defined category",
        "rules": [],
    },

]

Object.keys( $sourceRules ).forEach( $exportName => {

    const $rule = $sourceRules[ $exportName ]
    const $meta = $rule.meta

    if ( $meta.deprecated ) {

        ESLINT_RULE_TYPES[ 0 ].rules.push( $rule )
        return;

    }

    if ( $meta.docs.requiresTypeChecking ) {

        ESLINT_RULE_TYPES[ 2 ].rules.push( $rule )
        return;

    }

    if ( $meta.docs.extendsBaseRule ) {

        ESLINT_RULE_TYPES[ 1 ].rules.push( $rule )
        return;

    }

    if ( $meta.type === "layout" ) {

        ESLINT_RULE_TYPES[ 3 ].rules.push( $rule )
        return;

    }

    if ( $meta.type === "problem" ) {

        ESLINT_RULE_TYPES[ 4 ].rules.push( $rule )
        return;

    }

    if ( $meta.type === "suggestion" ) {

        ESLINT_RULE_TYPES[ 5 ].rules.push( $rule )
        return;

    }

    ESLINT_RULE_TYPES[ 6 ].rules.push( $rule )

} )

/* #################### GENERATE CONFIG #################### */

for ( const $type of ESLINT_RULE_TYPES ) {

    const $displayName = $type.displayName
    const $rules = []
    let $importCoreConfig = false

    for ( const $rule of $type.rules ) {

        // rule metadata

        const $ruleName = $rule.name
        const $meta = $rule.meta
        const $ruleId = `@typescript-eslint/${ $ruleName }`

        // get current setting if it exists

        let $setting = utils.isAssigned( ConfigRules, $ruleId ) ? ConfigRules[ $ruleId ] : "void 0"

        if ( $meta.docs.extendsBaseRule && utils.sameObject( EslintRules[ $ruleName ], $setting ) ) {

            $importCoreConfig = true
            $setting = `EslintRules[ "${ $ruleName }" ]`

        } // eslint-disable-line @stylistic/brace-style 
        // TODO: suggest an option for @stylistic/brace-style to ignore else-if statements

        // generate formatted source code for the rule

        else if ( $setting !== "void 0" ) {

            $setting = utils.formattedCode( $setting )

        }

        $rules.push( utils.T`
            /**
             * ${ typeof $meta.fixable === "string" ? "🔧 " : "" }${ $meta.docs.description?.replaceAll( "*/`", "...`" ) || "" }
             * 
             * @see https://typescript-eslint.io/rules/${ $ruleName }
             */
            "${ $ruleId }": ${ $setting },
        ` )

        // increment counter for new rules

        if ( ! $currentRuleNames.includes( $ruleId ) ) setCounter( "new-rules" )

    }

    // the generated config must have rules
    if ( $rules.length === 0 ) {

        utils.log.error( `no rules were found for the category ${ $displayName }, skipping creation of generated config` )
        continue;

    }

    // generate and save formatted source code for the current configuration

    await saveFile( $displayName, utils.T`
        // 
        // WARNING: AUTO-GENERATED USING @typescript-eslint/eslint-plugin
        //
        // ${ $type.description }
        // ${ $importCoreConfig ? `\r\n\r\nimport { EslintRules } from "@futagoza/eslint-config-core"` : "" }

        /**
         * Raw config for \`@futagoza/eslint-config-typescript/rules/${ $displayName }.js\`
         */
        export const config = {

            name: "@futagoza/eslint-config-typescript/${ $displayName }",

            rules: {

                ${ utils.TList( $rules ) }

            },

        }

        /**
         * ESLint ready config for \`@futagoza/eslint-config-typescript/rules/${ $displayName }.js\`
         */
        export default [ config ]
    ` )

    // increment counter for total rules added

    setCounter( "rules-added", $rules.length )

}

/* #################### REPORT #################### */

utils.log.info( "Number of rules before:", utils.color.cyan( $currentRuleNames.length ) )
utils.log.info( "Number of rules after:", utils.color.cyan( getCounter( "rules-added" ) ) )
utils.log.info( "Number of rules added:", utils.color.cyan( getCounter( "new-rules" ) ) )
utils.log.info( "Number of rules removed:", utils.color.cyan( getCounter( "rules-removed" ) ) )
