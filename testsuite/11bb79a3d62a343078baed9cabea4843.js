load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-7-s
description: >
    TypeError isn't thrown if LeftHandSide is a reference to an accessor
    property with setter
---*/

        var _8_7_2_7 = {};
        var _8_7_2_7_bValue = 1;
        Object.defineProperty(_8_7_2_7, "b", {
            get: function () { return _8_7_2_7_bValue; },
            set: function (value) { _8_7_2_7_bValue = value; }
        });

        _8_7_2_7.b = 11;

assert.sameValue(_8_7_2_7.b, 11, '_8_7_2_7.b');
