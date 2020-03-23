load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: Return 0 if all arguments being are 0 or -0.
---*/

assert.sameValue(Math.hypot(0, 0), 0, 'Math.hypot(0, 0)');
assert.sameValue(Math.hypot(0, -0), 0, 'Math.hypot(0, -0)');
assert.sameValue(Math.hypot(-0, 0), 0, 'Math.hypot(-0, 0)');
assert.sameValue(Math.hypot(-0, -0), 0, 'Math.hypot(-0, -0)');
