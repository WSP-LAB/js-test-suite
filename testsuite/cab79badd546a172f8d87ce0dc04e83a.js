load("201224b0d1c296b45befd2285e95dd42.js");
try {
    gczeal(123);
} catch(e) {
    assertEq(e.toString().includes("out of range"), true);
}
