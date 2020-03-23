load("201224b0d1c296b45befd2285e95dd42.js");

Array.prototype.__proto__ = Function.prototype;
var x = [1,2,3];
x[0];

[].__proto__.foo = true;
eval("[]");
