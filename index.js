"use strict";

/**
 * @param {Function} Base The parent class to extend.
 * @param ...mixins The classes to mix in.
 *
 * @returns {{}}
 */
function mixin(Base /*, ...mixins*/)
{
    const properties = {}
    const mixins = Array.prototype.slice.call(arguments, 1) // until nodejs gets rest parameters

    for (let mixin of mixins) {
        let prototype = mixin.prototype
        for (let property of Object.getOwnPropertyNames(prototype)) {
            properties[property] = { value: prototype[property] }
        }
    }

    delete properties.constructor

    const mixed = class extends Base {}

    Object.defineProperties(mixed.prototype, properties)

    return mixed
}

module.exports = mixin
