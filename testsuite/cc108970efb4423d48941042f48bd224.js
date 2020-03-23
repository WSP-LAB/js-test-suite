load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 Set has a property at `Symbol.species`
esid: sec-get-set-@@species
es6id: 23.2.2.2
author: Sam Mikes
description: Set[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

var desc = Object.getOwnPropertyDescriptor(Set, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyNotWritable(Set, Symbol.species, Symbol.species);
verifyNotEnumerable(Set, Symbol.species);
verifyConfigurable(Set, Symbol.species);
