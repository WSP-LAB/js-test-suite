load("201224b0d1c296b45befd2285e95dd42.js");
function f(a) {
    this.a = a;
    assertEq(arguments[1], 'x');
}

for (var x = 0; x < 9; ++x) {
    f.prototype = {};
    var obj = new f(x, 'x');  // more than f.length arguments
    assertEq(obj.a, x);
    assertEq(Object.getPrototypeOf(obj), f.prototype);
}
