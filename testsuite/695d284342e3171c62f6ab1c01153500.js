load("201224b0d1c296b45befd2285e95dd42.js");
// no 'arguments' binding in arrow functions

var arguments = [];
var f = () => arguments;
assertEq(f(), arguments);
