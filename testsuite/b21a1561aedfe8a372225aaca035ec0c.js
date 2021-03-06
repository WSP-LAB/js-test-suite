load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  %AsyncFunction% has a length of 1 with writable false, enumerable false, configurable true.
includes: [propertyHelper.js]
---*/

var AsyncFunction = async function foo() { }.constructor;
assert.sameValue(AsyncFunction.length, 1);
verifyNotWritable(AsyncFunction, 'length');
verifyNotEnumerable(AsyncFunction, 'length');
verifyConfigurable(AsyncFunction, 'length');
