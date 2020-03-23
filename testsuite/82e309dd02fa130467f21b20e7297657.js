load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
    var x = 1.23;
    function g() {
        var y = x++;
        assertEq(y, 1.23);
    }
    g();
    assertEq(x, 2.23);
}
f();
