load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-98-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.bind(someObject)())
flags: [noStrict]
---*/

var o = {};
function f() { return this===o;};
assert((function () {"use strict"; return f.bind(o)();})());
