load("201224b0d1c296b45befd2285e95dd42.js");
function f(a) {
    x = arguments;
}
for (var i = 0; i < 9; i++)
    f(123);
assertEq(x[0], 123);
