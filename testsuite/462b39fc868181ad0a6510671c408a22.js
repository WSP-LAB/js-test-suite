load("201224b0d1c296b45befd2285e95dd42.js");
var s = '';

var a = [, 0, 1];
for (var i in a) {
    a.reverse();
    s += i + ',';
}

// Index of the element with value '0'.
assertEq(s, '1,');

