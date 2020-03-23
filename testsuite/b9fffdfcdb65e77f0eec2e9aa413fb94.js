load("201224b0d1c296b45befd2285e95dd42.js");
var actual = '';

var a = [0, 1];
for (var i in a) {
    appendToActual(i);
    delete a[1];
}

assertEq(actual, "0,");
