load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    return Math.abs(~(Math.tan()));
}

for (var i=0; i<1000; i++)
    assertEq(f(i), 1);
