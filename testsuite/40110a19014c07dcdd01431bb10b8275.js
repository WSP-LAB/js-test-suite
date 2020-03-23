load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function() {
  for each(let d in [{}, {}, 0]) {
    for each(e in [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
      d.__defineSetter__("", function() {})
    }
  }
})()

// don't assert
