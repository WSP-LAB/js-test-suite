load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: is not a function
function f() {
    (e)
}
(x = new Proxy(Function, (function(x) {
  return {
    get: function(r, b) {
      return x[b]
    }
  }
})(/x/)))
for (z = 0; z < 100; x.unwatch(), z++)
for (e in [0]) {
  gczeal(2)
} ( [1,2,3])("")

