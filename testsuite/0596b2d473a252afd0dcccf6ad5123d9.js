load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-0230a9e80c1f-linux
// Flags: -j
//
(function(){
  eval("\
    for each(let a in['A','A','A','A','A','A','A','A']) {\
      L:for each(let b in a) {\
        break L\
      }\
    }\
  ")
})()