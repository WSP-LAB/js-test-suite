load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var f1 = g.evaluate("(function (x) { function inner() {}; })");
gczeal(2, 1); // Exercise all the edge cases in cloning, please.
var f2 = clone(f1);
