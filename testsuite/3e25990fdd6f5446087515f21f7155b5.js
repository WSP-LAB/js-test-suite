load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
enableGeckoProfiling();
var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () { hits++; };");
function f() {
    var x = f();
}
f();
