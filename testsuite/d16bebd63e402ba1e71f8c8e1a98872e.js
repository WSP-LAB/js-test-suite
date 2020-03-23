load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: unreachable code
function f() {
    return 1;
    return 2;
}
options("werror");
f();
