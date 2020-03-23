load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The GeneratorPrototype intrinsic should define a `constructor` property
    that is non-enumerable, non-writable, and configurable.
includes: [propertyHelper.js]
es6id: 25.3.1
---*/

function* g() {}
var Generator = Object.getPrototypeOf(g);
var GeneratorPrototype = Generator.prototype;

assert.sameValue(GeneratorPrototype.constructor, Generator);

verifyNotEnumerable(GeneratorPrototype, 'constructor');
verifyNotWritable(GeneratorPrototype, 'constructor');
verifyConfigurable(GeneratorPrototype, 'constructor');
