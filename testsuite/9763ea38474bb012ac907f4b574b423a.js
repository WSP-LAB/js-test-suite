load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-4
description: Array.prototype.lastIndexOf when fromIndex is undefined
---*/

  var a = new Array(1,2,1);

// undefined resolves to 0, no second argument resolves to len
assert.sameValue(a.lastIndexOf(2,undefined), -1, 'a.lastIndexOf(2,undefined)');
assert.sameValue(a.lastIndexOf(1,undefined), 0, 'a.lastIndexOf(1,undefined)');
assert.sameValue(a.lastIndexOf(1), 2, 'a.lastIndexOf(1)');
