load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.8.2.16_A3
description: Return arg if -0 or +0
---*/

assert.sameValue(Math.sin(0), 0, "+0");
assert.sameValue(Math.sin(-0), -0, "-0");
