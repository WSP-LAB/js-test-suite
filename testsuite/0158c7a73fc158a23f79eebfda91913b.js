load("201224b0d1c296b45befd2285e95dd42.js");
function test(p) {
  var alwaysFalse = p && !p;
  var k = [];
  var g;
  if (!alwaysFalse) {
    k[0] = g = alwaysFalse ? "failure" : "success";
    return g;
  }
}
assertEq(test("anything"), "success");
