load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.2.5.11
description: RegExp.prototype[Symbol.split] `name` property
info: >
    The value of the name property of this function is "[Symbol.split]".

    ES6 Section 17:

    [...]

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(RegExp.prototype[Symbol.split].name, '[Symbol.split]');

verifyNotEnumerable(RegExp.prototype[Symbol.split], 'name');
verifyNotWritable(RegExp.prototype[Symbol.split], 'name');
verifyConfigurable(RegExp.prototype[Symbol.split], 'name');
