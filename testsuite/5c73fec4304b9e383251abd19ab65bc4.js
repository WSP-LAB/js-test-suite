load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
function g() {
    f(0);
}
function f(y) {
    return (undefined <= y);
}
try {
    g();
} catch (e) {}
(function() {
    f()()
})();
