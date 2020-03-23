load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is -Infinity, Math.exp(x) is +0
es5id: 15.8.2.8_A5
description: Checking if Math.exp(-Infinity) is +0
---*/

assert.sameValue(Math.exp(-Infinity), 0);
