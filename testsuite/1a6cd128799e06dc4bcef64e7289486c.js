load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 Symbol.species is retained on subclassing
es6id: 
author: Sam Mikes
description: Symbol.species is retained on subclassing
includes: [propertyHelper.js]
---*/

class MyRegExp extends RegExp {
};

assert.sameValue(MyRegExp[Symbol.species], MyRegExp);

