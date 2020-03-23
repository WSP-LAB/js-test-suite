load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError; need-for-each

// Binary: cache/js-dbg-64-074fb996dfd7-linux
// Flags:
//

(function() {
    for each(let Math in []) {}
}).floor(2147483649)
