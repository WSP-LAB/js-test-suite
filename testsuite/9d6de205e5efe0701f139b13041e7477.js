load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = 'true,true,true,true,true,';

function h() {
  var a = arguments;
  for (var i = 0; i < 5; ++i) {
    appendToActual(a == arguments);
  }
}

h();


assertEq(actual, expected)
