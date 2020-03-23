load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-298
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is an
    array index named accessor property of 'O' but not defined in
    [[ParameterMap]] of 'O', test TypeError is thrown when updating
    the [[Get]] attribute value of 'P' which is not configurable (10.6
    [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/


var arg;

(function fun() {
    arg = arguments;
}());

function get_func1() {
    return 0;
}

Object.defineProperty(arg, "0", {
    get: get_func1,
    enumerable: false,
    configurable: false
});

function get_func2() {
    return 10;
}
try {
    Object.defineProperties(arg, {
        "0": {
            get: get_func2
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arg, "0", get_func1());

    verifyNotEnumerable(arg, "0");

    verifyNotConfigurable(arg, "0");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
