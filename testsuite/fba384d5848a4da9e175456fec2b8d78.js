load("201224b0d1c296b45befd2285e95dd42.js");
// This just tests that named lambdas don't crash in the tracer.

var f = function ff() {
  var k = 0;
  var counter = function q() {
      return ++k;
  }
  return counter;
}

function g() {
  for (var i = 0; i < 10; ++i) {
    f();
  }
}

g();
