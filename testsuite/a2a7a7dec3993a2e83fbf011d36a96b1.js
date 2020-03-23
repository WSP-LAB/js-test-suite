load("201224b0d1c296b45befd2285e95dd42.js");
var a = [0, 0, 0, 0, 0, Symbol(), Symbol()];
var b = [];
function f(i, v) {
    b[i] = typeof v;
}
for (var i = 0; i < a.length; i++)
    f(i, a[i]);
assertEq(b[b.length - 2], "symbol");
assertEq(b[b.length - 1], "symbol");
