load("201224b0d1c296b45befd2285e95dd42.js");
// obj.defineProperty can define a data property with object value.

var g = newGlobal();
g.eval("var a = {};");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var desc = gw.getOwnPropertyDescriptor("a");
assertEq(desc.value instanceof Debugger.Object, true);
gw.defineProperty("b", desc);
assertEq(g.a, g.b);
