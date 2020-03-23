load("201224b0d1c296b45befd2285e95dd42.js");
gcPreserveCode();
function test() {
  for (var i=0; i<20; i++) {
      arguments.x = {};
      gc();
  }
}
test();
