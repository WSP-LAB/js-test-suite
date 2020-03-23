load("201224b0d1c296b45befd2285e95dd42.js");
// Test retrieving the log when allocation tracking hasn't ever been enabled.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

const root = newGlobal();
const dbg = new Debugger();
dbg.addDebuggee(root)

assertThrowsInstanceOf(() => dbg.memory.drainAllocationsLog(),
                       Error);
