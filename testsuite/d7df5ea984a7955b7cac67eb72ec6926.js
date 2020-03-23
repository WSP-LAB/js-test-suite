load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.3-2
description: undefined is not writable, should throw TypeError in strict mode
flags: [onlyStrict]
---*/

var global = this;

assert.throws(TypeError, function() {
  global["undefined"] = 5;  // Should throw a TypeError as per 8.12.5
});
assert.sameValue(global["undefined"], void 0);
assert.sameValue(undefined, void 0);
