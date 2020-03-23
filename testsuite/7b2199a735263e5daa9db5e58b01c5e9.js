load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
  eval("1\n)=>");
} catch (e) {
  assertEq(e instanceof SyntaxError, true);
  caught = true;
}
assertEq(caught, true);
