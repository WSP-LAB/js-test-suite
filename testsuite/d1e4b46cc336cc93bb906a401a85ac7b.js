load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = 'a,';

function f() {
  arguments;
}

for (var i = 0; i < 1000; ++i) {
  f(1, 2);
}

appendToActual('a')


assertEq(actual, expected)
