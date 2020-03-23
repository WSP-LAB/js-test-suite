load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-119
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', the [[Value]] field of 'desc' is absent, test
    every field in 'desc' is same with corresponding attribute value
    of the length property in 'O' (15.4.5.1 step 3.a.i)
includes: [propertyHelper.js]
---*/


var arrObj = [];
Object.defineProperty(arrObj, "length", {
    writable: true,
    enumerable: false,
    configurable: false
});

assert.sameValue(arrObj.length, 0);
arrObj.length = 2;
assert.sameValue(arrObj.length, 2);
verifyNotEnumerable(arrObj, "length");
verifyNotConfigurable(arrObj, "length");