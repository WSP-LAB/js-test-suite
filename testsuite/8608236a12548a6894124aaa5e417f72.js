load("201224b0d1c296b45befd2285e95dd42.js");
// This shouldn't segfault.

var g = newGlobal();
g.eval(`function f() { return function() {
  function g() {}
}; }`);
new Debugger(g).findObjects();
