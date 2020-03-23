load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-3-1
description: >
    Object.keys returns the standard built-in Array containing own
    enumerable properties
---*/

  var o = { x: 1, y: 2};

  var a = Object.keys(o);

assert.sameValue(a.length, 2, 'a.length');
assert.sameValue(a[0], 'x', 'a[0]');
assert.sameValue(a[1], 'y', 'a[1]');
