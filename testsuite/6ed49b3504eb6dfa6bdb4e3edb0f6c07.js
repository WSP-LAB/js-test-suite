load("201224b0d1c296b45befd2285e95dd42.js");
function matchInLoop() {
    var k = "hi";
    for (var i = 0; i < 10; i++) {
        var result = k.match(/hi/) != null;
    }
    return result;
}
assertEq(matchInLoop(), true);
