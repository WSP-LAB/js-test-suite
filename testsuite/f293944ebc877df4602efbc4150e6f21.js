load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError: too much recursion
function TestCase(d) {
    toPrinted(d)
}
function toPrinted(value) {}
function reportCompare (expected, actual, description) {
    if (typeof description == "undefined")
        toPrinted(expected);
    new TestCase(description);
    reportCompare();
}
reportCompare(Math['LN2'], Math['LN2'], 0);
