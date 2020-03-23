load("201224b0d1c296b45befd2285e95dd42.js");
var test;
{
  with ({a: 2}) {
      test = (function () { return a; })();
  }
  let a = 5;
}
assertEq(test, 2);
