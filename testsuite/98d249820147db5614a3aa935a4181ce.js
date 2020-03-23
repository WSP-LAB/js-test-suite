load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_12
description: >
    Properties - [[HasOwnProperty]] (non-writable, non-configurable,
    non-enumerable inherited value property)
---*/

    var base = {};
    Object.defineProperty(base, "foo", {value: 42});
    var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
