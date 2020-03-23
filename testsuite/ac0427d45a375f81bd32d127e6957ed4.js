load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generatorfunction.length
es6id: 25.2.2.1
description: >
  This is a data property with a value of 1. This property has the attributes {
  [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;

assert.sameValue(GeneratorFunction.length, 1);

verifyNotEnumerable(GeneratorFunction, 'length');
verifyNotWritable(GeneratorFunction, 'length');
verifyConfigurable(GeneratorFunction, 'length');
