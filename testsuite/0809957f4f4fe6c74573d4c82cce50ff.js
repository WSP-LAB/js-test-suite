load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-175ef7145705-linux
// Flags: -j
//
for (let cc = 0; cc < 3; ++cc) {
    var c = cc;
    print("" + new Number(.5));
    for each (b in [0 / 0, 0 / 0]) {}
}
