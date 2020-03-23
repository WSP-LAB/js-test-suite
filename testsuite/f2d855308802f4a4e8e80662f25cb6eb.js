load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.5.2.2
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the String value
    "Set Iterator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features:
  - Symbol.toStringTag
  - Symbol.iterator
---*/

var SetIteratorProto = Object.getPrototypeOf(new Set()[Symbol.iterator]());

assert.sameValue(
  'Set Iterator',
  SetIteratorProto[Symbol.toStringTag],
  '`Set Iterator` is `SetIteratorProto[Symbol.toStringTag]`'
);

verifyNotEnumerable(SetIteratorProto, Symbol.toStringTag);
verifyNotWritable(SetIteratorProto, Symbol.toStringTag);
verifyConfigurable(SetIteratorProto, Symbol.toStringTag);
