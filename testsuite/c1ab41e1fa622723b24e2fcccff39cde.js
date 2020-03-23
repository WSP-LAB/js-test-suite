load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 ES6 spec 'get [Symbol.species]'
es6id: 21.2.4.2, 22.1.2.5, 22.2.2.4, 23.1.2.2, 23.2.2.2
author: Sam Mikes
description: Symbol.species getters have defined names
includes: [propertyHelper.js]
---*/

function getGetterName(obj, name) {
    var getter = Object.getOwnPropertyDescriptor(obj, Symbol.species).get;
    return getter && getter.name;
}

assert.sameValue(getGetterName(Array, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(Map, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(Promise, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(RegExp, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(Set, Symbol.species), "get [Symbol.species]");

