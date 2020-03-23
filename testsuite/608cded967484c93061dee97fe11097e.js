load("201224b0d1c296b45befd2285e95dd42.js");
function testDoubleToStr() {
    var x = 0.0;
    var y = 5.5;
    for (var i = 0; i < 200; i++) {
       x += parseFloat(y.toString());
    }
    return x;
}
assertEq(testDoubleToStr(), 5.5*200);
