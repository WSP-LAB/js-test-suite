load("201224b0d1c296b45befd2285e95dd42.js");
eval(1); // avoid global shape change when we call eval below
function q() {
  var x = 1;
  function f() {
    function g() { 
      var t=0;
      for (var i=0; i<3; i++)
        x = i;
      assertEq(x, 2);
      eval("var x = 3");
    };
    g();
    g();
    assertEq(x, 2);
  }
  f();
}
q();
