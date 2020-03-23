load("201224b0d1c296b45befd2285e95dd42.js");
// Test an empty allocation log.

const root = newGlobal();
const dbg = new Debugger();
dbg.addDebuggee(root)

dbg.memory.trackingAllocationSites = true;
const allocs = dbg.memory.drainAllocationsLog();
assertEq(allocs.length, 0);
