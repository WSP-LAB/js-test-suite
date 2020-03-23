load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '151,';

var g = 0;

function add(a, b) {
  g = a + b;
}

function f() {
  add.apply(this, arguments);
}

for (var i = 0; i < 5; ++i) {
  f(100, 51);
}
appendToActual(g);


assertEq(actual, expected)
