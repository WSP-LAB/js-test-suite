load("201224b0d1c296b45befd2285e95dd42.js");
function regexpLastIndex()
{
    var n = 0;
    var re = /hi/g;
    var ss = " hi hi hi hi hi hi hi hi hi hi";
    for (var i = 0; i < 10; i++) {
        // re.exec(ss);
        n += (re.lastIndex > 0) ? 3 : 0;
        re.lastIndex = 0;
    }
    return n;
}
assertEq(regexpLastIndex(), 0);
