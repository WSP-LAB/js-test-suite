load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-1
description: >
    delete operator returns false when deleting a direct reference to
    a var
flags: [noStrict]
---*/

function testcase() {
  var x = 1;

  // Now, deleting 'x' directly should fail;
  var d = delete x;

  assert.sameValue(d, false, 'd');
  assert.sameValue(x, 1, 'x');
 }
testcase();
