load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each


(function() {
  for each(let x in [new Boolean(), new Boolean(), /x/, /x/]) {
    while (x % x * /x/) {}
  }
})()

/* Don't crash. */

