load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: SyntaxError
"use strict";
function inner() (([arguments, b] = this, c)());
