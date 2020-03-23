load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();
for (var i=0; i<2; i++)
    oomTest(() => eval("setJitCompilerOption(eval + Function, 0);"));
