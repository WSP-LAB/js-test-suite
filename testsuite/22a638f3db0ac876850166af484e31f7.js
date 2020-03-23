load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-316-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'P' is own data property of 'O', and
    'desc' is data descriptor, test updating multiple attribute values
    of 'P' (10.6 [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/

(function (a, b, c) {
    Object.defineProperty(arguments, "genericProperty", {
        value: 1001,
        writable: true,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arguments, "genericProperty", {
        value: 1002,
        enumerable: false,
        configurable: false
    });
    verifyEqualTo(arguments, "genericProperty", 1002);

    verifyWritable(arguments, "genericProperty");

    verifyNotEnumerable(arguments, "genericProperty");

    verifyNotConfigurable(arguments, "genericProperty");
}(1, 2, 3));

