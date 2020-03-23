load("201224b0d1c296b45befd2285e95dd42.js");
let tenured = {};
gc();
for (let i = 0; i < 100000; i++) {
    tenured[i/2] = {};
}
