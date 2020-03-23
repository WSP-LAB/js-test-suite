load("201224b0d1c296b45befd2285e95dd42.js");
function testToStringBeforeValueOf()
{
    var o = {toString: function() { return "s"; }, valueOf: function() { return "v"; } };
    var a = [];
    for (var i = 0; i < 10; i++)
        a.push(String(o));
    return a.join(",");
}
assertEq(testToStringBeforeValueOf(), "s,s,s,s,s,s,s,s,s,s");
