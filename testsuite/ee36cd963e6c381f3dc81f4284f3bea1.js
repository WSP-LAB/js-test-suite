load("201224b0d1c296b45befd2285e95dd42.js");
function g() { assertEq(false, true) }
var max = 400; ct = 0;

function f(b) {
    if (b) {
        f(b - 1);
    } else {
        g = {
            apply:function(x,y) {
                assertEq(x, null);
                assertEq(y[0], ct);
                ++ct;
            }
        };
    }
    g.apply(null, arguments);
}
f(max - 1);
assertEq(ct, max);
