load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-2
description: >
    Object.defineProperties - 'P' is inherited data property (8.12.9
    step 1 )
includes: [propertyHelper.js]
---*/

var proto = {};
Object.defineProperty(proto, "prop", {
    value: 11,
    configurable: false
});
var Con = function () { };
Con.prototype = proto;

var obj = new Con();

Object.defineProperties(obj, {
    prop: {
        value: 12,
        configurable: true
    }
});

verifyEqualTo(obj, "prop", 12);

verifyNotWritable(obj, "prop");

verifyNotEnumerable(obj, "prop");

verifyConfigurable(obj, "prop");

