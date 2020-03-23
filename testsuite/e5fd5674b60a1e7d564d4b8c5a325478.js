load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-32-adc45b0a01c8-linux
// Flags: -m -n
//
eval("\
  x = evalcx('split');\
  evalcx(\"for(e in <x/>){}\" ,x)\
")
