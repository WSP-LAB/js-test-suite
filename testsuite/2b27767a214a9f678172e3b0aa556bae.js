load("201224b0d1c296b45befd2285e95dd42.js");
q = "";
function g() { q += "g"; }
function h() { q += "h"; }
a = [g, g, g, g, h];
for (i=0; i<5; i++) { f = a[i];  f(); }

function testRebranding() {
    return q;
}
assertEq(testRebranding(), "ggggh");
