load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.4
description: Symbol.prototype[Symbol.toPrimitive] `name` property
info: >
    The value of the name property of this function is "[Symbol.toPrimitive]".

    ES6 Section 17:

    [...]

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
features: [Symbol.toPrimitive]
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Symbol.prototype[Symbol.toPrimitive].name, '[Symbol.toPrimitive]'
);

verifyNotEnumerable(Symbol.prototype[Symbol.toPrimitive], 'name');
verifyNotWritable(Symbol.prototype[Symbol.toPrimitive], 'name');
verifyConfigurable(Symbol.prototype[Symbol.toPrimitive], 'name');
