load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-10-4
description: Array.prototype.reduce - subclassed array with length more than 1
---*/

  foo.prototype = new Array(1, 2, 3, 4);
  function foo() {}
  var f = new foo();
  
  function cb(prevVal, curVal, idx, obj){return prevVal + curVal;}

assert.sameValue(f.reduce(cb), 10, 'f.reduce(cb)');
