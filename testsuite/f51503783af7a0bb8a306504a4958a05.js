load("201224b0d1c296b45befd2285e95dd42.js");
const dbg = new Debugger();
const g = evalcx("lazy");
dbg.addDebuggee(g);
dbg.memory.trackingAllocationSites = true;
g.eval("this.alloc = {}");
