load("201224b0d1c296b45befd2285e95dd42.js");
function f(arg) {
    bailout();
    assertEq(arguments.length, 2);
    assertEq(arg, "");
    assertEq(arguments[0], "");
    assertEq(arguments[1], 0);
}
for (var i = 0; i < 100; ++i) {
    (function() {
        f.call(1, "", 0);
    })();
}
