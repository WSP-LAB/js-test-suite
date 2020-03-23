load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
    var x = NaN;
    if (2 > 0) {}
    var y = {};
    var z = (1234 - x);
    y.foo = z;
    assertEq(x, NaN);
}
f();
