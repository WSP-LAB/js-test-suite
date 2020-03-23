load("201224b0d1c296b45befd2285e95dd42.js");
if (!this.hasOwnProperty("SIMD"))
  quit();

var Float64x2 = SIMD.Float64x2;
function test() {
  var a = Float64x2(1, 2);
}
test();
test();
