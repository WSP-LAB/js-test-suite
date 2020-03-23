load("201224b0d1c296b45befd2285e95dd42.js");
function f(a, b) {
    return a == b;
}

var X = "" + Math.random();
var Y = "" + Math.random();

assertEq(f(X + Y, X + Y), true);

