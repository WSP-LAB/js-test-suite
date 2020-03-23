load("201224b0d1c296b45befd2285e95dd42.js");
// Arrow right-associativity with =

var a, b, c;
a = b = c => a = b = c;
assertEq(a, b);
a(13);
assertEq(b, 13);
assertEq(a, 13);
