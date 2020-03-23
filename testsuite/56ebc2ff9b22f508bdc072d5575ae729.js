load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: RangeError
function g(a, b, c, d) {}
function f(a, b, c) {
        arguments.length = getMaxArgs() + 1;
        g.apply(this, arguments);
}f();
