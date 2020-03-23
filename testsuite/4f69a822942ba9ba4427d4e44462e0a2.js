load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.3-3-s
description: >
    Strict Mode - 'this' value is a boolean which cannot be converted
    to wrapper objects when the function is called with an array of
    arguments
flags: [onlyStrict]
---*/

        function fun() {
            return (this instanceof Boolean);
        }

assert.sameValue(fun.apply(false, Array), false, 'fun.apply(false, Array)');
