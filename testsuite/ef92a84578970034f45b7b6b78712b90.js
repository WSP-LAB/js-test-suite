load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function() {
  try { (function() {
      for each(let x in [0, /x/, 0, {}]) {
        if (x < x) {}
      }
    })()
  } catch(e) {}
})()

/* Don't assert. */

