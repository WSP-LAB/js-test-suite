load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    assertEq("a" !== x, true);
    assertEq("b" != x, true);
    assertEq("c" === x, false);
    assertEq("d" == x, false);
}
f(1);
f(1);
