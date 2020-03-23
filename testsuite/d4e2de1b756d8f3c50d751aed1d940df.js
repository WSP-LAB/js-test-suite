load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2.3.2
description: >
    The value of GeneratorFunction.prototype.prototype is the
    %GeneratorPrototype% intrinsic object.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var GeneratorFunctionPrototype = Object.getPrototypeOf(function*() {});
assert.sameValue(
  GeneratorFunctionPrototype.prototype,
  Object.getPrototypeOf(function*() {}.prototype)
);

verifyNotEnumerable(GeneratorFunctionPrototype, 'prototype');
verifyNotWritable(GeneratorFunctionPrototype, 'prototype');
verifyConfigurable(GeneratorFunctionPrototype, 'prototype');
