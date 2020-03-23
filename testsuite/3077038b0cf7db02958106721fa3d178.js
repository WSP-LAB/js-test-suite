load("201224b0d1c296b45befd2285e95dd42.js");

NaN = 4;
undefined = 5;
Infinity = 6;

assertEq(isNaN(NaN), true);
assertEq(Infinity > 100, true);
assertEq(undefined != 5, true);

