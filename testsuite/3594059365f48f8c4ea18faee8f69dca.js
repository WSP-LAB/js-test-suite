load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    function g() {
        for (var i = 0; i < 3; i++)
        x = i;
    };
    var [x] = [];
    g();
    assertEq(x, 2);
    print(x);
}
f();
