load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 Array has a property at `Symbol.species`
esid: sec-get-array-@@species
es6id: 22.1.2.5
author: Sam Mikes
description: Array[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

var desc = Object.getOwnPropertyDescriptor(Array, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyNotWritable(Array, Symbol.species, Symbol.species);
verifyNotEnumerable(Array, Symbol.species);
verifyConfigurable(Array, Symbol.species);
