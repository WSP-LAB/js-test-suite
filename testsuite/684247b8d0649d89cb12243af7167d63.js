load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '0,1,2,3,4,5,6,7,8,9,';

function k(f_arg) { 
  for (var i = 0; i < 10; ++i) {
    f_arg(i);
  }
}

function t() {
  var x = 1;
  k(function (i) { x = i; });
  appendToActual(i);
}

for (var i = 0; i < 10; ++i) {
  t();
}




assertEq(actual, expected)
