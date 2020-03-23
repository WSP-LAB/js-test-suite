load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function die() { throw "x"; }
var ok = true;
function f(a = die()) { ok = false; }
assertThrowsValue(f, "x");
