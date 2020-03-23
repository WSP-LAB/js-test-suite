load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-32-e25c8949931d-linux
// Flags:
//
(eval("\
  (function(){\
    b = {};\
    b.__proto__=evalcx('split');\
    print(b)\
    }\
  )\
"))()
