load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --fuzzing-safe
readline = function() {};
Function.prototype.toString = function() {
    for (var i = 0; i < 2; i++) {
        this()
    }
};
getBacktrace({thisprops: true});
