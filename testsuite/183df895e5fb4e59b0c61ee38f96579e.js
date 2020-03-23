load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-2-4
description: >
    Object.getOwnPropertyNames - returned array is the standard
    built-in constructor
---*/

        var oldArray = Array;
        Array = function () {
            throw new Error("invoke customer defined Array!");
        };

        var obj = {};

            var result = Object.getOwnPropertyNames(obj);

assert.sameValue(Object.prototype.toString.call(result), "[object Array]", 'Object.prototype.toString.call(result)');
