load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `Object.prototype.getOwnPropertyDescriptor` should reflect the value and
      writability of the @@toStringTag attribute.
  includes: [propertyHelper.js]
  es6id: 23.2.3.12
 ---*/

var SetProto = Object.getPrototypeOf(new Set());

assert.sameValue(
  SetProto[Symbol.toStringTag],
  'Set',
  "The value of `SetProto[Symbol.toStringTag]` is `'Set'`"
);

verifyNotEnumerable(SetProto, Symbol.toStringTag);
verifyNotWritable(SetProto, Symbol.toStringTag);
verifyConfigurable(SetProto, Symbol.toStringTag);
