load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-ii-18
description: >
    Array.prototype.some - 'this' of 'callbackfn' is an String object
    when T is not an object (T is a string primitive)
---*/

        function callbackfn(val, idx, obj) {
            return this.valueOf() === "hello!";
        }

        var obj = { 0: 11, 1: 9, length: 2 };

assert(Array.prototype.some.call(obj, callbackfn, "hello!"), 'Array.prototype.some.call(obj, callbackfn, "hello!") !== true');
