load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.prototype.makeGlobalObjectReference only accepts actual global objects.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger;

assertThrowsInstanceOf(() => dbg.makeGlobalObjectReference(true), TypeError);
assertThrowsInstanceOf(() => dbg.makeGlobalObjectReference("foo"), TypeError);
assertThrowsInstanceOf(() => dbg.makeGlobalObjectReference(12), TypeError);
assertThrowsInstanceOf(() => dbg.makeGlobalObjectReference(undefined), TypeError);
assertThrowsInstanceOf(() => dbg.makeGlobalObjectReference(null), TypeError);
assertThrowsInstanceOf(() => dbg.makeGlobalObjectReference({ xlerb: "sbot" }), TypeError);
assertEq(dbg.makeGlobalObjectReference(this) instanceof Debugger.Object, true);
