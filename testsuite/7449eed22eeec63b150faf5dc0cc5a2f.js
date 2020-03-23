load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-c-1
description: >
    Object.isFrozen returns false if 'O' contains own configurable
    data property
---*/

        var obj = {};
        Object.defineProperty(obj, "foo", {
            value: 20,
            writable: false,
            configurable: true
        });

        Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
