load("201224b0d1c296b45befd2285e95dd42.js");
function foo() {
  var x = 0;
  var y = 0;
  while (x++ < 100)
    y++;
  assertEq(y, 100);
}
foo();
