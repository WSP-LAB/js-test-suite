load("201224b0d1c296b45befd2285e95dd42.js");
function f(v, e) {
    for (var i = 0; i < 9; i++)
        v %= e;
    return v;
}
f(0, 1);
assertEq(f(-2, 2), -0);
