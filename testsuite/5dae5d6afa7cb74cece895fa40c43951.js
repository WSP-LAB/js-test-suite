load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-7
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    negative)
---*/

        var obj = { 4: true, 5: false, length: 5 - Math.pow(2, 32) };

assert.sameValue(Array.prototype.indexOf.call(obj, true), -1, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, false), -1, 'Array.prototype.indexOf.call(obj, false)');