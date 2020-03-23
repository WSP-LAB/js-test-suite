load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

setJitCompilerOption('baseline.warmup.trigger', 4);
oomTest((function () {
    gcslice(0);
}))
