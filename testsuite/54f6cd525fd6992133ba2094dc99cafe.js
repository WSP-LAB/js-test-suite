load("201224b0d1c296b45befd2285e95dd42.js");
// Slowifying an array while it is being iterated does not affect iteration.

var a = [9, 8, 7, 6, 5, 4, 3];
var log = '';
for (var x of a) {
    log += x;
    if (x === 6)
        a.slow = true;
}
assertEq(log, "9876543");