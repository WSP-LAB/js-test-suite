load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
(function() {
  for (let z in [true]) {
    (new(eval("for(l in[0,0,0,0]){}"))
     (((function f(a, b) {
      if (a.length == b) {
        return (z)
      }
      f(a, b + 1)
    })([,,], 0)), []))
  }
})()

