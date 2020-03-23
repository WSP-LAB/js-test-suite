load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

for each(let e in [0x40000000]) {
    (0)[e]
}

/* Don't assert. */

