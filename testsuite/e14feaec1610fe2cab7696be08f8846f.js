load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-13
description: >
    Array.prototype.forEach - undefined will be returned when 'len' is
    0
---*/

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
        }

        var result = [].forEach(callbackfn);

assert.sameValue(typeof result, "undefined", 'typeof result');
assert.sameValue(accessed, false, 'accessed');
