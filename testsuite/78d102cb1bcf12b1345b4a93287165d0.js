load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-13
description: >
    Array.prototype.map - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an
    Array-like object
---*/

        var kValue = "abc";

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === kValue;
            }
            return false;
        }

        var proto = { length: 2 };

        Object.defineProperty(proto, "0", {
            get: function () {
                return 5;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();

        Object.defineProperty(child, "0", {
            get: function () {
                return kValue;
            },
            configurable: true
        });

        var testResult = Array.prototype.map.call(child, callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');
