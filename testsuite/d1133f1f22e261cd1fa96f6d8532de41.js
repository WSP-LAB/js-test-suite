load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-11
description: >
    Array.prototype.map - the exception is not thrown if exception was
    thrown by step 3
---*/

        var obj = { 0: 11, 1: 12 };

        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    toString: function () {
                        throw new Test262Error();
                    }
                };
            },
            configurable: true
        });

assert.throws(Test262Error, function() {
            Array.prototype.map.call(obj, undefined);
});
