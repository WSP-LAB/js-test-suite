load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '54,54,54,';

function k(a, b, f_arg, c) { 
  for (var i = 0; i < 5; ++i) {
    f_arg(i + a);
  }
}

function t(a, b) {
  var x = 1;
  k(50, 100, function (i) { x = i; }, 200);
  appendToActual(x);
}

t(1);
t(2, 3);
t(4, 5, 6);


assertEq(actual, expected)