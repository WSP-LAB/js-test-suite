load("201224b0d1c296b45befd2285e95dd42.js");
// A labeled break statement can leave multiple for-loops

var log = '';
for (var i = 0; i < 3; i++) {
    a: for (var x of [1, 2, 3]) {
        for (var y of ['.', ':']) {
            log += x + y;
            break a;
        }
    }
}
assertEq(log, "1.1.1.");
