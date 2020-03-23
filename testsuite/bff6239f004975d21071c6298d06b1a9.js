load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x = Object.prototype.hasOwnProperty.call(1);
    assertEq(x, false);
    isNaN(2);
}
f();
