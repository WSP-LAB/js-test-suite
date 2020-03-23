load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-6
description: Array.prototype.lastIndexOf when 'fromIndex' isn't passed
---*/

        var arr = [0, 1, 2, 3, 4];
        //'fromIndex' will be set as 4 if not passed by default

assert.sameValue(arr.lastIndexOf(0), arr.lastIndexOf(0, 4), 'arr.lastIndexOf(0)');
assert.sameValue(arr.lastIndexOf(2), arr.lastIndexOf(2, 4), 'arr.lastIndexOf(2)');
assert.sameValue(arr.lastIndexOf(4), arr.lastIndexOf(4, 4), 'arr.lastIndexOf(4)');
