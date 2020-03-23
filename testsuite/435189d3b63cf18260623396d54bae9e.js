load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-2
description: >
    Array.prototype.map throws ReferenceError if callbackfn is
    unreferenced
---*/

  var arr = new Array(10);
assert.throws(ReferenceError, function() {
    arr.map(foo);
});
