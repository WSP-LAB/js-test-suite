load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Test no assert or crash
function testBug465261() {
    for (let z = 0; z < 2; ++z) { for each (let x in [0, true, (void 0), 0, (void
    0)]) { if(x){} } };
    return true;
}
assertEq(testBug465261(), true);
