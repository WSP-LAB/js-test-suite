load("201224b0d1c296b45befd2285e95dd42.js");
function returnZero() { return 0; } 
function test() {
  var a = "a";
  var b = "b";
  if (returnZero()) {
    return a + b;
  } else {
    return b + a;
  }
}
assertEq(test(), "ba");

