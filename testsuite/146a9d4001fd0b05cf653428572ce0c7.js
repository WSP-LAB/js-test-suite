load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
for (var a = 0; a < 7; ++a) {
    if (a == 1) {
        Iterator()
    }
}

