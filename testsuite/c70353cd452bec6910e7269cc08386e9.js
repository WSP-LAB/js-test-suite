load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-createdynamicfunction
description: Function.prototype.toString on a function created with the Function constructor
---*/

let f = /* before */Function("a", " /* a */ b, c /* b */ //", "/* c */ ; /* d */ //")/* after */;

assert.sameValue(f.toString(), "function anonymous(a, /* a */ b, c /* b */ //\n) {\n/* c */ ; /* d */ //\n}");
