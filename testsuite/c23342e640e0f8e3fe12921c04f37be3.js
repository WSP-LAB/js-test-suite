load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-279
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is own
    property which is ever defined in both [[ParameterMap]] of 'O' and
    'O', and is deleted afterwards, and 'desc' is accessor descriptor,
    test 'P' is redefined in 'O' with all correct attribute values
    (10.6 [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/


var arg;

(function fun(a, b, c) {
    arg = arguments;
}(0, 1, 2));

delete arg[0];

function get_func() {
    return 10;
}
function set_func(value) {
    arg.setVerifyHelpProp = value;
}

Object.defineProperties(arg, {
    "0": {
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }
});

verifyEqualTo(arg, "0", get_func());

verifyWritable(arg, "0", "setVerifyHelpProp");

verifyEnumerable(arg, "0");

verifyConfigurable(arg, "0");
