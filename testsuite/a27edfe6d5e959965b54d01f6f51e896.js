load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.12-9-a-1
description: >
    Array.prototype.splice - 'from' is the result of
    ToString(actualStart+k) in an Array
---*/

        var arrObj = [1, 2, 3];
        var newArrObj = arrObj.splice(-2, 1);

assert.sameValue(newArrObj.length, 1, 'newArrObj.length');
assert.sameValue(newArrObj[0], 2, 'newArrObj[0]');
