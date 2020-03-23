load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 Symbol.species is a well-known symbol
es6id: 19.4.2.10
author: Sam Mikes
description: Symbol.species exists
includes: [propertyHelper.js]
---*/

assert(Symbol !== undefined, "Symbol exists");
assert(Symbol.species !== undefined, "Symbol.species exists");

verifyNotWritable(Symbol, "species");
verifyNotEnumerable(Symbol, "species");
verifyNotConfigurable(Symbol, "species");
