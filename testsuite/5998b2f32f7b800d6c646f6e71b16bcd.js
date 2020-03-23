load("201224b0d1c296b45befd2285e95dd42.js");
function testSwitchString() {
    var x = "asdf";
    var ret = 0;
    for (var i = 0; i < 100; ++i) {
        switch (x) {
        case "asdf":
            x = "asd";
            ret += 1;
            break;
        case "asd":
            x = "as";
            ret += 2;
            break;
        case "as":
            x = "a";
            ret += 3;
            break;
        case "a":
            x = "foo";
            ret += 4;
            break;
        default:
            x = "asdf";
        }
    }
    return ret;
}
assertEq(testSwitchString(), 200);
