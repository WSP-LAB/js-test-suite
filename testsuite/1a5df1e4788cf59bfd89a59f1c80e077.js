load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError

x = 1;
x;
function g(y) {}
g(this);
x = /x/;
function f() {
    f(x.flags);
}
f();
