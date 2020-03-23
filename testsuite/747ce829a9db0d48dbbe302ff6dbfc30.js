load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-a-11
description: Object.isFrozen - 'O' is the Arguments object
---*/

        var arg;

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        Object.preventExtensions(arg);

assert.sameValue(Object.isFrozen(arg), false, 'Object.isFrozen(arg)');
