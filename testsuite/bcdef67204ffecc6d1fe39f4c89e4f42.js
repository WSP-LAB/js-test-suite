load("201224b0d1c296b45befd2285e95dd42.js");
var x = Array.concat(Object.freeze([{}]));
assertEq(x.length, 1);
assertEq(0 in x, true);
assertEq(JSON.stringify(x[0]), "{}");
