load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-14
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing -Infinity
---*/

        var objThree = { 0: true, 1: true, length: "-Infinity" };

assert.sameValue(Array.prototype.lastIndexOf.call(objThree, true), -1, 'Array.prototype.lastIndexOf.call(objThree, true)');
