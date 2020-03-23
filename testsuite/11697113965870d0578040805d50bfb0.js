load("201224b0d1c296b45befd2285e95dd42.js");
function inArrayTest() {
    var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < a.length; i++) {
        if (!(i in a))
            break;
    }
    return i;
}
assertEq(inArrayTest(), 10);
