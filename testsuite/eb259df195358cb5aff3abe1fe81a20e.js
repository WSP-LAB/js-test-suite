load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.6.2
description: >
  The initial value of Uint8ClampedArray.prototype.constructor is the Uint8ClampedArray object.
info: >
  The initial value of Uint8ClampedArray.prototype.constructor is the intrinsic
  object %Uint8ClampedArray%.

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 18 through 26 and in Annex B.2 has
    the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }
    unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(Uint8ClampedArray.prototype.constructor, Uint8ClampedArray);

verifyNotEnumerable(Uint8ClampedArray.prototype, "constructor");
verifyWritable(Uint8ClampedArray.prototype, "constructor");
verifyConfigurable(Uint8ClampedArray.prototype, "constructor");
