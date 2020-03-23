load("201224b0d1c296b45befd2285e95dd42.js");

x = 30;
assertEq(x, 30);

for (var i = 0; i < 10000; i++)
  this[i] = 0;

assertEq(x, 30);
