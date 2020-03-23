load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 Map has a property at `Symbol.species`
esid: sec-get-map-@@species
es6id: 23.1.2.2
author: Sam Mikes
description: Map[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

var desc = Object.getOwnPropertyDescriptor(Map, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyNotWritable(Map, Symbol.species, Symbol.species);
verifyNotEnumerable(Map, Symbol.species);
verifyConfigurable(Map, Symbol.species);
