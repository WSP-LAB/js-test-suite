load("201224b0d1c296b45befd2285e95dd42.js");
// Check Debugger.Object.prototype.unwrap surfaces.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger();
var g = newGlobal();
var gw = dbg.addDebuggee(g);

assertEq(Object.getOwnPropertyDescriptor(gw, 'unwrap'), undefined);
var d = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(gw), 'unwrap');
assertEq(d.enumerable, false);
assertEq(d.configurable, true);
assertEq(d.writable, true);

assertEq(typeof gw.unwrap, "function");
assertEq(gw.unwrap.length, 0);
assertEq(gw.unwrap.name, "unwrap");

// It can be called.
gw.unwrap();

// You shouldn't be able to apply the accessor to the prototype.
assertThrowsInstanceOf(function () { Debugger.Object.prototype.unwrap(); }, TypeError);
