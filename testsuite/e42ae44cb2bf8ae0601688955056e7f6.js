load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-ii-2
description: Array.prototype.forEach - callbackfn takes 3 arguments
---*/

  var parCnt = 3;
  var bCalled = false
  function callbackfn(val, idx, obj)
  { 
    bCalled = true;
    if(arguments.length !== 3)
      parCnt = arguments.length;   //verify if callbackfn was called with 3 parameters
  }

  var arr = [0,1,2,3,4,5,6,7,8,9];
  arr.forEach(callbackfn);

assert.sameValue(bCalled, true, 'bCalled');
assert.sameValue(parCnt, 3, 'parCnt');