load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-2
description: Array.prototype.forEach - thisArg is Object
---*/

  var res = false;
  var o = new Object();
  o.res = true;
  var result;
  function callbackfn(val, idx, obj)
  {
    result = this.res;
  }

  var arr = [1];
  arr.forEach(callbackfn,o)

assert.sameValue(result, true, 'result');
