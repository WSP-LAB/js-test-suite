load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-68
description: >
    Object.defineProperties - 'configurable' property of 'descObj' is
    own accessor property that overrides an inherited accessor
    property (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/


var obj = {};
var proto = {};
Object.defineProperty(proto, "configurable", {
    get: function () {
        return true;
    }
});

var Con = function () { };
Con.prototype = proto;
var descObj = new Con();

Object.defineProperty(descObj, "configurable", {
    get: function () {
        return false;
    }
});

Object.defineProperties(obj, {
    prop: descObj
});

assert(obj.hasOwnProperty("prop"));
verifyNotConfigurable(obj, "prop");
assert(obj.hasOwnProperty("prop"));
