load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.4
description: >
    Behavior when `this` value is an object with a [[SymboldData]] internal
    slot
info: >
    1. Let s be the this value.
    2. If Type(s) is Symbol, return s.
    3. If Type(s) is not Object, throw a TypeError exception.
    4. If s does not have a [[SymbolData]] internal slot, throw a TypeError
       exception.
    5. Return the value of s’s [[SymbolData]] internal slot.
features: [Symbol.toPrimitive]
---*/

assert.sameValue(
  Object(Symbol.toPrimitive)[Symbol.toPrimitive](), Symbol.toPrimitive
);
