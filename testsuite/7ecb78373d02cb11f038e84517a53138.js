load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-77-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.bind(null)())
---*/

function f() { "use strict"; return this===null;};

assert(f.bind(null)(), 'f.bind(null)() !== true');
