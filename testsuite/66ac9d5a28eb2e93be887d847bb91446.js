load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    assertEq(typeof this, "object");
}
this.f();
function gg() {
    for (var j = 0; j < 3; ++j) {
        f();
    }
};
gg();
