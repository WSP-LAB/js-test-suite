load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

var q = [];
for each (b in [0x3FFFFFFF, 0x3FFFFFFF, 0x3FFFFFFF]) {
  for each (let e in [{}, {}, {}, "", {}]) { 
    b = (b | 0x40000000) + 1;
    q.push(b);
  }
}
function testLetWithUnstableGlobal() {
    return q.join(",");
}
assertEq(testLetWithUnstableGlobal(), "2147483648,-1073741823,-1073741822,-1073741821,-1073741820,2147483648,-1073741823,-1073741822,-1073741821,-1073741820,2147483648,-1073741823,-1073741822,-1073741821,-1073741820");
