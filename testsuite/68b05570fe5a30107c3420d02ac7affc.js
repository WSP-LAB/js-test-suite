load("201224b0d1c296b45befd2285e95dd42.js");

var x = Object.create(this);
var y = '1';
for (var i = 0; i < 3; ++i) {
        y += x.y;
}
assertEq(y, "11111111");
