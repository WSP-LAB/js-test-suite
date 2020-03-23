load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Mapped arguments object is used when the async function has a
  simple parameter list.
flags: [noStrict, async]
---*/


async function foo(a) {
  arguments[0] = 2;
  assert.sameValue(a, 2);

  a = 3;
  assert.sameValue(arguments[0], 3);
}

foo(1).then($DONE, $DONE);
