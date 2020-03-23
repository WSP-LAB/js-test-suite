load("201224b0d1c296b45befd2285e95dd42.js");

with({}){}
x = new Int8Array(1)
function f(y) {
    x[0] = y
}
f()
f(3)
f(7)
x.buffer;
f(0);
assertEq(x[0], 0);
