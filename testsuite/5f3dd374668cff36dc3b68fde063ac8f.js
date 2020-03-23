load("201224b0d1c296b45befd2285e95dd42.js");
function f()
{
    var a = [];
    a.length = 10;
    for (var i = 0; i < 100; i++) {
        var y = a[a.length];
    }
}
f();
// No assertEq() call, the test is just that it shouldn't assert or crash.
