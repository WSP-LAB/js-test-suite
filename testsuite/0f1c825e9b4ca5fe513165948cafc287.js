load("201224b0d1c296b45befd2285e95dd42.js");
// || binds tighter than =>.

var f;
f = a => a || 'nothing';  // f = ((a => a) || 'nothing');
assertEq(f.length, 1);
assertEq(f(0), 'nothing');
assertEq(f(1), 1);
