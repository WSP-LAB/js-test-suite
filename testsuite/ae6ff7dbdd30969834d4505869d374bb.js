load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.4
description: Symbol.prototype[Symbol.toPrimitive] `length` property
info: >
    ES6 section 17:

    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this value
    is equal to the largest number of named arguments shown in the subclause
    headings for the function description, including optional parameters.

    [...]

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
features: [Symbol.toPrimitive]
includes: [propertyHelper.js]
---*/

assert.sameValue(Symbol.prototype[Symbol.toPrimitive].length, 1);

verifyNotEnumerable(Symbol.prototype[Symbol.toPrimitive], 'length');
verifyNotWritable(Symbol.prototype[Symbol.toPrimitive], 'length');
verifyConfigurable(Symbol.prototype[Symbol.toPrimitive], 'length');
