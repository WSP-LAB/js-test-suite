load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.5.6.3.3
description: >
  The initial value of SyntaxError.prototype.name is "SyntaxError".
info: >
  The initial value of the name property of the prototype for a given NativeError
  constructor is a string consisting of the name of the constructor (the name used
  instead of NativeError).

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 18 through 26 and in Annex B.2 has
    the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }
    unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(SyntaxError.prototype.name, "SyntaxError");

verifyNotEnumerable(SyntaxError.prototype, "name");
verifyWritable(SyntaxError.prototype, "name");
verifyConfigurable(SyntaxError.prototype, "name");
