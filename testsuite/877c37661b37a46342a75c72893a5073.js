load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.17
author: Ryan Lewis
description: Math.fround should return arg if called with 0 or -0.
---*/

assert.sameValue(Math.fround(0), 0, 'Math.fround(0)');
assert.sameValue(Math.fround(-0), -0, 'Math.fround(-0)');
