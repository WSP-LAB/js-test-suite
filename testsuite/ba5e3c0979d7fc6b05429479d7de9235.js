load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-53
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O', test
    [[Get]] of 'name' property is set as undefined if it is absent in
    accessor descriptor 'desc' (8.12.9 step 4.b)
includes: [propertyHelper.js]
---*/

var obj = {};
var setFunc = function (value) {
    obj.setVerifyHelpProp = value;
};

Object.defineProperty(obj, "property", {
    set: setFunc,
    enumerable: true,
    configurable: true
});

verifyWritable(obj, "property", "setVerifyHelpProp");

verifyEnumerable(obj, "property");

verifyConfigurable(obj, "property");
