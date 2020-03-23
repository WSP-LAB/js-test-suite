load("201224b0d1c296b45befd2285e95dd42.js");
var f = function (x) {
    return Math.tan(Math.fround(Math.log(Math.fround(Math.exp(x)))));
}
assertEq(f(1), f(1));
