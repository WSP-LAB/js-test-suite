load("201224b0d1c296b45befd2285e95dd42.js");
var C = {};
var B = new Proxy(C, {});
var A = Object.create(B);
B.x = 1;
assertEq(C.x, 1);
