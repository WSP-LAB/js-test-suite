load("201224b0d1c296b45befd2285e95dd42.js");
function f(x)
{
    x = x|0;
    return ~~((x ? 1.0e60 : 1.0e60) + 1.0);
}

var r = -1;
for(var i = 0; i < 20000; i++) {
    r = f();
}
assertEq(r, 0);
