load("201224b0d1c296b45befd2285e95dd42.js");
function f() { return 2; }
function g(o) {
  with (o) {
      var f = function() { return 4; }
  }
  return f();
}

assertEq(g({}), 4);


