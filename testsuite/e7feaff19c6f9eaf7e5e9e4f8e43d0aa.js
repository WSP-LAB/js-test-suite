load("201224b0d1c296b45befd2285e95dd42.js");
// Test creating a Debugger in a sandbox, debugging the initial global.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("var dbg = new Debugger(debuggeeGlobal);");
assertEq(g.eval("dbg instanceof Debugger"), true);

// The Debugger constructor from this compartment will not accept as its argument
// an Object from this compartment. Shenanigans won't fool the membrane.
g.parent = this;
assertThrowsInstanceOf(function () { g.eval("parent.Debugger(parent.Object())"); }, TypeError);
