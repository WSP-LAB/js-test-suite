load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError
function f() {
        (x ? Math.fround(0) : x ? a : x) && b;
}
f(Math.fround);
