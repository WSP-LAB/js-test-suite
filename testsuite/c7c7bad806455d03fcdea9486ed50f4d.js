load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-10-3
description: Array.prototype.reduceRight - subclassed array with length 1
---*/

  foo.prototype = [1];
  function foo() {}
  var f = new foo();
  
  function cb(){}

assert.sameValue(f.reduceRight(cb), 1, 'f.reduceRight(cb)');
