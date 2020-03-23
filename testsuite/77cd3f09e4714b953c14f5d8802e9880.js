load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    for (var i=0; i<50; i++) {
        assertEq(x == null, false);
        assertEq(x == undefined, false);
        assertEq(x != null, true);
        assertEq(x != undefined, true);
        assertEq(x === null, false);
        assertEq(x === undefined, false);
        assertEq(x !== null, true);
        assertEq(x !== undefined, true);
        assertEq(x < null, false);
        assertEq(x >= null, true);
    }
}
f(10);
f(0);
