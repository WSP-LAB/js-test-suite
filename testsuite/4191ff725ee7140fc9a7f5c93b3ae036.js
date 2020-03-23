load("201224b0d1c296b45befd2285e95dd42.js");
var gTestcases = new Array();
var gTc = gTestcases.length;
var setterCalled = false;
function TestCase() {
    gTestcases[gTc++] = this;
}
for(var i = 0; i < 13; ++i) {
    var testcase = new TestCase();
}
Array.prototype.__defineSetter__(32, function() { setterCalled = true; });
for(var i = 0; i < 20; ++i) {
    var testcase = new TestCase();
}
assertEq(setterCalled, true);
