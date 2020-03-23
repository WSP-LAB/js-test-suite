load("201224b0d1c296b45befd2285e95dd42.js");
var x = {};
function f() { y.prop; }
x.toStr = function () { f(); };
try {
    f();
} catch (e) { }
try {
    x.toStr();
} catch (e) { }
try {
    function f() { which = 2; }
    x.toStr();
} catch (e) { which = 1; }
assertEq(which, 2);
