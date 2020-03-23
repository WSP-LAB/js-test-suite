load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-15-1
description: >
    Function Object has length as its own property and does not invoke
    the setter defined on Function.prototype.length (Step 15)
includes: [propertyHelper.js]
---*/

var fun = function (x, y) { };

assert(fun.hasOwnProperty("length"));
assert.sameValue(fun.length, 2);

verifyNotEnumerable(fun, "length");
verifyNotWritable(fun, "length");
verifyConfigurable(fun, "length");
