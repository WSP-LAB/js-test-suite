load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-11
description: >
    Object.keys - own enumerable indexed data property of dense array
    'O' is defined in returned array
---*/

        var obj = [1, 2, 3, 4, 5];

        var arr = Object.keys(obj);

        var initValue = 0;
        for (var p in arr) {
            if (arr.hasOwnProperty(p)) {
                assert.sameValue(arr[p], initValue.toString(), 'arr[p]');
                initValue++;
            }
        }
