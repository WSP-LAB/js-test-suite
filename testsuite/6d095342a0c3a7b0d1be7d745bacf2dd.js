load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-7
description: >
    Array.prototype.lastIndexOf must return correct index (self
    reference)
---*/

  var a = new Array(0,1,2,3);  
  a[2] = a;

assert.sameValue(a.lastIndexOf(a), 2, 'a.lastIndexOf(a)');
assert.sameValue(a.lastIndexOf(3), 3, 'a.lastIndexOf(3)');
