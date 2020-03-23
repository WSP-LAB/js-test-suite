load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-d05dc3d31c75-linux
// Flags: -j
//
for each(let c in [1.3]) {
    for (var x = 0; x < 4; ++x) {
        gczeal(2);
    }
}
