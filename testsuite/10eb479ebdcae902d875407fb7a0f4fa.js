load("201224b0d1c296b45befd2285e95dd42.js");
var f = 99;

function g(a) {
    if (a) {
        var e = 55;
        function f() {
            print("f");
        }
        assertEq(f == 99, false);
    }
}

g(true);
