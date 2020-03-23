load("201224b0d1c296b45befd2285e95dd42.js");
var count = 0;

var a = [0, 1];
for (var i in a) {
    assertEq(++count <= 1, true);
    a.shift();
}

