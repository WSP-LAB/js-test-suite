load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-474
description: >
    ES5 Attributes - fail to update [[Configurable]] attribute of
    accessor property ([[Get]] is undefined, [[Set]] is a Function,
    [[Enumerable]] is true, [[Configurable]] is false) to different
    value
includes: [propertyHelper.js]
---*/

var obj = {};

var verifySetFunc = "data";
var setFunc = function (value) {
    verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: undefined,
    set: setFunc,
    enumerable: true,
    configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

try {
    Object.defineProperty(obj, "prop", {
        configurable: true
    });

    $ERROR("Expected TypeError");
} catch (e) {
    assert(e instanceof TypeError);

    var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

    assert.sameValue(desc1.configurable, false);
    assert.sameValue(desc2.configurable, false);

    verifyNotConfigurable(obj, "prop");

    assert(obj.hasOwnProperty("prop"));
}
