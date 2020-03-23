load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-d56149240ef8-linux
// Flags: -j
//
function foo(f) {
    f()
}
foo((eval("\
    (function () {\
        for each(l in [0, 0xB504F332, 0]) {\
            for (d in Error()) {}\
        }\
    })\
")))
