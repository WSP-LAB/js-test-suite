load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-10-6gs
description: >
    Strict Mode - SyntaxError is thrown if a function using the
    Function constructor has two identical parameters in (local)
    strict mode
flags: [noStrict]
---*/

assert.throws(SyntaxError, function() {
  new Function('param_1', 'param_2', 'param_1', '"use strict";return 0;');
});
