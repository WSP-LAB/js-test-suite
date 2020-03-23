load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-13-b-3-s
description: arguments.caller is non-configurable in strict mode
flags: [onlyStrict]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"caller");

  assert.sameValue(desc.configurable, false, 'desc.configurable');
  assert.sameValue(desc.enumerable, false, 'desc.enumerable');
  assert.sameValue(desc.hasOwnProperty('value'), false, 'desc.hasOwnProperty("value")');
  assert.sameValue(desc.hasOwnProperty('writable'), false, 'desc.hasOwnProperty("writable")');
  assert.sameValue(desc.hasOwnProperty('get'), true, 'desc.hasOwnProperty("get")');
  assert.sameValue(desc.hasOwnProperty('set'), true, 'desc.hasOwnProperty("set")');
 }
testcase();
