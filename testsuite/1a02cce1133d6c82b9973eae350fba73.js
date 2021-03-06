load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-303
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is an
    index named accessor property of 'O' but not defined in
    [[ParameterMap]] of 'O', and 'desc' is accessor descriptor, test
    updating multiple attribute values of 'name' (10.6
    [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/

(function () {
    function getFunc1() {
        return 10;
    }
    Object.defineProperty(arguments, "0", {
        get: getFunc1,
        enumerable: true,
        configurable: true
    });
    function getFunc2() {
        return 20;
    }
    Object.defineProperty(arguments, "0", {
        get: getFunc2,
        enumerable: false,
        configurable: false
    });
    verifyEqualTo(arguments, "0", getFunc2());

    verifyNotEnumerable(arguments, "0");

    verifyNotConfigurable(arguments, "0");
}());
