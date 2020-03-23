load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert.
function f0() {
    var v0;
    var v1;
    while (v1) {
        v1 = v0 + v1;
        v0 = v1 + v1;
    }
    return v0;
}
assertEq(f0(), undefined);
