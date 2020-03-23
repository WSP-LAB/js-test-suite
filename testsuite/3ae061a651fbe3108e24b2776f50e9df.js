load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

var obj = {a: 0, b: 0, c: 0, d: 0, get e() { throw StopIteration; }};
try {
    for each (x in obj) {}
    FAIL;
} catch (exc) {
    assertEq(exc, StopIteration);
}
