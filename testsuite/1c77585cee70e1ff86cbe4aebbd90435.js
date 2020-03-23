load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
Function("\n\
  for (a = 0; a < 3; a++) {\n\
    if (a == 0) {} else {\n\
      this.__defineSetter__(\"\",1)\n\
    }\n\
  }\n\
")()

/* Don't crash/assert. */

