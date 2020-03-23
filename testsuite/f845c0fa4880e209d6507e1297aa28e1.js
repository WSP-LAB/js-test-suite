load("201224b0d1c296b45befd2285e95dd42.js");
function testInterpreterReentry() {
    this.__defineSetter__('x', function(){})
    for (var j = 0; j < 5; ++j) { x = 3; }
    return 1;
}
assertEq(testInterpreterReentry(), 1);
