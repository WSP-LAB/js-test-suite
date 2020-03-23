load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = 'g,g,g,g,g,';

function g() {
  appendToActual('g');
}

function f() {
  g.apply(this, arguments);
}

for (var i = 0; i < 5; ++i) {
  f();
}


assertEq(actual, expected)
