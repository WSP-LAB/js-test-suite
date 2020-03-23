load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    return (42.0 + Math.abs(1.0e60)) | 0;
}
assertEq(f(), 0);
assertEq(f(), 0);
