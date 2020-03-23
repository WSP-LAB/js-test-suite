load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
    evalcx("eval(\"throw<x/>\")", Function.a)
} catch (e) {
    caught = true;
}
assertEq(caught, true);
