load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-5
description: Array.prototype.map - thisArg is object from object template
---*/

  var res = false;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  function foo(){}
  var f = new foo();
  f.res = true;
  
  var srcArr = [1];
  var resArr = srcArr.map(callbackfn,f);

assert.sameValue(resArr[0], true, 'resArr[0]');
