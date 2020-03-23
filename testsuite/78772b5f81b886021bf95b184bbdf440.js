load("201224b0d1c296b45befd2285e95dd42.js");
// The argument to Map may be a generator-iterator that produces no values.

function none() {
    if (0) yield 0;
}
var m = new Map(none());
assertEq(m.size, 0);
