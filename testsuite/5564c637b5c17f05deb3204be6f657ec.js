load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-18-1
description: >
    Function Object has 'prototype' as its own property, it is not
    enumerable and does not invoke the setter defined on
    Function.prototype (Step 18)
includes: [propertyHelper.js]
---*/

try {
    var getFunc = function () {
        return 100;
    };

    var data = "data";
    var setFunc = function (value) {
        data = value;
    };
    Object.defineProperty(Function.prototype, "prototype", {
        get: getFunc,
        set: setFunc,
        configurable: true
    });

    var fun = function () { };

    assert.notSameValue(fun.prototype, 100);
    assert.sameValue(fun.prototype.toString(), "[object Object]");

    verifyNotEnumerable(fun, "prototype");
    verifyWritable(fun, "prototype");
    verifyNotConfigurable(fun, "prototype");

    assert.sameValue(data, "data");
} finally {
    delete Function.prototype.prototype;
}
