load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
    ''.match('(');
} catch (e) {
    caught = true;
    assertEq(e instanceof Error, true);
    assertEq(('' + e).indexOf('SyntaxError') === -1, false);
}
assertEq(caught, true);
