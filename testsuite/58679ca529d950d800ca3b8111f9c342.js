load("201224b0d1c296b45befd2285e95dd42.js");
// A break statement leaves a for-of loop.

var log = '';
for (var x of ['a', 'b', 'c']) {
    log += x;
    if (x === 'b')
        break;
}
assertEq(log, "ab");
