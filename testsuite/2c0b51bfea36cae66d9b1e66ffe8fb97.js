load("201224b0d1c296b45befd2285e95dd42.js");
function testBailoutNewTarget() {
    function Inner(ex, forceRectifier) {
        bailout();
        assertEq(new.target, ex);
    }

    for (let i = 0; i < 1100; i++)
        new Inner(Inner);
}

for (let i = 0; i < 15; i++)
    testBailoutNewTarget();
