load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of applying "typeof" operator to null is "object"
es5id: 11.4.3_A3.2
es6id: 12.5.6.1
description: typeof null === "object"
---*/

assert.sameValue(
  typeof null,
   "object",
  '#1: typeof null === "object". Actual: ' + (typeof null)
);

assert.sameValue(
  typeof RegExp("0").exec("1"),
   "object",
  '#2: typeof RegExp("0").exec("1") === "object". Actual: ' + (typeof RegExp("0").exec("1"))
);
