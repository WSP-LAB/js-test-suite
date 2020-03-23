load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() === 0)
    quit(0);

var lfGlobal = newGlobal();
lfGlobal.offThreadCompileScript(`{ let x; throw 42; }`);
try {
    lfGlobal.runOffThreadScript();
} catch (e) {
}

lfGlobal.offThreadCompileScript(`function f() { { let x = 42; return x; } }`);
try {
    lfGlobal.runOffThreadScript();
} catch (e) {
}
