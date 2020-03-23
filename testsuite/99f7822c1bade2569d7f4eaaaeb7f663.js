load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-3-a-1gs
description: >
    Strict Mode - ReferenceError is thrown if LeftHandSide evaluate to
    an unresolvable Reference
flags: [onlyStrict]
---*/

assert.throws(ReferenceError, function() {
  b = 11;
});
