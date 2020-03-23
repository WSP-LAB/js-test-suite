load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-12
description: Array.prototype.forEach doesn't visit expandos
---*/

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    callCnt++;
  }
  var arr = [1,2,3,4,5];
  arr["i"] = 10;
  arr[true] = 11;

  arr.forEach(callbackfn);

assert.sameValue(callCnt, 5, 'callCnt');
