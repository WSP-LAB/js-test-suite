load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function testUndemoteLateGlobalSlots() {
    for each (aaa in ["", "", 0/0, ""]) {
        ++aaa;
        for each (bbb in [0, "", aaa, "", 0, "", 0/0]) {
        }
    }
    delete aaa;
    delete bbb;
    return "ok";
}
assertEq(testUndemoteLateGlobalSlots(), "ok");
