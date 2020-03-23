load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-1
description: Array.prototype.indexOf when fromIndex is string
---*/

  var a = [1,2,1,2,1,2];

assert.sameValue(a.indexOf(2,"2"), 3, '"2" resolves to 2');
assert.sameValue(a.indexOf(2,"one"), 1, '"one" resolves to 0');
