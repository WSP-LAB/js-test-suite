load("201224b0d1c296b45befd2285e95dd42.js");
// 'arguments' in eval

function f() {
    var g = s => eval(s);
    assertEq(g("arguments"), arguments);
}

f();
f(0, 1, 2);

function h() {
    return s => eval(s);
}
var result = h(1, 2, 3, 4)("arguments");
assertEq(result.length, 4);
assertEq(result[3], 4);
