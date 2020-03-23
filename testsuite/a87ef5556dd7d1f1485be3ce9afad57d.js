load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '10,20,';

function h() {
  var p;
  for (var i = 0; i < 5; ++i) {
    p = arguments;
  }
  appendToActual(p[0]);
  appendToActual(p[1]);
}

h(10, 20);


assertEq(actual, expected)
