load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this) || helperThreadCount() === 0)
    quit();

oomTest(() => {
    offThreadCompileScript("function a(x) {");
    runOffThreadScript();
});
