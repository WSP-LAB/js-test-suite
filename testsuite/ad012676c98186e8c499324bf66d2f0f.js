load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    return (x != x) != Math.fround(x)
}
assertEq(f(0), f(0));
