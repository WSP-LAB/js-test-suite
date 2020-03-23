load("201224b0d1c296b45befd2285e95dd42.js");

/* Read correct return value when the interpreter pops a lowered call/apply. */

function recompile() {}

function foo() {
  if (arguments[0] == 9)
    recompile();
  return arguments[0];
}
function bar() {
  for (var i = 0; i < 10; i++)
    assertEq(foo.apply(null, [i]), i);
}
bar();
