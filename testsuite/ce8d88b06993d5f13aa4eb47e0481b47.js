load("201224b0d1c296b45befd2285e95dd42.js");
load("bd6074029bcfcc1e606e7bbf159cf3d8.js");
var orNaNTest1 = new Function("return orTestHelper(NaN, NaN, 10);");
assertEq(orNaNTest1(), 0);
