load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-2-9
description: Function.prototype.bind allows Target to be a constructor (Date)
---*/

  var bdc = Date.bind(null);
  var s = bdc(0, 0, 0);

assert.sameValue(typeof(s), 'string', 'typeof(s)');
