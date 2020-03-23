load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    return new ({});
}
function g() {
    return ({})();
}
try {
    f();
    assertEq(0, 1);
} catch (e) {
    assertEq(e instanceof TypeError, true);
}
try {
    g();
    assertEq(0, 1);
} catch (e) {
    assertEq(e instanceof TypeError, true);
}
