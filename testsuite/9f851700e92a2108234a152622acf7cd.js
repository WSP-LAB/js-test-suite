load("201224b0d1c296b45befd2285e95dd42.js");
// Braces after => indicate a block body as opposed to an expression body.

var f = () => {};
assertEq(f(), undefined);
var g = () => ({});
assertEq(typeof g(), 'object');
