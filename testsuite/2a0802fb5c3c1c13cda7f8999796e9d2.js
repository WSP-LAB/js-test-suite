load("201224b0d1c296b45befd2285e95dd42.js");
// Test that disabling the debugger disables allocation tracking.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

const dbg = new Debugger();
const root = newGlobal();
dbg.addDebuggee(root);

dbg.memory.trackingAllocationSites = true;
dbg.enabled = false;

root.eval("this.alloc = {}");

// We shouldn't accumulate allocations in our log while the debugger is
// disabled.
let allocs = dbg.memory.drainAllocationsLog();
assertEq(allocs.length, 0);
