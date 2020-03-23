load("201224b0d1c296b45befd2285e95dd42.js");
function inObjectTest() {
    var o = {p: 1, q: 2, r: 3, s: 4, t: 5};
    var r = 0;
    for (var i in o) {
        if (!(i in o))
            break;
        if ((i + i) in o)
            break;
        ++r;
    }
    return r;
}
assertEq(inObjectTest(), 5);
