load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    return y.byteOffset;
}
var y;
for (var j = 0; j < 1; ++j) {
    y = new Float32Array();
}
f();
y = 0;
assertEq(f(), undefined);
assertEq(f(), undefined);
