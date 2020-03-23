load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.4.2-2-1
description: >
    Object.prototype.toString - '[object Null]' will be returned when
    'this' value is null
---*/

assert.sameValue(Object.prototype.toString.call(null), "[object Null]", 'Object.prototype.toString.call(null)');
