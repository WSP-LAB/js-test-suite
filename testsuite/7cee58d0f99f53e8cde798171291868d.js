load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-ii-13
description: Array.prototype.forEach - callbackfn that uses arguments
---*/

        var result = false;
        function callbackfn() {
            result = (arguments[2][arguments[1]] === arguments[0]);
        }

        [11].forEach(callbackfn);

assert(result, 'result !== true');
