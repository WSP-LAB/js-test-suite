load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
var set = new Set(['a']);
var n = 5;
for (let v of set) {
    if (n === 0)
        break;
    let g = set(new Set(0xffffffff, n), 1);
}
