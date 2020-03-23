load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var MAX_HEIGHT = 512;
    var obj = {};
    for (var i = 0; i < MAX_HEIGHT; i++)
        obj['a' + i] = i;
    obj.m = function () { return 0; };
}
f();
f();
