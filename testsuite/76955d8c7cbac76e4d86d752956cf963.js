load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-5
description: Array.prototype.lastIndexOf when fromIndex is null
---*/

  var a = new Array(1,2,1);

// null resolves to 0
assert.sameValue(a.lastIndexOf(2,null), -1, 'a.lastIndexOf(2,null)');
assert.sameValue(a.lastIndexOf(1,null), 0, 'a.lastIndexOf(1,null)');
