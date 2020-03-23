load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-c0dbbcfdb583-linux
// Flags: -j
//
(function (){
  var c;
  (eval("\
    (function() {\
      eval(\"\
      for each(w in[0,0,0]) { print(c) }\
      \" , function(){})\
    })\
  "))()
})()
