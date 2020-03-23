load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.4.2-1-2
description: >
    Object.prototype.toString - '[object Undefined]' will be returned
    when 'this' value is undefined
---*/

assert.sameValue(Object.prototype.toString.apply(undefined, []), "[object Undefined]", 'Object.prototype.toString.apply(undefined, [])');
