load("201224b0d1c296b45befd2285e95dd42.js");
function testNullToString()
{
    var a = [];
    for (var i = 0; i < 10; i++)
        a.push(String(null));
    for (i = 0; i < 10; i++) {
        var t = typeof a[i];
        if (t != "string")
           a.push(t);
    }
    return a.join(",");
}
assertEq(testNullToString(), "null,null,null,null,null,null,null,null,null,null");
