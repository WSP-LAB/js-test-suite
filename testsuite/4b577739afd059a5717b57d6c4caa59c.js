load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: undefined
(function() {
  throw (function f(a, b) {
    if (a.h == b) {
      return eval("((function(){return 1})())!=this")
    }
    f(b)
  })([], 0)
})()

/* Don't assert/crash. */

