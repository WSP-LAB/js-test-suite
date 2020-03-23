load("201224b0d1c296b45befd2285e95dd42.js");
// for-of does not skip Array holes. The value at a hole is undefined.

var a = [0, , 2, 3];
var log = [];
for (var x of a) {
    assertEq(x, a[log.length]);
    log.push(x);
}
assertEq(log[1], undefined);
assertEq(log.join(), "0,,2,3");
