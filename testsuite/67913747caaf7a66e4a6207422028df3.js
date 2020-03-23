load("201224b0d1c296b45befd2285e95dd42.js");
function testOSRNewTarget(expected) {
    for (let i = 0; i < 1100; i++)
        assertEq(new.target, expected);
}

new testOSRNewTarget(testOSRNewTarget);
