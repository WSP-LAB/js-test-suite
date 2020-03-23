load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 Promise has a property at `Symbol.species`
es6id: 6.1.5.1
author: Sam Mikes
description: Promise[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

assert.sameValue(Promise[Symbol.species], Promise, "Promise[Symbol.species] is Promise");

verifyNotWritable(Promise, Symbol.species, Symbol.species);
verifyNotEnumerable(Promise, Symbol.species);
verifyConfigurable(Promise, Symbol.species);
