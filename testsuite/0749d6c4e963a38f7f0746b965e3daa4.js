load("201224b0d1c296b45befd2285e95dd42.js");

var x = Array(4);
x[0] = 1;
x[1] = 2;
x[2] = 3;
var y = x.concat();
assertEq(y[3], undefined);

var z = x.concat(/abc/).pop();
assertEq(z.source, "abc");
