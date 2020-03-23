load("201224b0d1c296b45befd2285e95dd42.js");
var x = 42;
function f() {
    var a = [new Date, new Date, new Date, new Date, new Date];
    for (var i = 0; i < 5; i++)
        a[i].m = function () {return x};
    for (i = 0; i < 4; i++)
        if (a[i].m == a[i+1].m)
            throw "FAIL!";
}
f();
