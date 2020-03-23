load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

for (a in [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    try { (function() {
            for each(l in [false, 0, 0, 0]) {}
            h
        })()
    } catch(e) {}
}

