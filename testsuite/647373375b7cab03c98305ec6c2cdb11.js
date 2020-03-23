load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-ii-1
description: Array.prototype.forEach - callbackfn called with correct parameters
---*/

  var bPar = true;
  var bCalled = false;
  function callbackfn(val, idx, obj)
  {
    bCalled = true;
    if(obj[idx] !== val)
      bPar = false;
  }

  var arr = [0,1,true,null,new Object(),"five"];
  arr[999999] = -6.6;
  arr.forEach(callbackfn);

assert.sameValue(bCalled, true, 'bCalled');
assert.sameValue(bPar, true, 'bPar');
