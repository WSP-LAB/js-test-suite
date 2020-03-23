load("201224b0d1c296b45befd2285e95dd42.js");
// Test that drainAllocationsLog fails when we aren't trackingAllocationSites.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

const root = newGlobal();
const dbg = new Debugger();

dbg.memory.trackingAllocationSites = true;
root.eval("this.alloc1 = {}");
dbg.memory.trackingAllocationSites = false;
root.eval("this.alloc2 = {};");

assertThrowsInstanceOf(() => dbg.memory.drainAllocationsLog(),
                       Error);
