load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.prototype.addDebuggee should not accept invisible-to-debugger globals.
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal({ invisibleToDebugger: true });

assertThrowsInstanceOf(() => { new Debugger(g); }, TypeError);
