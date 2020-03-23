load("201224b0d1c296b45befd2285e95dd42.js");
if (!this['SharedArrayBuffer'])
    quit();

setJitCompilerOption('asmjs.atomics.enable', 1);
new SharedArrayBuffer(65536);
setJitCompilerOption('asmjs.atomics.enable', 0)
