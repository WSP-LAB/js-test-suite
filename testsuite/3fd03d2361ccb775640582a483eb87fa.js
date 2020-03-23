load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_5
description: >
    Properties - [[HasOwnProperty]] (non-writable, non-configurable,
    enumerable own value property)
---*/

    var o = {};
    Object.defineProperty(o, "foo", {value: 42, enumerable:true});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
