load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype-@@tostringtag
description: >
  Return undefined when `this` does not have a [[TypedArrayName]] internal slot
info: >
  22.2.3.32 get %TypedArray%.prototype [ @@toStringTag ]

  1. Let O be the this value.
  ...
  3. If O does not have a [[TypedArrayName]] internal slot, return undefined.
  ...
includes: [testTypedArray.js]
features: [Symbol.toStringTag, DataView]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, Symbol.toStringTag
).get;

assert.sameValue(getter.call({}), undefined);
assert.sameValue(getter.call([]), undefined);
assert.sameValue(getter.call(new ArrayBuffer(8)), undefined);

var ab = new ArrayBuffer(8);
var dv = new DataView(ab, 0, 1);
assert.sameValue(getter.call(dv), undefined);
