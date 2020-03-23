load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-243-2
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property,  'name' is accessor property and  assignment to
    the accessor property, fails to convert accessor property from
    accessor property to data property (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
flags: [onlyStrict]
---*/


var arrObj = [];

function getFunc() {
    return 3;
}
Object.defineProperty(arrObj, "1", {
    get: getFunc,
    configurable: true
});

try {
    arrObj[1] = 4;
} catch (e) {
    verifyEqualTo(arrObj, "1", getFunc());

    verifyNotEnumerable(arrObj, "1");

    verifyConfigurable(arrObj, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}

