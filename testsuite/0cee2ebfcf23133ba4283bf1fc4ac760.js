load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-14
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is NaN)
---*/

// from Index will be convert to +0
assert.sameValue([0, true].lastIndexOf(true, NaN), -1, '[0, true].lastIndexOf(true, NaN)');
assert.sameValue([true, 0].lastIndexOf(true, NaN), 0, '[true, 0].lastIndexOf(true, NaN)');
assert.sameValue([0, true].lastIndexOf(true, -NaN), -1, '[0, true].lastIndexOf(true, -NaN)');
assert.sameValue([true, 0].lastIndexOf(true, -NaN), 0, '[true, 0].lastIndexOf(true, -NaN)');
