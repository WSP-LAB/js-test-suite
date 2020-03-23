load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-4.a-15
description: delete operator returns true when deleting Array expandos
---*/

  var a = [1,2,3]
  a.x = 10;
  var d = delete a.x;

assert.sameValue(d, true, 'd');
assert.sameValue(a.x, undefined, 'a.x');
