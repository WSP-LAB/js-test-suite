load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generatorfunction.prototype.constructor
es6id: 25.2.3.1
description: >
  `constructor` property of the GeneratorFunction.prototype object
info: >
  The initial value of GeneratorFunction.prototype.constructor is the intrinsic
  object %GeneratorFunction%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;

assert.sameValue(GeneratorFunction.prototype.constructor, GeneratorFunction);

verifyNotEnumerable(GeneratorFunction.prototype, 'constructor');
verifyNotWritable(GeneratorFunction.prototype, 'constructor');
verifyConfigurable(GeneratorFunction.prototype, 'constructor');
