load("201224b0d1c296b45befd2285e95dd42.js");
var arr = [-10, true];
true || arr[0];

function g() {
    var x = arr[12];
    var y = arr.length;
    arr[undefined] = x;
    assertEq(y, 2);
}
{
    function f() {
        gc();
        g();        
    }
    f();
}
