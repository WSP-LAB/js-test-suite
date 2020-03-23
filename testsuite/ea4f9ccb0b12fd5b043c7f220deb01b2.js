load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function () {
    try {
        eval("\
          for each(let d in[0,0,0,0,0,0,0,0]) {\
            for(let b in[0,0]) {}\
          }\
        ")
    } catch (e) {}
})()

