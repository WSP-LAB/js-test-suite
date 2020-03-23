load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-1
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (empty array)
---*/

  var callCnt = 0;
  function cb(){callCnt++}
  var i = [].forEach(cb);

assert.sameValue(callCnt, 0, 'callCnt');
