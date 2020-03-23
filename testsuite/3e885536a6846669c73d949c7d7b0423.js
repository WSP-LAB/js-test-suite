load("201224b0d1c296b45befd2285e95dd42.js");
function arityMismatchMissingArg(arg)
{
  for (var a = 0, i = 1; i < 10000; i *= 2) {
    a += i;
  }
  return a;
}
assertEq(arityMismatchMissingArg(), 16383);
