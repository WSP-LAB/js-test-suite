load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-unhandlable-oom

if (!('oomAfterAllocations' in this))
    quit();

setGCCallback({
    action: "majorGC",
});
oomAfterAllocations(50);
