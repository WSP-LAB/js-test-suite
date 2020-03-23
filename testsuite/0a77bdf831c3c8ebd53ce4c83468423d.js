load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-290
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is an
    array index named property of 'O' but not defined in
    [[ParameterMap]] of 'O', and 'desc' is data descriptor, test 'P'
    is defined in 'O' with all correct attribute values (10.6
    [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/


var arg;

(function fun() {
    arg = arguments;
}(0, 1, 2));

delete arg[0];

Object.defineProperties(arg, {
    "0": {
        value: 10,
        writable: false,
        enumerable: false,
        configurable: false
    }
});

verifyEqualTo(arg, "0", 10);

verifyNotWritable(arg, "0");

verifyNotEnumerable(arg, "0");

verifyNotConfigurable(arg, "0");
