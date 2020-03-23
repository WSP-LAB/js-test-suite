load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

Function("\
    for each(let w in [(5), false, Number, false]) {\
        (function f(zzzzzz) {\
            return zzzzzz.length == 0 ? 0 : zzzzzz[0] + f(zzzzzz.slice(1))\
        })([, [], [], w, , ])\
    }\
")()

Function("\
    for each(let w in [(void 0), (void 0), false, false, false, false, false, \
                       undefined, undefined, false, (void 0), undefined]) {\
        (function f(zzzzzz) {\
            return zzzzzz.length == 0 ? 0 : zzzzzz[0] + f(zzzzzz.slice(1))\
        })([w, , w, w, [], []])\
    }\
")()
