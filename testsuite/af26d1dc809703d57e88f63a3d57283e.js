load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-3-2
description: >
    Object.keys returns the standard built-in Array containing own
    enumerable properties (function)
---*/

  function foo() {}
  foo.x = 1;
  
  var a = Object.keys(foo);

assert.sameValue(a.length, 1, 'a.length');
assert.sameValue(a[0], 'x', 'a[0]');
