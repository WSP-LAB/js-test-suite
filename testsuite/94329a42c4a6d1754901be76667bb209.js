load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: 14.4
description: >
  The right-hand side of a `yield *` expression may appear on a new line.
flags: [async]
---*/

var g = async function*() {};

(async function*() {
  yield*
  g();
})().next().then(function(result) {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
}).then($DONE, $DONE);