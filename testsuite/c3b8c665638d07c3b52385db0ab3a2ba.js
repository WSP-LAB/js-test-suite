load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x;
    eval("x = 3.14");
    x = 123;
    var y = -(-x);
    assertEq(y, 123);
}
f();
