load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,';

for (var i = 0; i < 10; ++i) {
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
  f();
}



assertEq(actual, expected)
