load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.5-1
description: Array instances have [[Class]] set to 'Array'
---*/

  var a = [];
  var s = Object.prototype.toString.call(a);

assert.sameValue(s, '[object Array]', 's');
