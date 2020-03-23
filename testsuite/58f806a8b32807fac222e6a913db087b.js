load("201224b0d1c296b45befd2285e95dd42.js");
function j(x) {
    return Math.pow(x, x) !== Math.pow(x, x)
}
j(-0)
assertEq(j(-undefined), true)
