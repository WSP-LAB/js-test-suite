load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    assertEq(typeof eval("this"), "object");
}
for (var i=0; i<5; i++)
    f();
