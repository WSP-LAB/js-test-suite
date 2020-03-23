load("201224b0d1c296b45befd2285e95dd42.js");
var a = [1, 2, 3];
var p = new Proxy(a, {});
assertEq(p.length, 3);
assertEq(JSON.stringify(p), "[1,2,3]");
