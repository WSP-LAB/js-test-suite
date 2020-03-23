load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
  var x = 10;
  var g = function(x, Int8Array, arr, f) {
    for (var i = 0; i < 10; ++i) {
      gc();
    }
  }
  for (var i = 0; i < 10; ++i) {
    g(100 * i + x);
  }
}
f();
