load("201224b0d1c296b45befd2285e95dd42.js");
var test;
{
  with ({a: 2}) {
    {
      let a = 5;
      test = (function () { return a; })();
    }
  }
}
assertEq(test, 5);
