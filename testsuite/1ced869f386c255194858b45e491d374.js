load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: too much recursion
(function() {
    (function f(x) {
        return x * f(x - 1);
        with({})
        var r = ""
    })()
})()

