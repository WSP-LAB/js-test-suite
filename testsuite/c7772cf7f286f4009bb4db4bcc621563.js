load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.5.6.3.1
description: >
  The initial value of URIError.prototype.constructor is the URIError object.
info: >
  The initial value of the constructor property of the prototype for a given NativeError
  constructor is the corresponding intrinsic object %NativeError% (19.5.6.1).

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 18 through 26 and in Annex B.2 has
    the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }
    unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(URIError.prototype.constructor, URIError);

verifyNotEnumerable(URIError.prototype, "constructor");
verifyWritable(URIError.prototype, "constructor");
verifyConfigurable(URIError.prototype, "constructor");
