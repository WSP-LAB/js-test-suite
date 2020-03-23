load("201224b0d1c296b45befd2285e95dd42.js");

var t = 0;
var y = [];
y.toString = (function() { t += 1 });
function test() {
    for (var i = 0; i < 14; i++) {
        String.prototype.sup.call(y);
    }
}
test();
assertEq(t, 14);
