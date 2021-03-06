load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-1
description: >
    Array.prototype.lastIndexOf - added properties in step 2 are
    visible here
---*/

        var arr = { };

        Object.defineProperty(arr, "length", {
            get: function () {
                arr[2] = "length";
                return 3;
            },
            configurable: true
        });

assert.sameValue(Array.prototype.lastIndexOf.call(arr, "length"), 2, 'Array.prototype.lastIndexOf.call(arr, "length")');
