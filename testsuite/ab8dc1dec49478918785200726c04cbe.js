load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.unsafeDereference returns the referent directly.

var g = newGlobal();
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

assertEq(gw.getOwnPropertyDescriptor('Math').value.unsafeDereference(), g.Math);

g.eval('var obj = {}');
assertEq(gw.getOwnPropertyDescriptor('obj').value.unsafeDereference(), g.obj);
