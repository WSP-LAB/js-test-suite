load("201224b0d1c296b45befd2285e95dd42.js");
function foo(i) {
    var n = 0;
    for (var i = 0; i < false; i++)
        n = a++;
    assertEq(n, 0);
}
var a = foo(10);

function bar(x) {
    var y = +(x ? x : "foo");
    assertEq(y, 10);
}
bar(10);
