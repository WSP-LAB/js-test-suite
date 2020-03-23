load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-8-13
description: Array.prototype.some doesn't visit expandos
---*/

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    callCnt++;
    return false;
  }

  var arr = [0,1,2,3,4,5,6,7,8,9];
  arr["i"] = 10;
  arr[true] = 11;
  

assert.sameValue(arr.some(callbackfn), false, 'arr.some(callbackfn)');
assert.sameValue(callCnt, 10, 'callCnt');
