load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

g = newGlobal();
g.parent = this;
g.eval("(" + function() {
    Debugger(parent).onExceptionUnwind = function() { return 0; };
} + ")()");
async function f() {
    t;
}
f();
