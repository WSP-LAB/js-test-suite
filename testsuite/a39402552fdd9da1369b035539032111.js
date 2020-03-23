load("201224b0d1c296b45befd2285e95dd42.js");
function testDecayingInnerLoop() {
    var i, j, k = 10;
    for (i = 0; i < 5000; ++i) {
        for (j = 0; j < k; ++j);
            --k;
    }
    return i;
}
assertEq(testDecayingInnerLoop(), 5000);
