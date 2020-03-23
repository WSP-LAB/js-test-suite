load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

for (let b in [0]) {
    let b = b ? 0 : 1
}
