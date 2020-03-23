load("201224b0d1c296b45befd2285e95dd42.js");
// => binds tighter than , (on the other side)

var h = (a => a, 13);  // sequence expression
assertEq(h, 13);
