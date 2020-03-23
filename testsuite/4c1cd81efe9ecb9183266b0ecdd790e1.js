load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: RangeError; need-for-each
(function() {
  for each(let a in [function() {}, Infinity]) {
    new Array(a)
  }
})()

/* Don't assert/crash. */

