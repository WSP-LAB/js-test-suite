load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-12-2
description: arguments.callee has correct attributes
flags: [noStrict]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"callee");

  assert.sameValue(desc.configurable, true, 'desc.configurable');
  assert.sameValue(desc.enumerable, false, 'desc.enumerable');
  assert.sameValue(desc.writable, true, 'desc.writable');
  assert.sameValue(desc.hasOwnProperty('get'), false, 'desc.hasOwnProperty("get")');
  assert.sameValue(desc.hasOwnProperty('set'), false, 'desc.hasOwnProperty("set")');
 }
testcase();
