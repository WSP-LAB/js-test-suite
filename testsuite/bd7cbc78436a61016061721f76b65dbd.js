load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("ion.warmup.trigger", 1);
function f(g) {
    for (var i = 0; i < 99; i++) {
        "abc".match("b.");
        g();
    }
}
f(function() {});
f(function() {
    Object.defineProperty(RegExp.prototype, "sticky", {
        get: function() {}
    });
});
