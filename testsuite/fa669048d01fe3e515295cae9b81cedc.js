load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await's operand is a UnaryExpression
flags: [async]
---*/

async function foo() {
  let x = 1;
  let y = await x++;
  assert.sameValue(y, 1);
  assert.sameValue(x, 2);
}
foo().then($DONE, $DONE);
