load("201224b0d1c296b45befd2285e95dd42.js");

/* Recompilation while being processed by a call IC. */

var g;
function foo() {
  for (g = 0; g < 5; g++) {
    bar();
  }
  function bar() {
    with ({}) {
      eval("g = undefined;");
    }
  }
}
foo();

assertEq(g, NaN);

/* Recompilation while being processed by a native call IC. */

function native() {
  var x;
  x = x;
  x = Math.ceil(NaN);
  assertEq(x, NaN);
}
native();
