load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the String value
    "Generator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
es6id: 25.3.1.5
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

var GeneratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(function*() {}())
);

assert.sameValue(GeneratorPrototype[Symbol.toStringTag], 'Generator');

verifyNotEnumerable(GeneratorPrototype, Symbol.toStringTag);
verifyNotWritable(GeneratorPrototype, Symbol.toStringTag);
verifyConfigurable(GeneratorPrototype, Symbol.toStringTag);
