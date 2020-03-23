load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x = -[NaN][0];
    assertEq(x === x, false);
    assertEq(x !== x, true);
    assertEq(x == x, false);
    assertEq(x != x, true);

    var y = -("x" / {});
    var z = y;
    assertEq(y === z, false);
    assertEq(y !== z, true);
    assertEq(y == z, false);
    assertEq(y != z, true);
}
f();

function g(x, y) {
    var z = x / y;
    assertEq(z === z, false);
}
g(0, 0);
