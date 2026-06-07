/**
 * Will return `true` if the given property is defined and not `void 0` or `null`
 * 
 * @param {{}} object 
 * @param {string|number|Symbol} key 
 */
export function isAssigned( object, key ) {

    return Object.hasOwn( object, key )
        && object[ key ] !== void 0
        && object[ key ] !== null

}
