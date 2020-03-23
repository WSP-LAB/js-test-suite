load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '51,';

var g = 0;

function add(a, b) {
  g = a + b;
}

function f() {
  g = arguments[1];
}

for (var i = 0; i < 10000; ++i) {
  f(100, 51);
}
appendToActual(g);


assertEq(actual, expected)
