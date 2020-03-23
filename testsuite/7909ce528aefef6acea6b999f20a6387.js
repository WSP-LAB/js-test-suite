load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: fff is not
var g = newGlobal();
var dbg = new Debugger(g);

g.eval('function f(n) { if (n > 0) f(n-1); }');

dbg.onEnterFrame = function(frame) {
    frame.onPop = function() {
        fff();
    };
};

g.f(5);
