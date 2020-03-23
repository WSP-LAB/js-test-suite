load("201224b0d1c296b45befd2285e95dd42.js");
// vim: set ts=8 sts=4 et sw=4 tw=99:

function F() {
    var T = { };
    try {
        throw 12;
    } catch (e) {
        T.x = 5;
        return T;
    }
}

assertEq((new F()).x, 5);

