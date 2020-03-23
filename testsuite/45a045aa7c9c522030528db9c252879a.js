load("201224b0d1c296b45befd2285e95dd42.js");
// See bug 763313
load("e2c808509c360663d6364e14c187fc8f.js");
function f([a]) { return a; }
var i = 0;
var o = {[Symbol.iterator]: function () { i++; return {
  next: function () { i++; return {value: 42, done: false}; }}}};
assertEq(f(o), 42);
assertEq(i, 2);
