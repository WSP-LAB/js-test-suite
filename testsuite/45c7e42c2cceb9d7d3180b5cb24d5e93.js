load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.2-2-c-1
description: >
    Direct val code in non-strict mode - can instantiate variable in
    calling context
flags: [noStrict]
---*/

function testcase() {
  var x = 0;
  function inner() {
     eval("var x = 1");
     assert.sameValue(x, 1, "x");
  }
  inner();
}
testcase();
