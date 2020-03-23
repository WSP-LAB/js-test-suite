load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-1
description: >
    Array.prototype.reduceRight - callbackfn called with correct
    parameters (initialvalue not passed)
---*/

  function callbackfn(prevVal, curVal, idx, obj)
  {
    if(idx+1 < obj.length && obj[idx] === curVal && obj[idx+1] === prevVal)
      return curVal;
    else 
      return false;
  }

  var arr = [0,1,true,null,new Object(),"five"];

assert.sameValue(arr.reduceRight(callbackfn), 0, 'arr.reduceRight(callbackfn)');
