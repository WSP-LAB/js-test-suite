load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-17
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a string
    containing -Infinity
---*/

assert.sameValue([true].lastIndexOf(true, "-Infinity"), -1, '[true].lastIndexOf(true, "-Infinity")');
