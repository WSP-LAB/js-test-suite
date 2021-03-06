load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-ii-8
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are numbers, and they have same value
---*/

assert.sameValue([-1, 0, 1].lastIndexOf(-1), 0, '[-1, 0, 1].lastIndexOf(-1)');
