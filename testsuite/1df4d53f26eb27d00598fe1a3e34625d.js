load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption('ion.warmup.trigger', 0);
gczeal(7, 1);
var dbgGlobal = newGlobal();
var dbg = new dbgGlobal.Debugger();
dbg.addDebuggee(this);
function f(x, await = () => Array.isArray(revocable.proxy), ...get) {
    dbg.getNewestFrame().older.eval("print(a)");
}
function a() {}
for (var i = 0; i < 10; i++) f();
