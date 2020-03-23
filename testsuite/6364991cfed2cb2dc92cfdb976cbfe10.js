load("201224b0d1c296b45befd2285e95dd42.js");
function testNativeSetter() {
    var re = /foo/;
    var N = 19;
    for (var i = 0; i < N; i++)
        re.lastIndex = i;
    assertEq(re.lastIndex, N - 1);
}
testNativeSetter();
