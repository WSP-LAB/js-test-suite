load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    x = eval("a = arguments.callee.arguments; 10");
}
for (var i=0; i<5; i++) {
    f(5);
    assertEq(a[0], 10);
}
