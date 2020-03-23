load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

x = true;
(function() {
  for each(let c in [0, x]) {
    (arguments)[4] *= c
  }
})()

// don't assert
