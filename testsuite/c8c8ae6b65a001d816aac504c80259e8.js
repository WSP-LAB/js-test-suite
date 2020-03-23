load("201224b0d1c296b45befd2285e95dd42.js");
function testObjectToString() {
    var o = {toString: () => "foo"};
    var s = "";
    for (var i = 0; i < 10; i++)
        s += o;
    return s;
}
assertEq(testObjectToString(), "foofoofoofoofoofoofoofoofoofoo");
