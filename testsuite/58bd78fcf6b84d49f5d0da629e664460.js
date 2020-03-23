load("201224b0d1c296b45befd2285e95dd42.js");
// Using shift to cut values out of an array does not change the next index of an existing iterator.

var a = [1, 2, 3, 4, 5, 6, 7, 8];
var s = '';
for (var v of a) {
    s += v;
    a.shift();
}
assertEq(s, '1357');
