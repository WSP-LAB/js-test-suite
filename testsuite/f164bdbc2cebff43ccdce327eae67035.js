load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-4.a-3-s
description: >
    delete operator throws TypeError when deleting a non-configurable
    data property in strict mode
flags: [onlyStrict]
---*/

  var o = {};
  var desc = { value : 1 }; // all other attributes default to false
  Object.defineProperty(o, "foo", desc);
  
  // Now, deleting o.foo should throw TypeError because [[Configurable]] on foo is false.
assert.throws(TypeError, function() {
    delete o.foo;
});
