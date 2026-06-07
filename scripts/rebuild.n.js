/**
 * 
 * This script rebuilds the config files for eslint-plugin-n rules in "@futagoza/eslint-config-node" by using eslint-plugin-n
 * 
 */

/* #################### IMPORTS #################### */

import $sourceRules from "eslint-plugin-n/lib/all-rules.js"
import { ConfigRules } from "@futagoza/eslint-config-node"
import * as utils from "./lib/utils.js"

/* #################### HELPERS #################### */

const saveFile = utils.createConfigSaver( ".temp/node", "packages/@futagoza/eslint-config-node/rules" )
const { getCounter, setCounter } = utils.createCounterTracker()

/* #################### EXISTING RULES METADATA #################### */

const $currentRuleNames = Object.keys( ConfigRules )

// count the number of rules that are missing
$currentRuleNames.forEach( $ruleName => {

    if ( ! Object.keys( $sourceRules, $ruleName.slice( 2 ) ) ) setCounter( "rules-removed" )

} )

// build an easily iterable array to help generate multiple configuration files
const ESLINT_RULE_TYPES = [

    // 0
    {
        "displayName": "deprecated",
        "description": "These rules have been deprecated",
        /** @type (import("eslint-plugin-n/lib/rules/rule-module.js").RuleModule & { name: string })[] */
        "rules": [],
    },

    // 1
    {
        "displayName": "layout",
        "description": "These rules care about how the code looks rather than how it executes",
        "rules": [],
    },

    // 2
    {
        "displayName": "problem",
        "description": "These rules relate to possible logic errors in code",
        "rules": [],
    },

    // 3
    {
        "displayName": "suggestion",
        "description": "These rules suggest alternate ways of doing things",
        "rules": [],
    },

    // 4
    {
        "displayName": "general",
        "description": "Rules that don't fit into any defined category",
        "rules": [],
    },

]

Object.keys( $sourceRules ).forEach( $exportName => {

    const $rule = {

        // eslint-plugin-n does not do this for some reason, so...
        name: $exportName,

        ...$sourceRules[ $exportName ],

    }

    if ( $rule.meta.deprecated ) {

        ESLINT_RULE_TYPES[ 0 ].rules.push( $rule )
        return;

    }

    if ( $rule.meta.type === "layout" ) {

        ESLINT_RULE_TYPES[ 1 ].rules.push( $rule )
        return;

    }

    if ( $rule.meta.type === "problem" ) {

        ESLINT_RULE_TYPES[ 2 ].rules.push( $rule )
        return;

    }

    if ( $rule.meta.type === "suggestion" ) {

        ESLINT_RULE_TYPES[ 3 ].rules.push( $rule )
        return;

    }

    ESLINT_RULE_TYPES[ 4 ].rules.push( $rule )

} )

/* #################### GENERATE CONFIG #################### */

for ( const $type of ESLINT_RULE_TYPES ) {

    const $displayName = $type.displayName
    const $rules = []

    for ( const $rule of $type.rules ) {

        // rule metadata

        const $ruleName = $rule.name
        const $meta = $rule.meta
        const $ruleId = `n/${ $ruleName }`

        // get the current setting for the rule (if it exists), and generate formatted source code

        const $setting = utils.isAssigned( ConfigRules, $ruleId )
            ? utils.formattedCode( ConfigRules[ $ruleId ] )
            : "void 0"

        $rules.push( utils.T`
            /**
             * ${ typeof $meta.fixable === "string" ? "🔧 " : "" }${ $meta.docs.description?.replaceAll( "*/`", "...`" ) || "" }
             * 
             * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/${ $ruleName }.md
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
        // WARNING: AUTO-GENERATED USING eslint-plugin-n
        //
        // ${ $type.description }
        // 

        /**
         * Raw config for \`@futagoza/eslint-config-node/rules/${ $displayName }.js\`
         */
        export const config = {

            name: "@futagoza/eslint-config-node/${ $displayName }",

            rules: {

                ${ utils.TList( $rules ) }

            },

        }

        /**
         * ESLint ready config for \`@futagoza/eslint-config-node/rules/${ $displayName }.js\`
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
