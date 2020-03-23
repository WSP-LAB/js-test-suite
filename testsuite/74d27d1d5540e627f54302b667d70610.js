load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.7-1
description: >
    The continue Statement - a continue statement without an
    identifier may have a LineTerminator before the semi-colon
---*/

        var sum = 0;
        for (var i = 1; i <= 10; i++) {
            continue
            ;
            sum += i;
        }

assert.sameValue(sum, 0, 'sum');