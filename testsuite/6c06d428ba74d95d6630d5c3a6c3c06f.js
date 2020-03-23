load("201224b0d1c296b45befd2285e95dd42.js");
// Property values that are objects are reflected as Debugger.Objects.

var g = newGlobal();
var dbg = Debugger();
var gobj = dbg.addDebuggee(g);
g.self = g;
var desc = gobj.getOwnPropertyDescriptor("self");
assertEq(desc.value, gobj);
