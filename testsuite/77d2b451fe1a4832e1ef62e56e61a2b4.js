load("201224b0d1c296b45befd2285e95dd42.js");
var count = 0;
var a = Array.prototype.concat.call([], [, []], []);
a.forEach(function() { count++; });
assertEq(count, 1);
