load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError: too much recursion
b = {};
b.__proto__ = evalcx("lazy");
function g() {
    g(b.toString())
}
g();
