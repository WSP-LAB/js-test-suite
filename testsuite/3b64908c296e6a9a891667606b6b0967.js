load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-407
description: >
    ES5 Attributes - [[Value]] attribute of inherited property of
    [[Prototype]] internal property is correct (Error Instance)
---*/

            Object.defineProperty(Error.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var errObj = new Error();

assert.sameValue(errObj.hasOwnProperty("prop"), false, 'errObj.hasOwnProperty("prop")');
assert.sameValue(errObj.prop, 1001, 'errObj.prop');
