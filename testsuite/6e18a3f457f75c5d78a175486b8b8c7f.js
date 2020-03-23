load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-531-4
description: >
    Object.defineProperty will update [[Get]] and [[Set]] attributes
    of named accessor property 'P' successfully when [[Configurable]]
    attribute is true, 'O' is the global object (8.12.9 step 11)
includes: [propertyHelper.js]
---*/


var obj = this;
try {
    obj.verifySetFunction = "data";
    Object.defineProperty(obj, "property", {
        get: function () {
            return obj.verifySetFunction;
        },
        set: function (value) {
            obj.verifySetFunction = value;
        },
        configurable: true
    });

    obj.verifySetFunction1 = "data1";
    var getFunc = function () {
        return obj.verifySetFunction1;
    };
    var setFunc = function (value) {
        obj.verifySetFunction1 = value;
    };

    Object.defineProperty(obj, "property", {
        get: getFunc,
        set: setFunc
    });

    verifyEqualTo(obj, "property", getFunc());

    verifyWritable(obj, "property", "verifySetFunction1");

    verifyNotEnumerable(obj, "property");

    verifyConfigurable(obj, "property");
} finally {
    delete obj.property;
    delete obj.verifySetFunction;
    delete obj.verifySetFunction1;
}
