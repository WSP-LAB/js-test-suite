load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2016 Kevin Gibbons.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arguments-exotic-objects
description: arguments.caller does not exist
---*/

function getArguments() {
  return arguments;
}
assert.sameValue(Object.getOwnPropertyDescriptor(getArguments(), 'caller'), undefined, 'arguments.caller does not exist');
