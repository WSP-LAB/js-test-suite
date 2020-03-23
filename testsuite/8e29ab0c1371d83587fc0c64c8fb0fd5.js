load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-164
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is an
    inherited accessor property without a get function  (8.10.5 step
    6.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var proto = {};
Object.defineProperty(proto, "writable", {
    set: function () { }
});

var ConstructFun = function () { };
ConstructFun.prototype = proto;

var child = new ConstructFun();

Object.defineProperty(obj, "property", child);

assert(obj.hasOwnProperty("property"));
verifyNotWritable(obj, "property");
