load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: B.2.5.1
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (RegExp.prototype.compile)
includes: [propertyHelper.js]
---*/

verifyWritable(RegExp.prototype, "compile");
verifyNotEnumerable(RegExp.prototype, "compile");
verifyConfigurable(RegExp.prototype, "compile");
