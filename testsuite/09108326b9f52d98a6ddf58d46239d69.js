load("201224b0d1c296b45befd2285e95dd42.js");
function g(code) {
  f = Function(code);
  for (a in f()) {}
}

/* Get call ic in a state to call CompileFunction for new functions. */
g()
g("(function(){})")
g()

/* Call generator with frame created by call ic + CompileFunction. */
g("yield")
