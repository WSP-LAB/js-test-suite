load("201224b0d1c296b45befd2285e95dd42.js");
function testBranchingLoop() {
  var x = 0;
  for (var i=0; i < 100; ++i) {
    if (i == 51) {
      x += 10;
    }
    x++;
  }
  return x;
}
assertEq(testBranchingLoop(), 110);
