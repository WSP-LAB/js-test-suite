load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-57-s
description: >
    checking 'this' (Literal setter includes strict directive prologue)
---*/

var x = 2;
var o = { set foo(stuff) { "use strict"; x=this;  } }
o.foo = 3;

assert.sameValue(x, o, 'x');
