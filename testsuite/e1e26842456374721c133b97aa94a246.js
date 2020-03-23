load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-6-1
description: >
    Object.keys - the order of elements in returned array is the same
    with the order of properties in 'O' (dense array)
---*/

        var denseArray = [1, 2, 3];

        var tempArray = [];
        for (var p in denseArray) {
            if (denseArray.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }

        var returnedArray = Object.keys(denseArray);

        for (var index in returnedArray) {
            assert.sameValue(tempArray[index], returnedArray[index], 'tempArray[index]');
        }
