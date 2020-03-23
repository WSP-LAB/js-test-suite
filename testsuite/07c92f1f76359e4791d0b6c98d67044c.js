load("201224b0d1c296b45befd2285e95dd42.js");
function testBranchCse() {
    empty = [];
    out = [];
    for (var j=0;j<10;++j) { empty[42]; out.push((1 * (1)) | ""); }
    return out.join(",");
}
assertEq(testBranchCse(), "1,1,1,1,1,1,1,1,1,1");
