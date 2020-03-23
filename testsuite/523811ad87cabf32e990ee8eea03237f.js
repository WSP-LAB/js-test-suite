load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,';

var f = function() {
  var p = 0;
  
  function g() {
    for (var i = 0; i < 5; ++i) {
      p++;
      appendToActual(p);
    }
  }
  
  g();
  
  appendToActual(p);
}

for (var i = 0; i < 5; ++i) {
  f();
  appendToActual();
}



assertEq(actual, expected)
