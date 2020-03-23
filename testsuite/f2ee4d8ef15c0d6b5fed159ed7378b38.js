load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-309
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is
    generic own data property of 'O', test TypeError is thrown when
    updating the [[Configurable]] attribute value of 'P' which is not
    configurable (10.6 [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

var arg = (function () {
    return arguments;
}(1, 2, 3));

Object.defineProperty(arg, "genericProperty", {
    configurable: false
});

try {
    Object.defineProperties(arg, {
        "genericProperty": {
            configurable: true
        }
    });

    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arg, "genericProperty", undefined);

    verifyNotWritable(arg, "genericProperty");

    verifyNotEnumerable(arg, "genericProperty");

    verifyNotConfigurable(arg, "genericProperty");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
