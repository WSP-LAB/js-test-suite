load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

var c;
(function() {
  for each(e in [0, 0]) {
    (arguments)[1] *= c
  }
})()

// don't assert
