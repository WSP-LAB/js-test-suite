load("201224b0d1c296b45befd2285e95dd42.js");
// env.find throws a TypeError if the argument is not an identifier.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
var hits = 0;
g.h = function () {
    var env = dbg.getNewestFrame().environment;
    assertThrowsInstanceOf(function () { env.find(); }, TypeError);
    assertThrowsInstanceOf(function () { env.find(""); }, TypeError);
    assertThrowsInstanceOf(function () { env.find(" "); }, TypeError);
    assertThrowsInstanceOf(function () { env.find(0); }, TypeError);
    assertThrowsInstanceOf(function () { env.find("0"); }, TypeError);
    assertThrowsInstanceOf(function () { env.find("0xc"); }, TypeError);
    assertThrowsInstanceOf(function () { env.find("Anna Karenina"); }, TypeError);
    hits++;
};
g.eval("h();");
g.eval("with ([1]) h();");
assertEq(hits, 2);
