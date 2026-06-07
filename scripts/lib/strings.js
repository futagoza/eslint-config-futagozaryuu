import dedent from "dedent"

/**
 * A template tag to remove extraneous indention and align sub-templates.
 * 
 * ```js
 * const T = dedent.withOptions({ alignValues: true })
 * ```
 */
export const T = dedent.withOptions( { alignValues: true } )

/**
 * A small utility method handy when you need to print a list (with each element separated by an empty line) into a template string.
 * 
 * **NOTE:** Since this helper is designed to be used inside a template string, any leading whitespace characters (including line terminators) are
 * removed before returning the string to account for any tab characters inside the template before this helper is used.
 * 
 * @param {string[]} strings An array of pre-formatted strings for a list (object or array) in a template string
 */
export const TList = strings => strings.join( "\r\n\r\n" ).trimStart()
