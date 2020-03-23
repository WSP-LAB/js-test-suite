load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of number conversion from undefined value is NaN
es5id: 9.3_A1_T1
description: Undefined convert to Number by explicit transformation
---*/

assert.sameValue(Number(undefined), NaN);
