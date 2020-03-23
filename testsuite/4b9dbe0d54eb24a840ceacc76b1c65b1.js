load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
for (var i = 0; i < 1; i++) {
    let y
    if (undefined) continue
    undefined.e
}
