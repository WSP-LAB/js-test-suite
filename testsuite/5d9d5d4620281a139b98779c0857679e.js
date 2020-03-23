load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (!('oomAfterAllocations' in this))
  quit();

var du = new Debugger();
if (typeof du.drainTraceLogger == "function") {
    var obj = du.drainTraceLogger();
    oomAfterAllocations(1);
    du.drainTraceLogger().length;
}
