load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
        return Math.cos(~(~Math.pow(Number.MAX_VALUE, x)))
}
f(-0)
assertEq(f(undefined - undefined), 1)
