load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () { hits++; };");
evaluate('\
var fe="v";\
for (i=0; String.fromCharCode(0x004E); i++)\
  fe += fe;\
', { isRunOnce: true });
