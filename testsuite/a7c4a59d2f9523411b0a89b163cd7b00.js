load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-302
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is an
    index named property of 'O' but not defined in [[ParameterMap]] of
    'O', and 'desc' is accessor descriptor, test 'name' is defined in
    'O' with all correct attribute values (10.6 [[DefineOwnProperty]]
    step 3)
includes: [propertyHelper.js]
---*/

(function () {
    delete arguments[0];
    function getFunc() {
        return 10;
    }
    function setFunc(value) {
        this.setVerifyHelpProp = value;
    }
    Object.defineProperty(arguments, "0", {
        get: getFunc,
        set: setFunc,
        enumerable: false,
        configurable: false
    });
    verifyEqualTo(arguments, "0", getFunc());

    verifyWritable(arguments, "0", "setVerifyHelpProp");

    verifyNotEnumerable(arguments, "0");

    verifyNotConfigurable(arguments, "0");
}(0, 1, 2));
