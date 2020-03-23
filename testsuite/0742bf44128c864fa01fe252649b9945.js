load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.7.3.1-2
description: Number.prototype, initial value is the Number prototype object
---*/

  // assume that Number.prototype has not been modified.

assert.sameValue(Object.getPrototypeOf(new Number(42)), Number.prototype, 'Object.getPrototypeOf(new Number(42))');
