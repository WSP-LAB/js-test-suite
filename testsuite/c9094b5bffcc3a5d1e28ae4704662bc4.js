load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");

// Single-step profiling currently only works in the ARM simulator
if (!getBuildConfiguration()["arm-simulator"])
    quit();

enableGeckoProfiling();
enableSingleStepProfiling();
var m = asmCompile(USE_ASM + 'function f() {} return f');
asmLink(m)();
asmLink(m)();
