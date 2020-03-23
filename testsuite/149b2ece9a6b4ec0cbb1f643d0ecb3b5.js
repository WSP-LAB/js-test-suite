load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
        return /x/;
}
function g() {
        return (f() == f());
}
for (var i = 0; i < 2; ++i) {
    assertEq(g(), false);
}
