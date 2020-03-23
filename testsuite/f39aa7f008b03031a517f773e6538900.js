load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError: too much recursion
(function f() {
    "".watch(2, function() {});
    f();
})()
