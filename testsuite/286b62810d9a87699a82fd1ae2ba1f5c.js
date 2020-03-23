load("201224b0d1c296b45befd2285e95dd42.js");
function f(a, b, c) {
    arguments[0] = 3;
    return (c--) + 1;
}
var r = f();
print(r);
assertEq(r !== r, true);
