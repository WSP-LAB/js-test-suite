load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
"use strict"
var g = newGlobal();
g.eval("foo = {}; Object.defineProperty(foo, 'a', {value: 2, writable: false});");
g.foo.a = 3;
