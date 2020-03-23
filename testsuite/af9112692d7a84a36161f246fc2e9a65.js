load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function() {
  for each(let z in [new String(''), new String('q'), new String('')]) {
    if (uneval() < z) (function(){})
  }
})()

/* Don't assert/crash. */

