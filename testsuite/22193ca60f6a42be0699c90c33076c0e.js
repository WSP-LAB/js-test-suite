load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this) || helperThreadCount() === 0)
  quit(0);

var lfGlobal = newGlobal();
for (lfLocal in this) {
    if (!(lfLocal in lfGlobal)) {
        lfGlobal[lfLocal] = this[lfLocal];
    }
}
const script = 'oomTest(() => getBacktrace({args: true, locals: "123795", thisprops: true}));';
lfGlobal.offThreadCompileScript(script);
lfGlobal.runOffThreadScript();
