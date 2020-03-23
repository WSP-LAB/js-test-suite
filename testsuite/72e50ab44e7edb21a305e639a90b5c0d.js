load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-14-c-1-s
description: >
    [[Enumerable]] attribute value in 'callee' is false
---*/

        var argObj = function () {
            return arguments;
        } ();

        var verifyEnumerable = false;
        for (var _10_6_14_c_1 in argObj) {
            if (argObj.hasOwnProperty(_10_6_14_c_1) && _10_6_14_c_1 === "callee") {
                verifyEnumerable = true;
            }
        }

assert.sameValue(verifyEnumerable, false, 'verifyEnumerable');
assert(argObj.hasOwnProperty("callee"), 'argObj.hasOwnProperty("callee") !== true');
