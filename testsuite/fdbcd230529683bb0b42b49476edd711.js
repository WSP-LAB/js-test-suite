load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-238
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, TypeError is thrown if the [[Configurable]]
    attribute value of 'name' is false  and the [[Configurable]] field
    of 'desc' is true (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [];

Object.defineProperty(arrObj, "1", {
    value: 3,
    writable: true,
    configurable: false
});

try {
    Object.defineProperty(arrObj, "1", {
        value: 13,
        writable: true,
        configurable: true
    });
    $ERROR("Expected an exception.");

} catch (e) {
    verifyEqualTo(arrObj, "1", 3);

    verifyWritable(arrObj, "1");

    verifyNotEnumerable(arrObj, "1");

    verifyNotConfigurable(arrObj, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
