load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Async function instances do not have a prototype property.
---*/
async function foo() { };
assert.sameValue(foo.prototype, undefined, 'foo.prototype should be undefined');
assert(!foo.hasOwnProperty('prototype'), 'foo.prototype should not exist');
