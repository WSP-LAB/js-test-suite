load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    return Math.fround() ? x : x >> 0;
}
function g() {
    return (f() !== Math.fround(0))
}
assertEq(g(), g());
