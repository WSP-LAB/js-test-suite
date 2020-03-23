load("201224b0d1c296b45befd2285e95dd42.js");
function testContinue() {
    var i;
    var total = 0;
    for (i = 0; i < 20; ++i) {
        if (i == 11)
            continue;
        total++;
    }
    return total;
}
assertEq(testContinue(), 19);
