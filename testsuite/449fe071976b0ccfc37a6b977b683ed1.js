load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-7-1
description: >
    Array.prototype.reduce returns initialValue if 'length' is 0 and
    initialValue is present (empty array)
---*/

  function cb(){}
assert.sameValue([].reduce(cb,1), 1, '[].reduce(cb,1)');
