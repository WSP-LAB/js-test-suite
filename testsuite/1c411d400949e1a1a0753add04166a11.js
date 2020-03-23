load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Initial state of the Symbol.iterator property
info: >
    The initial value of the @@iterator property is the same function object as
    the initial value of the Array.prototype.values property.

    Per ES6 section 17, the method should exist on the Array prototype, and it
    should be writable and configurable, but not enumerable.
includes: [propertyHelper.js]
features: [Symbol.iterator]
es6id: 22.1.3.30
---*/

assert.sameValue(Array.prototype[Symbol.iterator], Array.prototype.values);
verifyNotEnumerable(Array.prototype, Symbol.iterator);
verifyWritable(Array.prototype, Symbol.iterator);
verifyConfigurable(Array.prototype, Symbol.iterator);
