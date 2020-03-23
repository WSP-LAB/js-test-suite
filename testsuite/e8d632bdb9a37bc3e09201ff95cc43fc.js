load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-313
description: >
    Object.defineProperty - 'O' is an Arguments object, 'P' is generic
    property, and 'desc' is data descriptor, test 'P' is defined in
    'O' with all correct attribute values (10.6 [[DefineOwnProperty]]
    step 3)
includes: [propertyHelper.js]
---*/

(function () {
    Object.defineProperty(arguments, "genericProperty", {
        value: 1001,
        writable: true,
        enumerable: true,
        configurable: true
    });
    verifyEqualTo(arguments, "genericProperty", 1001);

    verifyWritable(arguments, "genericProperty");

    verifyEnumerable(arguments, "genericProperty");

    verifyConfigurable(arguments, "genericProperty");
}(1, 2, 3));

