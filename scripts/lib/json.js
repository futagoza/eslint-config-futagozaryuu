// Used when `options.maxLength` is passed to `formattedCode`
function _stringOrMatch( match, stringLiteral ) {

    return stringLiteral || `${ match } `

}

/**
 * Simple helper to check if two objects produce equal JSON values
 */
export function sameObject( a, b ) {

    return JSON.stringify( a ) === JSON.stringify( b )

}

// Default options passed to `formattedCode`
const DEFAULT_OPTIONS = {

    /**
     * Indention used to prettify the code
     * 
     * @type {string | number}
     * @default "    "
     */
    indent: "    ",

    /**
     * Maximum length of code on a single line. This can be used to generate a more compact output if desired.
     * 
     * **NOTE:** If `indent` is an empty string then this is forcibly set to `Infinity`
     * 
     * @type {number}
     * @default 0
     */
    maxLength: 0,

    /**
     * The `replacer` to pass to `JSON.stringify`
     * 
     * @type {(number | string)[] | (this: any, key: string, value: any) => any}
     */
    replacer: void 0,

    /**
     * A regular expression to help format strings?
     * 
     * @type {RegExp}
     * @default /("(?:[^\\"]|\\.)*")|[:,]/g
     */
    stringOrChar: /("(?:[^\\"]|\\.)*")|[:,]/g,

    /**
     * This option will add trailing commas
     * 
     * @type {boolean}
     * @default true
     */
    trailingCommas: true,

}

/**
 * An object serializer to be used for generating JavaScript source code instead of JSON
 *
 *  Based on https://github.com/lydell/json-stringify-pretty-compact with changes:
 *
 *  - Default indent is 4 spaces
 *  - By default print's trailing commas
 *
 * @param {*} value  A JavaScript value, usually an object or array, to be converted.
 * @param {Partial<typeof DEFAULT_OPTIONS>} options Options to help format the output.
 * @returns {string}
 */
export function formattedCode( value, options = {} ) {

    const { stringOrChar, trailingCommas, ...opts } = { ...DEFAULT_OPTIONS, ...options }

    const indent = JSON.stringify( [ 1 ], void 0, opts.indent ).slice( 2, -3 )
    const maxLength = indent === "" ? Infinity : opts.maxLength
    let replacer = opts.replacer

    /**
     * @private
     * @param {*} obj 
     * @param {string} currentIndent 
     * @param {number} reserved 
     */
    function _serialize( obj, currentIndent, reserved ) {

        if ( obj && typeof obj.toJSON === "function" ) obj = obj.toJSON()

        const string = JSON.stringify( obj, replacer )
        if ( string === void 0 ) return string

        const length = maxLength - currentIndent.length - reserved
        if ( string.length <= length ) {

            const prettified = string.replace( stringOrChar, _stringOrMatch )

            if ( prettified.length <= length ) return prettified

        }

        if ( replacer != null ) {

            obj = JSON.parse( string )
            replacer = null

        }

        if ( typeof obj === "object" && obj !== null ) {

            const nextIndent = currentIndent + indent
            const items = []
            let index, start, end

            if ( Array.isArray( obj ) ) {

                start = "["
                end = "]"
                const { length } = obj

                for ( index = 0; index < length; ++index ) {

                    items.push( _serialize( obj[ index ], nextIndent, index === length - 1 ? 0 : 1 ) || "null" )

                }

            } else {

                start = "{"
                end = "}"
                const keys = Object.keys( obj )
                const { length } = keys

                for ( index = 0; index < length; ++index ) {

                    const $key = keys[ index ]
                    const property = `${ JSON.stringify( $key ) }: `
                    const $value = _serialize( obj[ $key ], nextIndent, property.length + ( index === length - 1 ? 0 : 1 ) )
                    if ( $value !== void 0 ) items.push( property + $value )

                }

            }

            if ( items.length > 0 ) {

                if ( trailingCommas ) items.push( items.pop() + "," )

                return [

                    start,
                    indent + items.join( `,\n${ nextIndent }` ),
                    end,

                ].join( `\n${ currentIndent }` )

            }

        }

        return string;

    }

    return _serialize( value, "", 0 )

}
