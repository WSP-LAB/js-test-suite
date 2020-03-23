load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
    function g() {
        var b = x;
        var c = b++ & b;
        return c;
    }
    var x = x--;
    return g();
}
assertEq(f(), 0);
