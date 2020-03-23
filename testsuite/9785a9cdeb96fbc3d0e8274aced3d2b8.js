load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var a;
    for (var i=0; i<50; i++) {
        a = [i, , [,, i*3], ];
    }
    return a;
}
Array.prototype[1] = 123;
var arr = f();
assertEq(arr.length, 3);
assertEq(arr.toString(), "49,123,,123,147");
