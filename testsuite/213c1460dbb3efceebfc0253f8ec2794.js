load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-definemethod
description: Function.prototype.toString on a method (object)
---*/

let f = { /* before */[ /* a */ "f" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }/* after */ }.f;
let g = { [ { a(){} }.a ](){ } }["a(){}"];

assert.sameValue(f.toString(), "[ /* a */ \"f\" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
assert.sameValue("" + g, "[ { a(){} }.a ](){ }");
