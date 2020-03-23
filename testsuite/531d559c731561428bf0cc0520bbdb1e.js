load("201224b0d1c296b45befd2285e95dd42.js");
// getprop, self, 1 shape

var expected = "11,22,33,11,22,33,11,22,33,11,22,33,11,22,33,";
var actual = '';

function f() {
  var o = { a: 11, b: 22, c: 33 };
  
  for (var i = 0; i < 5; ++i) {
    actual += o.a + ',';
    actual += o.b + ',';
    actual += o.c + ',';
  }
}

f();

assertEq(actual, expected);
