load("201224b0d1c296b45befd2285e95dd42.js");
function testMatchStringObject() {
    var a = new String("foo");
    var b;
    for (i = 0; i < 300; i++)
        b = a.match(/bar/);
    return b;
}
assertEq(testMatchStringObject(), null);
