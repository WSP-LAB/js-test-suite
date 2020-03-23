load("201224b0d1c296b45befd2285e95dd42.js");
function testMulOverflow() {
    var a = [];
    for (let j=0;j<5;++j) a.push(0 | ((0x60000009) * 0x60000009));
    return a.join(",");
}
assertEq(testMulOverflow(), "-1073741824,-1073741824,-1073741824,-1073741824,-1073741824");
