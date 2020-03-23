load("201224b0d1c296b45befd2285e95dd42.js");
// Iterators of different collection types have different prototypes.

load("e2c808509c360663d6364e14c187fc8f.js");

var aproto = Object.getPrototypeOf(Array()[Symbol.iterator]());
var mproto = Object.getPrototypeOf((new Map())[Symbol.iterator]());
var sproto = Object.getPrototypeOf((new Set())[Symbol.iterator]());
assertEq(aproto !== mproto, true);
assertEq(aproto !== sproto, true);
assertEq(mproto !== sproto, true);
assertEq(aproto.next !== mproto.next, true);
assertEq(aproto.next !== sproto.next, true);
assertEq(mproto.next !== sproto.next, true);
