load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    return (!(Math.round(Math.hypot(Number.MIN_VALUE, Math.fround(x))) | 0) | 0) !== (Math.atanh(x) ? false : Math.tan(0))
}
f(Number.MIN_VALUE)
assertEq(f(4294967295), true)
