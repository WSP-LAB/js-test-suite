load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
        return ~~(x >>> 0) / (x >>> 0) | 0
}
f(1)
assertEq(f(-1), 0);
