load("201224b0d1c296b45befd2285e95dd42.js");
// The second for-loop is only reachable via the catch block, which Ion
// does not compile.
for (;;) {
    try {
        throw 3;
    } catch(e) {
        break;
    }
}
for (var i = 0; i < 15; i++) {}
