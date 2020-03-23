load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1250190: Shouldn't crash. |jit-test| exitstatus: 3

var g = newGlobal();
var dbg = Debugger(g)
dbg.onNewGlobalObject = () => g.newGlobal();
g.newGlobal();
print("yo");
