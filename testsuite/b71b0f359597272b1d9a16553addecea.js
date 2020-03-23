load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '5,';

function f() {
  var p = 0;

  function g() {
    for (var i = 0; i < 5; ++i) {
      p++;
    }
  }

  g();

  appendToActual(p);
}

f();


assertEq(actual, expected)
