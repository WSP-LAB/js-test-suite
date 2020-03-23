load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    if (x.y()) {};
}
f({y: function() {}});
try {
    f(10);
    assertEq(0, 1);
} catch(e) {
    assertEq(e instanceof TypeError, true);
}
