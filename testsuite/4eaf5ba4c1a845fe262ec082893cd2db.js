load("201224b0d1c296b45befd2285e95dd42.js");
function f(a, b) {
    this.a = a;
    assertEq(b, 'x');
}

for (var x = 0; x < 9; ++x) {
    f.prototype = {};
    var obj = new f(x, 'x');
    assertEq(obj.a, x);
    assertEq(Object.getPrototypeOf(obj), f.prototype);
}
