load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.acosh(1) returns +0
es6id: 20.2.2.3
info: |
  Math.acosh ( x )

  - If x is 1, the result is +0.
---*/

assert.sameValue(Math.acosh(+1), 0, "Math.acosh should produce 0 for +1");
