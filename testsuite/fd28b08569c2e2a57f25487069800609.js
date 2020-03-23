load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-323-1
description: >
    Object.defineProperty - ''O' is an Arguments object of a function
    that has formal parameters, 'P' is own accessor property of 'O',
    test TypeError is thrown when updating the [[Enumerable]]
    attribute value of 'P' which is not configurable (10.6
    [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

(function (a, b, c) {
    function setFunc(value) {
        this.genericPropertyString = value;
    }
    Object.defineProperty(arguments, "genericProperty", {
        set: setFunc,
        enumerable: true,
        configurable: false
    });
    try {
        Object.defineProperty(arguments, "genericProperty", {
            enumerable: false
        });
        $ERROR("Expected an exception.");
    } catch (e) {
        if (c !== 3) {
            $ERROR('Expected c === 3, actually ' + c);
        }
        verifyWritable(arguments, "genericProperty", "genericPropertyString");

        verifyEnumerable(arguments, "genericProperty");

        verifyNotConfigurable(arguments, "genericProperty");

        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }

    }

}(1, 2, 3));
