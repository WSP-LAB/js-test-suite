load("201224b0d1c296b45befd2285e95dd42.js");
function ifInsideLoop()
{
  var cond = true, intCond = 5, count = 0;
  for (var i = 0; i < 100; i++) {
    if (cond)
      count++;
    if (intCond)
      count++;
  }
  return count;
}
assertEq(ifInsideLoop(), 200);
