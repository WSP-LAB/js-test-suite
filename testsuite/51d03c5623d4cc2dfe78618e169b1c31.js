load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.6.1
description: >
  The initial value of Int32Array.prototype.BYTES_PER_ELEMENT is 4.
info: >
  The value of TypedArray.prototype.BYTES_PER_ELEMENT is the Number value
  of the Element Size value specified in Table 49 for TypedArray.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Int32Array.prototype.BYTES_PER_ELEMENT, 4);

verifyNotEnumerable(Int32Array.prototype, "BYTES_PER_ELEMENT");
verifyNotWritable(Int32Array.prototype, "BYTES_PER_ELEMENT");
verifyNotConfigurable(Int32Array.prototype, "BYTES_PER_ELEMENT");
