load("201224b0d1c296b45befd2285e95dd42.js");
// don't panic

f = function() {
  x = yield
}
rv = f()
for (a in rv) (function() {})
x = new Proxy({}, (function() {
  return {
    defineProperty: gc
  }
})());
with({
  d: (({
    x: Object.defineProperty(x, "", ({
      set: Array.e
    }))
  }))
}) {}

// don't crash
