load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '16,';

var f = function() {
  var p = 1;
  
  function g() {
    for (var i = 0; i < 5; ++i) {
      p = i * i;
    }
  }
  
  function h() {
    appendToActual(p);
  }

  return [g, h];
};

var [ g,h ] = f();
for (var i = 0; i < 5; ++i) {
  g();
}
h();


assertEq(actual, expected)
