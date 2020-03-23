load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    for (var i=0; i<9; i++)
        assertEq("" + f, expected);
}

var expected = "" + f;
f();
