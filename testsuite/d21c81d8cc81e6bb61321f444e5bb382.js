load("201224b0d1c296b45befd2285e95dd42.js");
g = newGlobal();
g.parent = this;
g.eval("(" + function() {
    Debugger(parent)
        .onExceptionUnwind = function(frame) {
        return frame.eval("");
    };
} + ")()");
m = parseModule(` s1 `);
m.declarationInstantiation();
m.evaluation();
