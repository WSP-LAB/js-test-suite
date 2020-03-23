load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

Function("\
  gczeal(4,false);\
  function f(){\
    \"use strict\";\
    this.x = Object\
  }\
  for each(y in[0,0]){\
    try{\
      new f\
    }\
    catch(e){}\
  }\
")()
