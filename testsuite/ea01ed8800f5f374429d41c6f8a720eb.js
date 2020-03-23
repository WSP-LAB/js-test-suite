load("201224b0d1c296b45befd2285e95dd42.js");
function TestCase(n, d, e, a) {};
function reportCompare (expected, actual) {
    var testcase = new TestCase("unknown-test-name", null, expected, actual);
}
reportCompare();
var b = eval(uneval((TestCase)));
reportCompare(true, true);
expect = actual = ''
reportCompare(expect, actual);
