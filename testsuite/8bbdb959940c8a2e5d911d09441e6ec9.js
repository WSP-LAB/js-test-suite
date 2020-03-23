load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
  var x = 11;

  function g() {
    var y = 12;

    function h() {
      for (var i = 0; i < 5; ++i) {
	y = 4;
	x = i * 2;
      }
    }
    h();

    assertEq(y, 4);
  }
  g();

  assertEq(x, 8);
} 

f();
