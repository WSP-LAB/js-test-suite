load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-7
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is 0)
---*/

assert.sameValue([0, 100].lastIndexOf(100, 0), -1, 'verify fromIndex is not more than 0');
assert.sameValue([200, 0].lastIndexOf(200, 0), 0, 'verify fromIndex is not less than 0');
