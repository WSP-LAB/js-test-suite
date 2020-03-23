load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-253
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is accessor property and 'desc' is accessor
    descriptor, and the [[Configurable]] attribute value of 'name' is
    false, test TypeError is thrown if the [[Set]] field of 'desc' is
    present, and the [[Set]] field of 'desc' is an object and the
    [[Set]] attribute value of 'name' is undefined (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];
function getFunc() {
    return 12;
}

Object.defineProperty(arrObj, "1", {
    get: getFunc,
    set: undefined
});

try {
    Object.defineProperty(arrObj, "1", {
        set: function () { }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arrObj, "1", getFunc());

    verifyNotEnumerable(arrObj, "1");

    verifyNotConfigurable(arrObj, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
