load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError: too much recursion
for (let y in []);
(function f(x) {
    new Float64Array(new ArrayBuffer());
    {
        f(x)
        function t() {}
    }
})();
