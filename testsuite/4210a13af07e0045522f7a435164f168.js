load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

function g() {
    var x = 100;
    return evalInFrame(2, "x");
}
function f() {
    var x = 42;
    return evalInFrame.call(null, 0, "g()");
}
assertEq(f.call(), 42);
