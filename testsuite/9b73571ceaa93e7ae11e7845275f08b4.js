load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-29
description: >
    Array.prototype.indexOf - side effects produced by step 2 are
    visible when an exception occurs
---*/

        var stepFiveOccurs = false;
        
        var obj = {};
        Object.defineProperty(obj, "length", {
            get: function () {
                throw new RangeError();
            },
            configurable: true
        });

        var fromIndex = {
            valueOf: function () {
                stepFiveOccurs = true;
                return 0;
            }
        };
assert.throws(RangeError, function() {
            Array.prototype.indexOf.call(obj, undefined, fromIndex);
});
assert.sameValue(stepFiveOccurs, false, 'stepFiveOccurs');
