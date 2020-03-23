load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator "typeof" uses GetValue
es5id: 11.4.3_A2_T2
es6id: 12.5.6.1
description: If GetBase(x) is null, return "undefined"
---*/

assert.sameValue(
  typeof x, "undefined", '#1: typeof x === "undefined". Actual: ' + (typeof x)
);
