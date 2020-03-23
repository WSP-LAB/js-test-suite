load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.5.2.2
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the string value "String
    Iterator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
features: [Symbol.iterator, Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

var StringIteratorProto = Object.getPrototypeOf(''[Symbol.iterator]());

assert.sameValue(StringIteratorProto[Symbol.toStringTag], 'String Iterator');

verifyNotEnumerable(StringIteratorProto, Symbol.toStringTag);
verifyNotWritable(StringIteratorProto, Symbol.toStringTag);
verifyConfigurable(StringIteratorProto, Symbol.toStringTag);
