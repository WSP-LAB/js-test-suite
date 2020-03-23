load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-54
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O', test
    [[Set]] of 'name' property of 'Attributes' is set as undefined
    value if absent in accessor descriptor 'desc' (8.12.9 step 4.b.i)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
    get: function () {
        return "property";
    },
    enumerable: false,
    configurable: false
});


assert.sameValue(obj.property, "property");

var desc = Object.getOwnPropertyDescriptor(obj, "property");
assert.sameValue(typeof desc.set, "undefined");

verifyNotEnumerable(obj, "property");
verifyNotConfigurable(obj, "property");
