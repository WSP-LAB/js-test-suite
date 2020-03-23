load("201224b0d1c296b45befd2285e95dd42.js");
function bug673705() {
  var x;
  try {
  } catch (e) {
  } finally {
    print(x);
  }
  return x;
}
assertEq(bug673705(), undefined);
