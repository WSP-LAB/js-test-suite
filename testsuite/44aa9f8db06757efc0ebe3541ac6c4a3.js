load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-12-s
description: >
    ReferenceError isn't thrown if the LeftHandSideExpression of a Compound
    Assignment operator(*=) evaluates to a resolvable reference
---*/

        var _11_13_2_12 = 5
        _11_13_2_12 *= 2;

assert.sameValue(_11_13_2_12, 10, '_11_13_2_12');
