load("201224b0d1c296b45befd2285e95dd42.js");
// vim: set ts=8 sts=4 et sw=4 tw=99:
function f(a) {
    var x = {
        g: function () {
            return this.a;
        }
    };
    x.g.prototype.a = a;
    assertEq(x.g.prototype.a, a);
    return x;
}
f(1);
f(2);
f(3);
