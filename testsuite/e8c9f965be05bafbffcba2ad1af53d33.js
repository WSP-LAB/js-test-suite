load("201224b0d1c296b45befd2285e95dd42.js");
if (!wasmIsSupported())
  quit();

fullcompartmentchecks(true);
var g = newGlobal();
var dbg = new Debugger(g);
dbg.onNewScript = (function(script) {
    s = script;
})
g.eval(`new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" 0))')));`);
s.source;
