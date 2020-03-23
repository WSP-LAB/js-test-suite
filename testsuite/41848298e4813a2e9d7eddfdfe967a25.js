load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-45
description: >
    Object.defineProperties - desc.value is +0 and P.value is -0
    (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

var desc = { value: -0 };
Object.defineProperty(obj, "foo", desc);

try {
    Object.defineProperties(obj, {
        foo: {
            value: +0
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(obj, "foo", -0);

    verifyNotWritable(obj, "foo");

    verifyNotEnumerable(obj, "foo");

    verifyNotConfigurable(obj, "foo");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
