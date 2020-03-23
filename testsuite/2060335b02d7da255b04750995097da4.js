load("201224b0d1c296b45befd2285e95dd42.js");
// If the debuggee cannot be put into debug mode, throw.

// Run this test only if this compartment can't be put into debug mode.
var canEnable = true;
if (typeof setDebugMode === 'function') {
    try {
        setDebugMode(true);
    } catch (exc) {
        canEnable = false;
    }
}

if (!canEnable) {
    var g = newGlobal();
    g.libdir = libdir;
    g.eval("load("19d7bc83becec11ee32c3a85fbc4d93d.js");");
    g.parent = this;
    g.eval("assertThrowsInstanceOf(function () { new Debugger(parent); }, Error);");
}
