load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal("same-compartment");
try {
    evalcx("'use strict'; (function() { x = 33; })()", g);
    assertEq(0, 1);
} catch(e) {
    assertEq(e.toString().includes("variable x"), true);
}
