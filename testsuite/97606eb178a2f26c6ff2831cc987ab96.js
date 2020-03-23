load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the String value "Array
    Iterator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
features: [Symbol.iterator, Symbol.toStringTag]
includes: [propertyHelper.js]
es6id: 22.1.5.2.2
---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());

assert.sameValue("Array Iterator", ArrayIteratorProto[Symbol.toStringTag]);

verifyNotEnumerable(ArrayIteratorProto, Symbol.toStringTag);
verifyNotWritable(ArrayIteratorProto, Symbol.toStringTag);
verifyConfigurable(ArrayIteratorProto, Symbol.toStringTag);
