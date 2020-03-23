load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: Async function declarations cannot have a line break after `async`
info: Reference error is thrown due to looking up async in strict mode
---*/
assert.throws(ReferenceError, function() {
  async
  function foo() {}
});
