load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: 14.4
description: >
  A newline may not precede the `*` token in a `yield` expression.
negative:
  phase: early
  type: SyntaxError
---*/

(async function*() {
  yield
  * 1;
});
