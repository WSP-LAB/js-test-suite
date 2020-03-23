load("201224b0d1c296b45befd2285e95dd42.js");

/* Don't crash. */
function f() {
    var x;
    x.a;
    x = {};
}

try {
    f();
    assertEq(0, 1);
} catch(e) {

}
