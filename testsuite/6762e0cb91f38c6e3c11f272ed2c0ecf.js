load("201224b0d1c296b45befd2285e95dd42.js");
function testConstIf() {
    var x;
    for (var j=0;j<5;++j) { if (1.1 || 5) { } x = 2;}
    return x;
}
assertEq(testConstIf(), 2);
