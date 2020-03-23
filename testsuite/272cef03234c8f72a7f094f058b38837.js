load("201224b0d1c296b45befd2285e95dd42.js");
function f(y) {
    y = 1;
    assertEq(arguments.callee.arguments[0], 1);
    return () => y;
}
f(0);
