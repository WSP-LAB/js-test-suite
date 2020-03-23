load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-227
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, test TypeError is thrown when the [[Value]] field of
    'desc' and the [[Value]] attribute value of 'name' are two objects
    which refer to two different objects (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

var obj1 = { length: 10 };
Object.defineProperty(arrObj, 0, {
    value: obj1,
    writable: false,
    configurable: false
});

var obj2 = { length: 20 };

try {
    Object.defineProperty(arrObj, "0", { value: obj2 });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arrObj, "0", obj1);

    verifyNotWritable(arrObj, "0");

    verifyNotEnumerable(arrObj, "0");

    verifyNotConfigurable(arrObj, "0");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
