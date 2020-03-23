load("201224b0d1c296b45befd2285e95dd42.js");
// A break statement leaves only a single for-of loop.

var log = '';
for (var x of [1, 2, 3]) {
    for (var y of ['.', ':']) {
        log += x + y;
        break;
    }
}
assertEq(log, "1.2.3.");
