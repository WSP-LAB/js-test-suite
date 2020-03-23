load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.4-0
description: >
    elements elided at the end of an array do not contribute to its
    length
---*/

  var a = [,];

assert.sameValue(a.length, 1, 'a.length');
