load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-unhandlable-oom

if (!('oomAfterAllocations' in this))
    quit();

oomAfterAllocations(5)
gcslice(11);
evalInWorker("1");
