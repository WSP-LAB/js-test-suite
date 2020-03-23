load("201224b0d1c296b45befd2285e95dd42.js");
// defineProperty accepts undefined for desc.get/set.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

gw.defineProperty("p", {get: undefined, set: undefined});

var desc = g.eval("Object.getOwnPropertyDescriptor(this, 'p')");
assertEq("get" in desc, true);
assertEq("set" in desc, true);
assertEq(desc.get, undefined);
assertEq(desc.set, undefined);
