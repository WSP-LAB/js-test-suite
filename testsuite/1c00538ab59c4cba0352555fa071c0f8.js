load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.prototype.findObjects should not expose internal JSFunction objects.

var g = newGlobal();
g.eval(`function f() { return function() {}; }`);
new Debugger(g).findObjects();
