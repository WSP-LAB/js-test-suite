load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

//test no multitrees assert
function testBug462407() {
    for each (let i in [0, {}, 0, 1.5, {}, 0, 1.5, 0, 0]) { }
    return true;
}
assertEq(testBug462407(), true);
