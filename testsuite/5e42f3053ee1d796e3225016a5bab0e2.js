load("201224b0d1c296b45befd2285e95dd42.js");
var res;
var x = 0;

function f() {
    x = {x: 1, f: function() { res = this.x; }};
    with(x) {
        g = function() {
            eval("");
            f();
        }
        g();
    }
}
f();
assertEq(res, 1);
