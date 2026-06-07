import { log, color } from "@futagoza/cli-utils"

export { log, color }

/**
 * Instantly stop the script, optionally printing the given `Error` instance first
 * 
 * WILL ALWAYS EXIT NODE WITH AN ERROR
 * 
 * @param {Error} [err] Error to print
 */
export function die( err ) {

    if ( err ) log.error( err )

    process.exit( 1 )

}

/**
 * Simple counter tracker. Done this way to ensure the values aren't polluted when running multiple scripts/tasks in a CLI with the similar counter names
 */
export function createCounterTracker() {

    /** @type Object<string,number> */
    const __COUNTERS = {}

    return {

        /**
         * Will return the value of the given counter name
         * 
         * @param {string} name counter name
         */
        getCounter( name ) {

            return __COUNTERS[ name ] || 0

        },

        /**
         * Will return the value of the given counter name
         * 
         * @param {string} name counter name
         * @param {number} incrementValue the increment value (default is `1`)
         */
        setCounter( name, incrementValue = 1 ) {

            __COUNTERS[ name ] = ( __COUNTERS[ name ] || 0 ) + incrementValue

        },

    }

}
