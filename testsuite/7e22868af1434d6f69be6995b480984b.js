load("201224b0d1c296b45befd2285e95dd42.js");
function f(x, y) {
        return (y | 0 && x ? y | 0 : 0)
}
m = [1]
assertEq(f(m[0], m[0]), 1)
assertEq(f(m[1], m[0]), 0)
assertEq(f(m[2], m[0]), 0)
