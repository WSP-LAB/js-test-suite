load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-unhandlable-oom; allow-oom

if (typeof oomAfterAllocations == "function") {
  Debugger()
  oomAfterAllocations(6)
  Debugger()
}
