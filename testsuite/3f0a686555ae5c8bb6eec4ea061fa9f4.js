load("201224b0d1c296b45befd2285e95dd42.js");
var t = [4];
var stop;
Object.freeze(t);
do {
    stop = inIon();
    t[0] = 2;
    assertEq(t[0], 4);
} while (!stop);
