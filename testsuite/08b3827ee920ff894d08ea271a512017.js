load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-1-s
description: Array.prototype.forEach - thisArg not passed to strict callbackfn
flags: [noStrict]
---*/

  var innerThisCorrect = false;
  
  function callbackfn(val, idx, obj) {
    "use strict";
    innerThisCorrect = this===undefined;
    return true;
  }

  [1].forEach(callbackfn);

assert(innerThisCorrect, 'innerThisCorrect !== true');
