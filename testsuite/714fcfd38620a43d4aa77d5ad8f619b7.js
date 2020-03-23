load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '10,';

function f(x) {
  {
    let x2 = 10;
    for (var i = 0; i < 5; ++i) {
      var g = function () {
	appendToActual(x2);
      };
    }
    g();
  }
}

f(1);


assertEq(actual, expected)
