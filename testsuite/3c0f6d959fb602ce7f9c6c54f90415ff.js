load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-1
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property on an Array-like object
---*/

        var obj = { 0: 0, 1: 1, 2: 2, length: 3 };

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 0), 0, 'Array.prototype.lastIndexOf.call(obj, 0)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, 1), 1, 'Array.prototype.lastIndexOf.call(obj, 1)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, 2), 2, 'Array.prototype.lastIndexOf.call(obj, 2)');
