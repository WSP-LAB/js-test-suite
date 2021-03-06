load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-15
description: Array.prototype.indexOf applied to Arguments object
---*/

        function fun() {
            return arguments;
        }
        var obj = fun(1, true, 3);

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
