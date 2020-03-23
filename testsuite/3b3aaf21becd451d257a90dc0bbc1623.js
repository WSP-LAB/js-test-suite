load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function testBug465483() {
    var a = new Array(4);
    var c = 0;
    for each (i in [4, 'a', 'b', (void 0)]) a[c++] = '' + (i + i);
    return a.join(',');
}
assertEq(testBug465483(), '8,aa,bb,NaN');
