load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-1
description: Array.prototype.every - callbackfn called with correct parameters
---*/

  function callbackfn(val, Idx, obj)
  {
    if(obj[Idx] === val)
      return true;
  }

  var arr = [0,1,2,3,4,5,6,7,8,9];
  

assert.sameValue(arr.every(callbackfn), true, 'arr.every(callbackfn)');
