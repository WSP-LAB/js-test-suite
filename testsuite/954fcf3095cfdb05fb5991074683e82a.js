load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 ArrayBuffer has a property at `Symbol.species`
esid: sec-get-arraybuffer-@@species
es6id: 24.1.3.3
author: Sam Mikes
description: ArrayBuffer[Symbol.species] exists per spec
features: [ ArrayBuffer, Symbol.species ]
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyNotWritable(ArrayBuffer, Symbol.species, Symbol.species);
verifyNotEnumerable(ArrayBuffer, Symbol.species);
verifyConfigurable(ArrayBuffer, Symbol.species);
