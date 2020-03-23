load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
  var box = { call: function () { return 42.1; } };
  for (var i = 0; i < 50; i++) {
    assertEq(box.call(undefined, 42.1), 42.1);
  }
}
test();
