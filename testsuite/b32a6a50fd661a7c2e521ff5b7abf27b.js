load("201224b0d1c296b45befd2285e95dd42.js");
function g() { assertEq(false, true) }
var ct = 0;

function f(b) {
    if (b) {
        arguments = [false];
        f(false);
    } else {
        g = {
            apply:function(x,y) {
                ++ct;
                assertEq(x, null);
                assertEq(y[0], false);
            }
        };
    }
    g.apply(null, arguments);
}
f(true);
assertEq(ct, 2);
