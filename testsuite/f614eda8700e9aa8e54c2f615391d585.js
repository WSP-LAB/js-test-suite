load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-6-3
description: >
    Object.keys - the order of elements in returned array is the same
    with the order of properties in 'O' (String object)
---*/

        var str = new String("abc");

        var tempArray = [];
        for (var p in str) {
            if (str.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }

        var returnedArray = Object.keys(str);

        for (var index in returnedArray) {
            assert.sameValue(tempArray[index], returnedArray[index], 'tempArray[index]');
        }
