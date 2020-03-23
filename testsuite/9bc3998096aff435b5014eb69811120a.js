load("201224b0d1c296b45befd2285e95dd42.js");
function unboxint() {
    var q = 0;
    var o = [4];
    for (var i = 0; i < 100; ++i)
        q = o[0] << 1;
    return q;
}
assertEq(unboxint(), 8);
