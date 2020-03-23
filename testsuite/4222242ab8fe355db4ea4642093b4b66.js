load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow;
if (!('oomTest' in this))
    quit();

enableGeckoProfiling();
var lfGlobal = newGlobal();
for (lfLocal in this) {
    lfGlobal[lfLocal] = this[lfLocal];
}
const script = 'oomTest(() => getBacktrace({args: true, locals: "123795", thisprops: true}));';
lfGlobal.offThreadCompileScript(script);
lfGlobal.runOffThreadScript();
