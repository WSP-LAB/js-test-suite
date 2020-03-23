load("201224b0d1c296b45befd2285e95dd42.js");
function orTestHelper(a, b, n)
{
    var k = 0;
    for (var i = 0; i < n; i++) {
        if (a || b)
            return 1;
    }
    return 0;
}

orTestHelper("", NaN, 30)
orTestHelper("", null, 30);
var x = orTestHelper("", 1, 5)
assertEq(x, 1)
