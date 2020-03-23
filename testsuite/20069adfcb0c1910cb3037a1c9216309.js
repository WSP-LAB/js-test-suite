load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
g = (function() {
    var Int32ArrayView = new Int32Array();
    function f() {
        Int32ArrayView[Symbol() >> 2]
    }
    return f;
})();
try {
    g();
} catch (e) {}
g();

