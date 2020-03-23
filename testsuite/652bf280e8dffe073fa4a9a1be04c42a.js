load("201224b0d1c296b45befd2285e95dd42.js");

function testInt(x) {
    var a = x|0;
    return (a !== a);
}
assertEq(testInt(10), false);
