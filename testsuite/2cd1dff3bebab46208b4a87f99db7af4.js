load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-4-4
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 (generic
    'array' with length 0 )
---*/

 var i = Array.prototype.lastIndexOf.call({length: 0}, 1);
  

assert.sameValue(i, -1, 'i');
