load("201224b0d1c296b45befd2285e95dd42.js");
function testRegexpGet() {
    var re = /hi/;
    var a = [];
    for (let i = 0; i < 5; ++i)
        a.push(re.source);
    return a.toString();
}
assertEq(testRegexpGet(), "hi,hi,hi,hi,hi");
