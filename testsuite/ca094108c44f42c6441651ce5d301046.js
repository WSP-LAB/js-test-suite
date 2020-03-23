load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| valgrind

function testRegExpTest() {
    var r = /abc/;
    var flag = false;
    for (var i = 0; i < 10; ++i)
        flag = r.test("abc");
    return flag;
}
assertEq(testRegExpTest(), true);
