load("201224b0d1c296b45befd2285e95dd42.js");
function f1() { { let arguments = 42; return arguments } }
assertEq(f1(), 42);

function f2() { { let arguments; return arguments } }
assertEq(f2(), undefined);
