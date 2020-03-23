load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x = false;
    NaN ? x = Math.floor() : x = Math.ceil();
    return x * 12345;
}
assertEq(f(), NaN);
