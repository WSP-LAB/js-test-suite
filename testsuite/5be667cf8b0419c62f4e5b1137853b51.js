load("201224b0d1c296b45befd2285e95dd42.js");
function forVarInWith() {
    function foo() { return {notk:42}; }
    function bar() { return {p:1, q:2, r:3, s:4, t:5}; };
    var o = foo();
    var a = [];
    with (o) {
        for (var k in bar())
            a[a.length] = k;
    }
    return a.join("");
}
assertEq(forVarInWith(), "pqrst");
