load("201224b0d1c296b45befd2285e95dd42.js");

function TestCase(n, d, e, a) {}
function reportCompare (expected, actual, description) {
  new TestCase("", description, expected, actual);
}
new TestCase( "", "", 0, Number(new Number()) );
reportCompare(true, true);
evaluate("\
function TestCase(n, d, e, a) {}\
test_negation(-2147483648, 2147483648);\
test_negation(2147483647, -2147483647);\
function test_negation(value, expected) {\
    reportCompare(expected, '', '-(' + value + ') == ' + expected);\
}");
