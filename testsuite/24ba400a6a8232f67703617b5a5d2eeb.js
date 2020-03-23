load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () {}");
a = new class extends Array {
    constructor() {
        for (;; ([] = p)) {}
    }
}
