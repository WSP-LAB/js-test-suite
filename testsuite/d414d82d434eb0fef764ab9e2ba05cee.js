load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

var g = newGlobal();
g.parent = this;
g.eval("(" + function() {
    var dbg = new Debugger(parent);
    dbg.onExceptionUnwind = function(frame) {
        frame.older.onStep = function() {}
    };
} + ")()");
function f() {
    (function inner(arr) {
        inner(arr.map);
    })([]);
}
f();
