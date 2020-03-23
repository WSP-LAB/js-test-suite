load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype-@@tostringtag
description: >
  _TypedArray_.prototype[@@toStringTag] is inherited from %TypedArray%
  _TypedArray_.prototype has no own property @@toStringTag
includes: [testTypedArray.js]
features: [Symbol.toStringTag]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty(Symbol.toStringTag), false);
});
