load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '5,';

// tracing length

var g = 0;

function h(args) {
  for (var i = 0; i < 6; ++i)
    g = args.length;
}

function f() {
  h(arguments);
}

for (var i = 0; i < 5; ++i) {
  f(10, 20, 30, 40, 50);
}
appendToActual(g);


assertEq(actual, expected)
