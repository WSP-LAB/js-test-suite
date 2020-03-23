load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-8-3
description: >
    Array.prototype.indexOf returns -1 when abs('fromIndex') is length
    of array - 1
---*/

assert.sameValue([1, 2, 3, 4].indexOf(1, -3), -1, '[1, 2, 3, 4].indexOf(1, -3)');
