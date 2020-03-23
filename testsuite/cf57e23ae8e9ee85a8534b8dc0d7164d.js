load("201224b0d1c296b45befd2285e95dd42.js");
var escape;
function testBug458838() {
    var a = 1;
    function g() {
        var b = 0
            for (var i = 0; i < 10; ++i) {
                b += a;
            }
        return b;
    }

    return g();
}
assertEq(testBug458838(), 10);
