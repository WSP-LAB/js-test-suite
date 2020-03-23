load("201224b0d1c296b45befd2285e95dd42.js");
function f(s) {
    var q;
    for (var i = 0; i < 10000; i++)
        q = ~s;
    return q;
}
var obj = { valueOf: function () { return 3; } }
assertEq(f(obj), -4);

