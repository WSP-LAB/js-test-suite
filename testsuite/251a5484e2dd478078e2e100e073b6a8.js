load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: out of memory; slow;

if (!('oomTest' in this))
    throw new Error("out of memory");

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onNewScript = function (s) {
  log += dbg.findScripts({ source: s.source }).length;
}
log = "";
oomTest(() => {
    var static  = newGlobal();
    g.eval("(function() {})()");
});
