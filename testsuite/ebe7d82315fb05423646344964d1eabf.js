load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-6
description: >
    Array.prototype.filter visits deleted element in array after the
    call when same index is also present in prototype
---*/

  function callbackfn(val, idx, obj)
  {
    delete srcArr[2];
    delete srcArr[4];
    if(val > 0)
      return true;
    else
      return false;
   }

  Array.prototype[4] = 5;
  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.filter(callbackfn);
  delete Array.prototype[4];

// only one element deleted
assert.sameValue(resArr.length, 4, 'resArr.length');
assert.sameValue(resArr[0], 1, 'resArr[0]');
assert.sameValue(resArr[3], 5, 'resArr[3]');
