load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-108
description: >
    Object.create - 'configurable' property of one property in
    'Properties' is own accessor property that overrides an inherited
    accessor property (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/

var proto = {};
Object.defineProperty(proto, "configurable", {
    get: function () {
        return true;
    }
});

var ConstructFun = function () { };
ConstructFun.prototype = proto;
var descObj = new ConstructFun();

Object.defineProperty(descObj, "configurable", {
    get: function () {
        return false;
    }
});

var newObj = Object.create({}, {
    prop: descObj 
});

assert(newObj.hasOwnProperty("prop"));
verifyNotConfigurable(newObj, "prop");
