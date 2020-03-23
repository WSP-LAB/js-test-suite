load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-2-s
description: >
    ReferenceError isn't thrown if LeftHandSide evaluates to a resolvable
    Reference
---*/

        var b = 11;

assert.sameValue(b, 11, 'b');
