load("201224b0d1c296b45befd2285e95dd42.js");
function f(s) {
    var obj = {m: function () { return a; }};
    eval(s);
    return obj;
}
var obj = f("var a = 'right';");
var a = 'wrong';
assertEq(obj.m(), 'right');
