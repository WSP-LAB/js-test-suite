load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1250190: Shouldn't crash. |jit-test| exitstatus: 3

g = newGlobal();
var dbg = Debugger(g)
dbg.onNewPromise = () => g.makeFakePromise();
g.makeFakePromise();

