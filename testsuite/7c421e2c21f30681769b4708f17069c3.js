load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-33
description: >
    Object.defineProperties - 'P' doesn't exist in 'O', test [[Get]]
    of 'P' is set as undefined value if absent in accessor descriptor
    'desc' (8.12.9 step 4.b)
includes: [propertyHelper.js]
---*/

var obj = {};
var setFun = function (value) {
    obj.setVerifyHelpProp = value;
};

Object.defineProperties(obj, {
    prop: {
        set: setFun,
        enumerable: true,
        configurable: true
    }
});
verifyWritable(obj, "prop", "setVerifyHelpProp");

verifyEnumerable(obj, "prop");

verifyConfigurable(obj, "prop");

