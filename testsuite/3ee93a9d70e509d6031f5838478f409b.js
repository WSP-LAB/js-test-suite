load("201224b0d1c296b45befd2285e95dd42.js");
function testLirBufOOM()
{
    var a = [
             "12345678901234",
             "123456789012",
             "1234567890123456789012345678",
             "12345678901234567890123456789012345678901234567890123456",
             "f",
             "$",
             "",
             "f()",
             "(\\*)",
             "b()",
             "()",
             "(#)",
             "ABCDEFGHIJK",
             "ABCDEFGHIJKLM",
             "ABCDEFGHIJKLMNOPQ",
             "ABCDEFGH",
             "(.)",
             "(|)",
             "()$",
             "/()",
             "(.)$"
             ];
    
    for (var j = 0; j < 200; ++j) {
        var js = "" + j;
        for (var i = 0; i < a.length; i++)
            "".match(a[i] + js)
    }
    return "ok";
}
assertEq(testLirBufOOM(), "ok");
