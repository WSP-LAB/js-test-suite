load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-a9887b731f29-linux
// Flags: -j
//
(function () {
    const c = 0;
    with ({}) {
        for each (k in [{}, {}]) {
            "" + k;
        }
    }
})();
