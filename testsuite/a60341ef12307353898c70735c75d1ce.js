load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| module

import c from "defaultClass.js";
let o = new c();
assertEq(o.triple(14), 42);
