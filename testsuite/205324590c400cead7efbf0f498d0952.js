load("201224b0d1c296b45befd2285e95dd42.js");
function testBug465272() {
    var a = new Array(5);
    for (j=0;j<5;++j) a[j] = "" + ((5) - 2);
    return a.join(",");
}
assertEq(testBug465272(), "3,3,3,3,3");
