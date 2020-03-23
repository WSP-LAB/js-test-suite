load("201224b0d1c296b45befd2285e95dd42.js");
function arity1(x)
{
  return (x == undefined) ? 1 : 0;
}
function missingArgTest() {
  var q;
  for (var i = 0; i < 10; i++) {
    q = arity1();
  }
  return q;
}
assertEq(missingArgTest(), 1);
