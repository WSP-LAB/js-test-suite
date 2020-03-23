load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

"use strict"
var g = newGlobal();

g.eval("bar = {}; Object.freeze(bar);");
g.bar.a = 4;
