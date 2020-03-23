load("201224b0d1c296b45befd2285e95dd42.js");
var x = 1;
function f() {
  function g() { 
    var t=0;
    for (var i=0; i<3; i++)
      x = i;
  };
  g();
  eval("var x = 2");
  g();
  assertEq(x, 2);
}
f();
assertEq(x, 2);
