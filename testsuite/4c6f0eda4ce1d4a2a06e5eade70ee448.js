load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.unwrap should not let us see things in
// invisible-to-Debugger compartments.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal({ invisibleToDebugger: true });

var dbg = new Debugger;

// Create a wrapper in our compartment for the global.
// Note that makeGlobalObjectReference won't do: it tries to dereference as far
// as it can go.
var /* yo */ DOwg = dbg.makeGlobalObjectReference(this).makeDebuggeeValue(g);

assertThrowsInstanceOf(() => DOwg.unwrap(), Error);
