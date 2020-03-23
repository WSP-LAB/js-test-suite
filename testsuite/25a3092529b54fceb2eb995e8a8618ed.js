load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-18
description: >
    Array.prototype.every applied to String object, which implements
    its own property get method
---*/

        function callbackfn1(val, idx, obj) {
            return parseInt(val, 10) > 1;
        }

        function callbackfn2(val, idx, obj) {
            return parseInt(val, 10) > 2;
        }

        var str = new String("432");

            String.prototype[3] = "1";

assert(Array.prototype.every.call(str, callbackfn1), 'Array.prototype.every.call(str, callbackfn1) !== true');
assert.sameValue(Array.prototype.every.call(str, callbackfn2), false, 'Array.prototype.every.call(str, callbackfn2)');
