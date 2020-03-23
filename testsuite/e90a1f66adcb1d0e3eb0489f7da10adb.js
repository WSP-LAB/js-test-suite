load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-class-definitions-runtime-semantics-evaluation
description: Function.prototype.toString on a class expression (implicit constructor)
---*/

let A = /* before */class /* a */ A /* b */ { /* c */ }/* after */;
let B = /* before */class /* a */ B /* b */ extends /* c */ A /* d */ { /* e */ }/* after */;
let C = /* before */class /* a */ C /* b */ extends /* c */ B /* d */ { /* e */ m /* f */ ( /* g */ ) /* h */ { /* i */ } /* j */ }/* after */;

assert.sameValue(A.toString(), "class /* a */ A /* b */ { /* c */ }");
assert.sameValue(B.toString(), "class /* a */ B /* b */ extends /* c */ A /* d */ { /* e */ }");
assert.sameValue(C.toString(), "class /* a */ C /* b */ extends /* c */ B /* d */ { /* e */ m /* f */ ( /* g */ ) /* h */ { /* i */ } /* j */ }");
